import http.server
import os
import threading
import unittest
from pathlib import Path

from selenium import webdriver

HTTPD_PORT = 8000
DIST_DIR = Path(__file__).resolve().parent.parent / "dist"


class TestArticlesHelper(unittest.TestCase):
    browser: webdriver.Chrome
    dist: Path = DIST_DIR / "articles"

    @classmethod
    def start_httpd(cls, port: int = HTTPD_PORT):
        os.chdir(cls.dist)
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
