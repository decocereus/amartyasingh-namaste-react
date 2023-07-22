# Code in ep 4

# useEffect

- If there is no dependency array then useEffect is called on every render of the component. Only the call back function is mandatory when declaring a new useEffect.
- If we provie an empty dependency array [] then useEffect is only called on the first render of the component (componentDidMount)
- If we provie a varaible inside the dependency array [data] then useEffect is called every time something in data changes (componentDidUpdate)
- If we provie an empty dependency array [] and a return statement inside the useEffect then it is called when component is dismounting (componentDidUnmount)

# useNavigate vs Link

- Only use useNavigate when you have to redirect the based on some side effect, like when the user submits the form they should go to the form completion page.
- If there are no side effects and you just want the user to have the ability to navigate from one page to another use Link, they are anchor tags basically
- These both provide similar functionality it just depends on the use case which one should be used where.

# Two types of routing for web applications

- Server side routing
- - This was the traditional old way of routing web applications. We used to different HTML pages like About.html Contact.html etc
- - In order to move from one page to another we had to make a network call to fetch the new HTMl and then display it onto the wesbite
- - This also forced us to reload the page.

- Client side routing
- - This is the modern way of routing web applications, it is used to create single page applications.
- - In react when we do routing instead of fetching the HTML of a new page we simply switch the component which has to be rendered
- - The code for this component is already present in the app, we don't need to make any network calls just to load the page.
- - This makes routing extremely fast and because of this we can build single page applications.

#
