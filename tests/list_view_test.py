"""
Test articles list template (development distribution)

"""

import json
import unittest

from selenium.webdriver.common.by import By

from _helpers import HTTPD_PORT, TestArticlesHelper


class TestListView(TestArticlesHelper):

    def setUp(self):
        self.browser.get(f"http://localhost:{HTTPD_PORT}/article_list.html")
        self.browser.implicitly_wait(0.5)

    def test_title(self):
        selector = "div.h4[role=heading]"
        element = self.browser.find_element(By.CSS_SELECTOR, selector)
        self.assertIsNotNone(element)
        self.assertEqual(element.text, "Articles")

    def test_articles_block(self):
        element = self.browser.find_element(By.ID, "articlesContainer")
        self.assertIsNotNone(element)
        self.assertIn("col", element.get_attribute("class"))

    def test_sections(self):
        elements = self.browser.find_elements(By.TAG_NAME, "section")
        self.assertEqual(len(elements), 2)
        articles, pagination = elements
        self.assertEqual("ArticlesList", articles.get_attribute("aria-label"))
        self.assertIn("row", articles.get_attribute("class"))
        self.assertIn("row-cols-1", articles.get_attribute("class"))
        self.assertEqual("Pagination", pagination.get_attribute("aria-label"))
        self.assertIn("row", pagination.get_attribute("class"))
        self.assertIn("row-cols-1", pagination.get_attribute("class"))

    def test_masonry_applied(self):
        selector = "#articlesContainer section:first-of-type"
        element = self.browser.find_element(By.CSS_SELECTOR, selector)
        masonry = json.loads(element.get_attribute("data-masonry"))
        self.assertDictEqual(masonry, {"percentPosition": True})

    def test_articles(self):
        selector = "#articlesContainer section:first-of-type"
        container = self.browser.find_element(By.CSS_SELECTOR, selector)
        articles = container.find_elements(By.TAG_NAME, "article")
        self.assertEqual(len(articles), 8)

    def test_pagination(self):
        selector = "#articlesContainer section:last-of-type"
        container = self.browser.find_element(By.CSS_SELECTOR, selector)

        nav = container.find_element(By.TAG_NAME, "nav")
        self.assertIn("justify-content-center", nav.get_attribute("class"))

        ul = nav.find_element(By.TAG_NAME, "ul")
        self.assertIn("pagination", ul.get_attribute("class"))

        for li in ul.find_elements(By.TAG_NAME, "li"):
            self.assertIn("page-item", li.get_attribute("class"))
            a = li.find_element(By.TAG_NAME, "a")
            self.assertIn("page-link", a.get_attribute("class"))


if __name__ == "__main__":
    unittest.main()
