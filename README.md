# Portfolio Site

![splash page](src/content/assets/readme/splash-page.png)


## Sample pages of the site

#### blog list page

<br>
<br>

![blog list page](src/content/assets/readme/blog-list-page.png)

<br>
<br>

#### sample blog

<br>
<br>

![sample blog](src/content/assets/readme/blog-sample-page.png)

## Portfolio site features:

- Landingpage
- Blog overview page
- Markdown sourcing from /content folder
- Estimated reading time for each post
- Styled components with emotion
- Netlify deployment friendly
- Nunito font included as npm module
- Syntax highlighting with prismjs
- Textmarkerstyle headings inspired by Basecamp
- Site meta tags with React Helmet
- Plugins for offline support
- Draft blog posts not published


## Quick start

This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the julia starter.

    ```sh
    # create a new Gatsby site using the julia starter
    gatsby new julia-starter https://github.com/niklasmtj/gatsby-starter-julia
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd julia-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `julia-starter` directory in your code editor of choice and edit `src/pages/index.js` or `src/pages/blog.js`. Save your changes and the browser will update in real time!

## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”. A short description of what you can find there is below.👨🏻‍💻

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser. For example is the **Nunito** typeface imported here.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

### The src directory

    .
    ├── components
    ├── content
    ├── images
    ├── pages
    └── templates

1. **`/components`**: Your React components can be defined here. You can include them from there in your pages.

2. **`/content`**: The filesystem plugin is configured to get the `*.md` files from here. These will be published on the `/blog` page.

3. **`/images`**: This directory is the home for your images that you can query via GraphQL since the filesystem plugin publish them there.

4. **`/pages`**: Here is where your pages like `/blog`, `/about` and also the 404 page lives. An example of the basic structure can be found above.

5. **`/templates`**: You will find the `blog-post.js` template there which defines how every blog-post page is structured.



## Deployed

The site is deployed to GitHub Pages and is available now.

[![Deploy to GitHub-Pages](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://minierparedes.github.io/algorithms-vs-me/)


## Powered by

<br>
<br>

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby
</h1>
