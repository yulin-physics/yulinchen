# Personal Profile Page (First React Project)

# https://yulin-physics.github.io/yulinchen

This project was built with REACT framework, an one page website about me. Showcasing projects I was working on between July and October 2021. It has a lot of css not in use, needs some clean up of the code.

Taken Zooper template

Embed Dev.to blogs 

## Installations

- git
- npm
- node

## Deploy React App to GitHub Pages

1. Create an React app written in JavaScript
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
   Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to the gh-pages branch of the GitHub repository. <a href="https://github.com/gitname/react-gh-pages">source</a>

## Available Scripts

In the project directory, you can run:  
 `npm start`\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test`  
Launches the test runner in the interactive watch mode.

`npm run build`  
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## References

<a href="https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/"> A Dark Mode Toggle with React and ThemeProvider </a>

<a href="https://dev.to/matjones/how-to-embed-your-dev-to-blog-in-your-personal-website-4l81"> How to Embed Your Dev.to Blog in Your Personal Website </a>
