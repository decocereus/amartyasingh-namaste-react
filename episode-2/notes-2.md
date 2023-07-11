# Notes

- "devDependencies": {
  "parcel": "^2.9.3"  
  }
- the ^ indicates that whenever there is a minor update to parcel our app will automatically update to it.
- If we had a ~ instead of a ^ then that means we will updgrade to the next major version like 3.0
- It is always better to have ^ since a major update might have a lot of changes which can break the app.

- npm installs the packgaes and manages them
- npx executed the installed packages

- - devDependencies are different from normal dependencies. normal dependencies are vital for an app to function properly in prod,
- - devDependencies are only used during the development of the app.
- - Package.json basically is an object which keeps track of vital data for npm, it has information about which packages have been installed
- - when to update them etc. It does not contain the exact version of the package but an abstraction
- - To store the exact versions and all the dependencies we have package-lock.json, lock contains the exact version of the package which is
- - installed. By using these two files we can always download all the dependecies of a project.

- - It is importatnt to not that the script tag does not allow imports by
    default because it treats the file just as a regular javascript file. In order
    have imports inside the file which is ran throught the script tag we need to
    specify type to module.

# Advantagez of Parcel

- Dev build
- Live server which has our dev build
- HMR = Hot module reload, parcel automatically reloads the browser whenever we save any changes
- This is done through the File watching algorithm written in C++
- Parcel offers fast build times because it maintains a cache of all builds.
