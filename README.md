DJANGO BLOG - BOOTSTRAP TEMPLATES
=================================

[![](https://github.com/edu-python-course/blog-bootstrap/actions/workflows/deploy_pages.yml/badge.svg)](https://edu-python-course.github.io/blog-bootstrap)
![](https://github.com/edu-python-course/blog-bootstrap/actions/workflows/test_webpack_builds.yml/badge.svg)
![](https://github.com/edu-python-course/blog-bootstrap/actions/workflows/run_selenium.yml/badge.svg)

This repo contains Bootstrap5 templates for the main training project, and
itself is a supporting subproject.

Getting started
---------------

For those who want to use the templates provided in this repository -
the shortest way is to check the 
[release page](https://github.com/edu-python-course/blog-bootstrap/releases).
Starting from `ver2.0` each release has a **dist.zip** attached to it.
There are partials for individual site parts within the archive. These are
suitable for using with template processors (like Django templates or Jinja2).

In case you want to adjust the sources before build:

1. Clone the repo to your local machine
2. Install project dependencies: `npm install`
3. Build templates: `npm run build`
   - to build the developer's version: `npm run build:dev` 

Contents
--------

### Production vs Development bundles

Production bundle is aimed to be served via GitHub pages. It's main purpose is
the site demonstration.

The development bundle is for usage with other projects (Django, Flask etc.).

Both production and development distributions bundle the JS code into a single
file. The same is for CSS. The only difference is the output distribution
structure.

### Sources

All the source are located within **src** directory.

`index.js` file is the entry point for the `webpack`. All resources required
by webpack are to be imported here.

`scss` directory contains individual styles used by various templates.

`js` directory contains custom JavaScript modules used within the project.

`views` directory contains templates for the HTML pages.

References
----------

- [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/)
- [Main project](https://github.com/edu-python-course/blog)
