#!/usr/bin/env python3
"""End-to-end browser test for mykahani.pk website."""

import subprocess
import time
import sys
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:3456"
DIST_DIR = "/media/fahd/maindrive/mykahani/mykahani/dist"


def start_server():
    """Start a simple HTTP server for the dist folder."""
    proc = subprocess.Popen(
        [sys.executable, "-m", "http.server", "3456", "--directory", DIST_DIR],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    time.sleep(2)
    return proc


def run_tests():
    server = start_server()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(viewport={"width": 1280, "height": 800})
            page = context.new_page()

            print("[TEST] Navigating to homepage...")
            page.goto(BASE_URL, wait_until="networkidle")
            page.wait_for_timeout(2000)

            # Screenshot 1: Full page desktop
            print("[TEST] Taking desktop full-page screenshot...")
            page.screenshot(path="/media/fahd/maindrive/mykahani/test-desktop.png", full_page=True)

            # Verify key sections exist
            sections = [
                ("Hero section", "text=Your Mental Health"),
                ("Stats section", "text=Clients Helped"),
                ("Services section", "text=Individual Therapy"),
                ("Challenges section", "text=You Are Not Alone"),
                ("Philosophy section", "text=No Band-Aid Solutions"),
                ("Corporate section", "text=Corporate Wellness"),
                ("How It Works", "text=Simple. Private. Effective."),
                ("Testimonials", "text=Stories of Hope"),
                ("FAQ section", "text=Frequently Asked Questions"),
                ("Contact section", "text=Taking the First Step"),
                ("Footer", "text=MyKahani"),
            ]

            all_passed = True
            for name, selector in sections:
                try:
                    page.wait_for_selector(selector, timeout=5000)
                    print(f"  [PASS] {name} found")
                except Exception as e:
                    print(f"  [FAIL] {name} NOT found: {e}")
                    all_passed = False

            # Verify navigation links work
            print("[TEST] Testing navigation links...")
            nav_links = [
                ("Services", "#services"),
                ("Corporate", "#corporate"),
                ("How It Works", "#how-it-works"),
                ("FAQs", "#faqs"),
                ("Contact", "#contact"),
            ]
            for name, href in nav_links:
                try:
                    page.click(f'a[href="{href}"]')
                    page.wait_for_timeout(1000)
                    print(f"  [PASS] Navigated to {name}")
                except Exception as e:
                    print(f"  [FAIL] Could not navigate to {name}: {e}")
                    all_passed = False

            # Test mobile viewport
            print("[TEST] Testing mobile viewport...")
            page.set_viewport_size({"width": 375, "height": 812})
            page.reload(wait_until="networkidle")
            page.wait_for_timeout(2000)
            page.screenshot(path="/media/fahd/maindrive/mykahani/test-mobile.png", full_page=True)

            # Verify mobile menu button exists
            try:
                page.wait_for_selector("[aria-label='Open menu']", timeout=5000)
                print("  [PASS] Mobile menu button found")
            except Exception as e:
                print(f"  [FAIL] Mobile menu button NOT found: {e}")
                all_passed = False

            # Verify form exists in contact section
            print("[TEST] Testing contact form...")
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(1000)
            try:
                page.wait_for_selector("input[placeholder='Your name']", timeout=5000)
                page.wait_for_selector("input[type='email']", timeout=5000)
                page.wait_for_selector("input[type='tel']", timeout=5000)
                page.wait_for_selector("select", timeout=5000)
                print("  [PASS] Contact form fields found")
            except Exception as e:
                print(f"  [FAIL] Contact form fields NOT found: {e}")
                all_passed = False

            # Test FAQ accordion
            print("[TEST] Testing FAQ accordion...")
            page.evaluate("document.querySelector('#faqs').scrollIntoView()")
            page.wait_for_timeout(1000)
            try:
                page.click("text=Is online therapy as effective")
                page.wait_for_timeout(500)
                page.screenshot(path="/media/fahd/maindrive/mykahani/test-faq-open.png")
                print("  [PASS] FAQ accordion opens")
            except Exception as e:
                print(f"  [FAIL] FAQ accordion did not open: {e}")
                all_passed = False

            browser.close()

            if all_passed:
                print("\n[RESULT] All tests PASSED")
                return 0
            else:
                print("\n[RESULT] Some tests FAILED")
                return 1
    finally:
        server.terminate()


if __name__ == "__main__":
    sys.exit(run_tests())
