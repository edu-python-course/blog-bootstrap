"""
Test articles list template (development distribution)

"""

import unittest

from selenium.webdriver.common.by import By

from _helpers import HTTPD_PORT, TestArticlesHelper


class TestDetailView(TestArticlesHelper):

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
