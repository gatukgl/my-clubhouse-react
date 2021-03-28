# Introduction to React

## Prerequisite

1. Latest version of [Node](https://nodejs.org/en/download/) (or 10.16.0+) 
2. [Visual Studio Code](https://code.visualstudio.com/download) (VS Code)
3. Terminal e.g. `iTerm2` or `Windows Terminal` or built-in terminal on VS Code

## Setting React app

1. Create react app

   ```shell
   npx create-react-app <my-clubhouse-fe>
   
   # or install create-react-app to your machine
   npm -g install create-react-app 
   create-react-app <app_name>
   ```

2. Install `Prettier` for code formatter 

   Open VSCode.
   Search for plugin named `Prettier - Code formatter`

   ```shell
   npm install --save-dev --save-exact prettier
   ```

   Create `.prettierrc` at the project root

   ```json
   {
     "trailingComma": "es5",
     "tabWidth": 2,
     "semi": false,
     "singleQuote": true
   }
   ```

   reference:

   - https://prettier.io/docs/en/plugins.html

3. Use `bootstrap` framework as a CSS framework

   Open terminal, and type this command to install bootstrap via rpm

   ```shell
   npm install bootstrap@next
   ```

   Open index.js 

   ```js
   import 'bootstrap'
   ```

4. Use tailwind.css for some UI component 

   reference: https://tailwindcss.com/docs/installation#using-tailwind-without-post-css

   Open `public/index.html`

   ```html
   <head>
     ...
     
     <link href="/tailwind.css" rel="stylesheet">
     
     ...
   </head>
   ```

5. Embed fonts from google font

   Back to `public/index.html`

   ```html
   <head>
     ...
     
     <script src="https://kit.fontawesome.com/9cc98e83c1.js" crossorigin="anonymous"></script>
       <link rel="preconnect" href="https://fonts.gstatic.com">
       <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap"
             rel="stylesheet">
     
     ...
   </head>
   
   ```

6. Use FontAwesome for icons

   Still at `public/index.html`

   ```html
   <head>
     ...
     
     <script src="https://kit.fontawesome.com/9cc98e83c1.js" crossorigin="anonymous"></script>
     
     ...
   </head>
   ```

