"""
Test articles list template

"""

import http.server
import os
import unittest
from pathlib import Path
from threading import Thread

from selenium import webdriver
from selenium.webdriver.common.by import By

DIST_DIR = Path(__file__).resolve().parent.parent / "dist"


class TestArticleList(unittest.TestCase):
    driver: webdriver

    @classmethod
    def start_server(cls, port=8000):
        server_address = ("localhost", port)
        os.chdir(DIST_DIR)

        # noinspection PyTypeChecker
        httpd = http.server.HTTPServer(
            server_address, http.server.SimpleHTTPRequestHandler
        )
        httpd.serve_forever()

    @classmethod
    def setUpClass(cls):
        test_server = Thread(target=cls.start_server, daemon=True)
        test_server.start()

        cls.driver = webdriver.Chrome()
        cls.driver.implicitly_wait(0.5)

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    def setUp(self):
        self.driver.get("http://localhost:8000/articles/article_list.html")

    def test_file_exists(self):
        template = DIST_DIR / "articles" / "article_list.html"
        self.assertTrue(template.exists())

    def test_all_articles_are_rendered(self):
        articles = self.driver.find_elements(By.TAG_NAME, "article")
        self.assertEqual(len(articles), 8)


if __name__ == "__main__":
    unittest.main()
