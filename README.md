# Personal Profile Page (First Vue Project)

# https://yulin-physics.github.io/yulinchen

This project was built with Vue and Nuxt framework, using [Zooper](https://github.com/fayazara/zooper) template as a starting point and embeded Dev-to blogs. 

Taken Zooper template

Embed Dev.to blogs 

## Installations

- git
- npm
- node

## Deploy App to GitHub Pages

1. Create an React (or Vue) app
   ```
   npx create-react-app my_first_app
   ```
2. Navigate into the app
   ```
   cd my_first_app
   ```
3. Install `gh-pages` npm package and save as a <a href="https://nodejs.dev/learn/npm-dependencies-and-devdependencies">development dependency</a>
   ```
   npm install gh-pages --save-dev
   ```
4. Add property and scripts to `package.json` file

   ```
       {

       "homepage": "https://{user-name}.github.io/{repo-name}",
       ...
       "scripts": {
           ...
           "predeploy": "npm run build",
           "deploy": "gh-pages -d build"
           }
       ...

       }
   ```

5. Deploy to GitHub pages
   ```
   npm run deploy
   ```
   runs the `predeploy` and `deploy` scripts in `package.json`.
   Under the hood, the predeploy script will build a distributable version of the app and store it in a folder named build. Then, the deploy script will push the contents of that folder to the gh-pages branch of the GitHub repository. <a href="https://github.com/gitname/react-gh-pages">source</a>

## Available Scripts

In the project directory, you can run:  
 `npm run dev`\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run build`  
Builds the app for development in `.nuxt` folder and for production to the `.output` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## References

Nuxt 3 dynamic routing and pages based on file structure and paths

<a href="https://dev.to/guilhermecheng/how-to-use-devto-api-4p65">How to use Dev-to API</a>

<a href="https://stackoverflow.com/questions/42749973/what-does-the-mean-inside-an-import-path"> What does the @ mean inside an import path? </a>

<a href="https://vuejs.org/api/composition-api-lifecycle">Composition API: lifecyle hooks</a>