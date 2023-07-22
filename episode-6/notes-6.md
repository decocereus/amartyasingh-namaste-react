# The code for this episode is contianed inside episode-4/code

# Monolith and Microservice architecture

- Monolithic architecture
- - If your project has code for all fields in in one place that is called monolithic architecture.
- - For example if you have your UI code, your APIs, your authentication code, you Database connection code etc inside one project then it is monolithic architecture.
- - In this case, if you make a small change such as changing the color of a button then also you need to build this huge project and deploy it.

- Microservices architecture
- - In this architecture we have a separate service for each field, there is a separate service for APIs, separate service for UI, separate service for database connection, separate service for authentication etc.
- - By dividing these tasks into small separate services or microservices we easily make changes and deploy them. It performs much better and enhances both the user experience and the dev experience.
- - This architecture is known as separation of concerns and single responsibility principle. This means one service is taaking care of one task
- - These services need to interact with each other in order to have functiontion app.
- - They are deployed onto different ports and are mapped to different urls, like /api for backend, /sms for sms just / for UI etc
- - These services can be written in any language. For example we can our have our UI in react and backend in golang etc.
- -

# How to get data from one microservice to another.

- If we want to get data from our backend and display it onto our frontend, we have two approaches. One we can make the API call, wait for the response and then render the UI.
- The second approach is we render whatever we have while the API call is proceeding, and once we have the data we re-render our UI.
- The second approach provides better user experience, since react can re-render very quickly with the help of Virtual DOM and react fiber.

# Whole React component is re=rendered whenever a change is made inside a component.

= If we have a header component and lets say we click on the login button, it should to logout. We will use useState to achieve this.

- So when the button is clicked and the login text is updated to logout the whole header component is re-rendered instead of just the button

# What is a microservice?

- A microservice is a small part of a big system. A UI can be a microservice, an authentication service can be a microservice etc. They are used since they are more maintaiable and Whawe don't have to re-build the entire project just to make a small update.

# Why do we need a useEffect hook?

- We need a useEffect hook so that we can enchance user experience while using the website, and to perform async operations like fetching data from some API. useEffect hook is also used to mimic life cycle methods in functional based components. If we want to display some data as soon as the webiste loads then we can either wait for the data to come back and then be displayed or we can first render whatever we have then fetch the data, and then re-render the UI to show the new data. This can be achieved by useEffect hook.

# What is Optinal Chaining?

- Optinal chaining is ususally used on values/objects which might be set as undefined. By using optinal chaining we can ensure that there are no errors thrown and we the app can work without breaking. We use this operator like data?.name now data might be undefined while it is being fetched therefore to avoid any breaking changes we use '?' so that it only unpacks the variable when there is something inside it. If it is undefined then the execution continues without any errors.

# What is Shimmer UI?

- The UI shown while data is being fetched is called shimmer UI. It provides better Ux and has psychological impact on the user because of which they stay on the website for longer. /

# Diff between JS expression and JS statement

- Statements can only be declared while expressions can be assigned.

# What is conditional rendering? Give an example

- If you want to show a part of the UI based on a condition that is conditional rendering. To do this you can use an if statement, ternary operator or && operator. For example we have a <UI> component and a <ShimmerUI> component, while data is being fetched I want to show my ShimmerUI. lets say I am storing data in a useState varaible, so if state.length === 0 {Shimmer} else {UI}

# What is CORS?

- Browsers by default dont allow requests from one orgin to another. This is called CORS or cross-origin resource sharing. To bypass this, the external server needs to return a Allow cors header. A preflight call is made before the actual call to see if the external server allows cors or not.

# What is async and await?

- These key words signify a asynchronous function. They are used in a newway to resolve Promises. We don't have to chain multiple .then() calls to after making a async call or after recieving a promise. async signifies asynchronous and await means just wait until you get a response from the server.

# What is the use of const json = await data.json() in getRestaurants() function

- We capture the response in form of json when it is returned from the server.
