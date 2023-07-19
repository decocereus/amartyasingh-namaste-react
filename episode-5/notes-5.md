# The code for this episode is contianed inside episode-4/code

# What is the difference between named export, default export and \* export?

- Named export is used to export specific variables like a const.
- A file can only have one default export, it will only export one thing by default.
- - export exports everything present in the file.

# What is the importance of config.js file?

- config.js files ususally holds vital information about the project.
- it can have all the links which are used in the app
- It usually contains global variables which will not be changed, this file is usually found inside utils folder.

# What are React hooks?

- React hooks are normal JS functions which are provided by react to help with the development process of a React application.

# Why do we need useState hook?

- useState hook captures the state of any vairable, component or the application.
- Whenver there is a change in the state variable React re-renders the component where useState was used.
- The state is stored inisde a variable and to make any changes we need to delcare a function. It is usually named setSomething, where somethign is usually the name of the variable.
- useState hook returns an array, so it is important to destructure on the fly to reduce code.
