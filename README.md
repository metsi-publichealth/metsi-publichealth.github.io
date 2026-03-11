# metsi-public-health website

This repository contains the source code for the metsi-public-health website. 
This website is built with [quarto](https://quarto.org/) and relies on automation wherever possible. Many thanks to [Seb Funk](https://www.lshtm.ac.uk/aboutus/people/funk.sebastian) for helping setting up the website and themes.

## Adding a new team member

Used to generate this page: https://metsi-publichealth.github.io/people.html.

Adding a new team member only requires adding a new team member ID card in [`_data/team/`](_data/team/). The `README` there details how to do it.

The 'people' page will automatically include the new member.

## Updating the list of publications

Used to generate this page: https://metsi-publichealth.github.io/pubs.html.

Any additional publications, please add to the bibtex file [papers.bib](https://github.com/metsi-publichealth/metsi-publichealth.github.io/blob/main/_data/papers.bib)

## Writing a new blog post

Used to generate this page: https://metsi-publichealth.github.io/blog.html (and the new blog post page).

Create a new folder `YYYY-mm-dd-slug/` under `posts/` and a file named `index.md` inside this new folder. You can start your `index.md` by copying one of the existing blog posts.

### Advertising the blog post

For now, this website is _public_ but not especially shared. Let's have some more content and then share widely!!!
