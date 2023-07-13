# Notes

- "devDependencies": {
  "parcel": "^2.9.3"  
  }
- the ^ indicates that whenever there is a minor update to parcel our app will automatically update to it.
- If we had a ~ instead of a ^ then that means we will updgrade to the next major version like 3.0
- It is always better to have ^ since a major update might have a lot of changes which can break the app.

- npm installs the packgaes and manages them
- npx executed the installed packages

- devDependencies are different from normal dependencies. normal dependencies are vital for an app to function properly in prod,
- devDependencies are only used during the development of the app.
- Package.json basically is an object which keeps track of vital data for npm, it has information about which packages have been installed
- when to update them etc. It does not contain the exact version of the package but an abstraction
- To store the exact versions and all the dependencies we have package-lock.json, lock contains the exact version of the package which is
- installed. By using these two files we can always download all the dependecies of a project.

- It is importatnt to not that the script tag does not allow imports by
  default because it treats the file just as a regular javascript file. In order
  have imports inside the file which is ran throught the script tag we need to
  specify type to module.

# Advantagez of Parcel

- Dev build
- Live server which has our dev build
- HMR = Hot module reload, parcel automatically reloads the browser whenever we save any changes
- This is done through the File watching algorithm written in C++
- Parcel offers fast build times because it maintains a cache of all builds.
- Image optimization
- Minification of files for prod
- It is a bundler it bundles everything to make a prod build
- It compresses our files and removes whitespace and other things which makes the prod build fast and optimized.
- Consistent hashing
- Differential bundling - parcel creates different bundles for different browsers which might be old or new. This is called differential bundling
- Code splitting
- Diagnostics for our app
- Better error handling
- HTTPs
- Tree shaking - remove unused code for you
- When we do a prod build from parcel, it command is npx parcel build index.html, any file can be there instead of index.html upto the dev
- Now this command will throw an error if in our package.json we have a different file in the main section.
- Right now in the package.json main contains App.js, because of this parcel confilcts between index.html and App.js, so we remove main and App.js and then move on to build the prod build.

# What is NPM

- npm is package manager which does not have a full form. It basically acts as a huge repo where thousands of packages are hosted and can be downloaded into ones project. This package manager can download, update, delete and perform other tasks to manage a package.

# What is Parcel/Webpack, why do we need it?

- Parcel/Webpack is a bundler which performs a variety of actions, from optimizing, hot reloading, fast build times etc. These bundlers are required to compress a large scale application into a small optmizied application which can be served to the users. They take of making sure that our app is supported on older browsers, they optimize it and reduce the build times. They remove unused code etc.

# What is .pacel-cache?

- .parcel-cache is a folder created when our app is built using parcel. It can be regenerated. The main use is to reduce the build times of our dev and prod build. Parcel has a file watching algorithm constantly looks for chanegs on every save. Whever there is a change parcel reloads the browser to refelect the change, everything else is already cached which in turn reduces build times.

# What is npx?

- It is a command through which we can execute a package.

# What is difference between dependecies and devDependencies?

- dependencies are required in prod build of the application, for the app to function properly these dpendencies are crucial. devDepndencies are only present during the development of the app and they are not mandatory in the prod build.

# What is Tree shaking?

- Parcel uses tree shaking to get rid of any unused code in our application thus reducing the buildtime and increasing the overall performance of the app

# What is Hot Module replacement?

- It basically acts a hot reload, whenever there is a change, parcel automatically reoloads the browser.

# List 5 superpowerrs of parcel and describe 3 of them

- Hot module replacement or Hot reloading. Minifying code base for production build. Getting rid of unsued code, Tree shaking. Deploying dev build on a server. Caching important files to reduce build time.

# What is .gitignore? What should we put in it?

- .gitignore is a file which tells git which folders we want to exclude from out repository. This usually contains those files which can be easily regenerated though some commands. For example we exclude node modules since we have all the package information in package.json and we can easily reinstall all the modules by using npm install.

# What is diffrence between package.json and package-lock.json?

- package.json acts as a blueprint for our project which contains all the required dependencies. It has both the devdependencies and the required dependencies. Here we can specify how we want to update each package, we can use ^ to update to the next minor version and ~ to update to the next major version. Usually ^ is recommended so that we don't have any breaking changes with a major update.
- package-lock.json also contains information about packages which are installed. The only difference is here we maintain the exact version of the package that was installed. In package.json we have an estimate of the version we are currently using.

# Why should I not modify package-lock.json?

- It is a bad idea to modify package-lock.json because it contains the exact package version with which the current project is functioning. Modifying it might introduce breacking changes and it might also mean that the project wont work as intended on a different machine which got its dependencies from the modified version.

# What is node_modules? Should they be pushe on git?

- node_modules is a folder which contains the code for all the dependencies the project is currently using. No it should not be pushed onto git since it can be easily regenerated.

# What is 'dist' folder?

- Parcel generated dist folder for our project and it have 3 critical files, index.html, index.js and index.css. Using these three files parcel generates our dev build and later on makes new files for prod build

# What is browserlist? Read about vite, webpack and parcel.

- browserlist is an attribute which can be diefined in package.json to tell the bundler which browser versions should be supported and how far back we need to go.
