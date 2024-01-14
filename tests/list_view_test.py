import http.server
import os
import threading
import unittest
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.common.by import By

DIST_DIR = Path(__file__).resolve().parent.parent.joinpath("dist")
ARTICLES_DIR = DIST_DIR.joinpath("articles")
HTTPD_PORT = 8000


class TestListView(unittest.TestCase):
    browser: webdriver.Chrome

    @staticmethod
    def start_httpd(port: int = HTTPD_PORT):
        os.chdir(ARTICLES_DIR)
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

    def test_distribution_exists(self):
        dist = ARTICLES_DIR / "article_list.html"
        self.assertTrue(dist.exists())

    def setUp(self):
        self.browser.get(f"http://localhost:{HTTPD_PORT}/article_list.html")
        self.browser.implicitly_wait(0.5)

    def test_title(self):
        element = self.browser.find_element(By.CSS_SELECTOR, "div.h4")
        self.assertIsNotNone(element)
        self.assertEqual(element.text, "Articles")


if __name__ == "__main__":
    unittest.main()
