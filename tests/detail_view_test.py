"""
Test articles list template (development distribution)

"""

import http.server
import os
import threading
import unittest
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.common.by import By

DIST_DIR = Path(__file__).resolve().parent.parent.joinpath("dist", "articles")
HTTPD_PORT = 8000


class TestListView(unittest.TestCase):
    browser: webdriver.Chrome

    @staticmethod
    def start_httpd(port: int = HTTPD_PORT):
        os.chdir(DIST_DIR)
        handler = http.server.SimpleHTTPRequestHandler
        # noinspection PyTypeChecker
        httpd = http.server.HTTPServer(("", port), handler)
        httpd.serve_forever()

    @classmethod
    def setUpClass(cls):
        httpd = threading.Thread(target=cls.start_httpd, daemon=True)
        httpd.start()

        options = webdriver.ChromeOptions()
        options.add_argument("--headless")
        cls.browser = webdriver.Chrome(options=options)

    @classmethod
    def tearDownClass(cls):
        cls.browser.quit()

    def setUp(self):
        self.browser.get(f"http://localhost:{HTTPD_PORT}/article_detail.html")
        self.browser.implicitly_wait(0.5)

    def test_title(self):
        element = self.browser.find_element(By.TAG_NAME, "h1")
        self.assertIn("text-center", element.get_attribute("class"))
        title = ("Ship-wide, carnivorous crews impressively deserve "
                 "an extraterrestrial, devastated ferengi")
        self.assertEqual(element.text, title)

    def test_data_section(self):
        selector = "section[aria-label=ArticleData]"
        element = self.browser.find_element(By.CSS_SELECTOR, selector)
        self.assertIn("flex-row", element.get_attribute("class"))

    def test_topics(self):
        selector = "ul[aria-label=ArticleTopics"
        element = self.browser.find_element(By.CSS_SELECTOR, selector)
        self.assertIn("flex-row", element.get_attribute("class"))
        topics = element.find_elements(By.TAG_NAME, "li")
        self.assertEqual(len(topics), 3)


if __name__ == "__main__":
    unittest.main()
