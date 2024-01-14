"""
Test articles list template (development distribution)

"""

import http.server
import json
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
        self.browser.get(f"http://localhost:{HTTPD_PORT}/article_list.html")
        self.browser.implicitly_wait(0.5)

    def test_distribution_exists(self):
        dist = DIST_DIR / "article_list.html"
        self.assertTrue(dist.exists())

    def test_title(self):
        selector = "div.h4[role=heading]"
        element = self.browser.find_element(By.CSS_SELECTOR, selector)
        self.assertIsNotNone(element)
        self.assertEqual(element.text, "Articles")

    def test_articles_block(self):
        element = self.browser.find_element(By.ID, "articlesContainer")
        self.assertIsNotNone(element)
        self.assertIn("col", element.get_attribute("class"))

    def test_masonry_applied(self):
        element = self.browser.find_element(By.ID, "articlesContainer")
        section = element.find_element(By.TAG_NAME, "section")
        self.assertIsNotNone(section)
        masonry = json.loads(section.get_attribute("data-masonry"))
        self.assertDictEqual(masonry, {"percentPosition": True})

    def test_articles_count(self):
        articles = self.browser.find_elements(By.TAG_NAME, "article")
        self.assertEqual(len(articles), 8)


if __name__ == "__main__":
    unittest.main()
