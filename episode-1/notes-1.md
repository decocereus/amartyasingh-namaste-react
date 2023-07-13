# Notes

- React.createElement returns an _object_
- the render function changes that object into the specified type of tag which browser understands
- createElement takes in three arguments, type, attributes and children. These three together make the props.

- created a new root div for react-dom because it was replacing the contents of the existing root.
- To see all three methods a new div element was required.

- If we want to pass in multiple children then we need to pass the children inside a list [child1, child2....]

# What is Emmet?

- Emmet is a plugin for HTML and CSS it makes the life of a developer very easy by providing simple short syntax which is then expandaed to create complex HTML structures and CSS styles.

# Differece between library and framework

- A library is just a collection of javascript functions which can be used in a small part of any project. Frameworks are full fledged frameworks which don't have such flexbility but provide a lot of functionality because of which they eliminate the need the need for libraries.

# What is CDN and why do we use it?

- CDN stands for content deliver network. CDN is basically a bunch of servers which are placed aroud the world to decrese the load time of website. Being able to load a website within a few miliseconds is incredibly important to reatain the user. This is why we use CDNs

# Why is React know as React?

- React is called react because of its ability to to respond to any user interaction with the website.

# What is cross-origin inside Script tag?

- So typically the browser does not allow HTTP requests from any other port other than its own port. By using cors we can tell the borwser and our application that HTTP requests from different ports or domains (origins) are allowed. The cross-origin attribute in the script tag allows javascript to make requests to a different origin.

# What is the difference between react and react-dom?

- Basically react has all the functionality which we need to build large scale apps where as ReactDOM acts as a glue between React and the DOM.
  ReactDOM is mainly used to render react components.

# What is the difference between react.development.js and react-production.js?

- The development is more suitable for when the application is being developed as the name suggests because it offers detailed error messages and the necessary tools which might be useful for development. The production file is a minified and an optimized version of the developement build.

# What are async and defer?

- In async the the scripts are fetched while the HTMl parsing is going on. Once the script is fetched thr parsing stops and the script is executed immediately. After execution the parsing starts again.

- In case of defer the parsing keeps going on and the scripts are fetched simultaneously. The scrupts are executed only when the parsing is complete.

- Without any async or defer attribute in the script tag, the parsing stops whenever a script is encountered, it is fetched and executed and only after that the parsing resumes.
