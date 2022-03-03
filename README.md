## Personal Profile Page (First React Project)
# http://yulin-physics.github.io/yulinchen
This project was built with REACT framework, an one page website about me.    

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
        
        "homepage": "http://{user-name}.github.io/{repo-name}",
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
