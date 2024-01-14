"""
Test distribution contents

"""

import unittest
from pathlib import Path


class TestDistContents(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.dist = Path(__file__).resolve().parent.parent.joinpath("dist")

    def test_images(self):
        img_dir = self.dist / "static" / "img"
        self.assertTrue(img_dir.joinpath("favicon.svg").exists())
        self.assertTrue(img_dir.joinpath("favicon.svg").is_file())
        self.assertTrue(img_dir.joinpath("favicon.png").exists())
        self.assertTrue(img_dir.joinpath("favicon.png").is_file())
        self.assertTrue(img_dir.joinpath("anonymous.svg").exists())
        self.assertTrue(img_dir.joinpath("anonymous.svg").is_file())
        self.assertTrue(img_dir.joinpath("logo.svg").exists())
        self.assertTrue(img_dir.joinpath("logo.svg").is_file())

    def test_css(self):
        css_dir = self.dist / "static" / "css"
        self.assertTrue(css_dir.joinpath("main.css").exists())
        self.assertTrue(css_dir.joinpath("main.css").is_file())

    def test_js(self):
        js_dir = self.dist / "static" / "js"
        self.assertTrue(js_dir.joinpath("main.bundle.js").exists())
        self.assertTrue(js_dir.joinpath("main.bundle.js").is_file())

    def test_base_html(self):
        self.assertTrue(self.dist.joinpath("base.html").exists())
        self.assertTrue(self.dist.joinpath("base.html").is_file())

    def test_sidebars(self):
        templates_dir = self.dist / "_sidebars"

        self.assertTrue(templates_dir.joinpath("authenticated.html").exists())
        self.assertTrue(templates_dir.joinpath("authenticated.html").is_file())
        self.assertTrue(templates_dir.joinpath("can_comment.html").exists())
        self.assertTrue(templates_dir.joinpath("can_comment.html").is_file())
        self.assertTrue(templates_dir.joinpath("can_edit.html").exists())
        self.assertTrue(templates_dir.joinpath("can_edit.html").is_file())
        self.assertTrue(templates_dir.joinpath("create_view.html").exists())
        self.assertTrue(templates_dir.joinpath("create_view.html").is_file())
        self.assertTrue(templates_dir.joinpath("anonymous.html").exists())
        self.assertTrue(templates_dir.joinpath("anonymous.html").is_file())

    def test_articles(self):
        templates_dir = self.dist / "articles"
        self.assertTrue(templates_dir.joinpath("article_list.html").exists())
        self.assertTrue(templates_dir.joinpath("article_list.html").is_file())
        self.assertTrue(templates_dir.joinpath("article_detail.html").exists())
        self.assertTrue(templates_dir.joinpath("article_detail.html").is_file())
        self.assertTrue(templates_dir.joinpath("article_form.html").exists())
        self.assertTrue(templates_dir.joinpath("article_form.html").is_file())

    def test_users(self):
        templates_dir = self.dist / "users"
        self.assertTrue(templates_dir.joinpath("profile.html").exists())
        self.assertTrue(templates_dir.joinpath("profile.html").is_file())

    def test_auth(self):
        templates_dir = self.dist / "auth"
        self.assertTrue(templates_dir.joinpath("signin_form.html").exists())
        self.assertTrue(templates_dir.joinpath("signin_form.html").is_file())
        self.assertTrue(templates_dir.joinpath("signup_form.html").exists())
        self.assertTrue(templates_dir.joinpath("signup_form.html").is_file())


if __name__ == "__main__":
    unittest.main()
