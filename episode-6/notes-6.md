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
