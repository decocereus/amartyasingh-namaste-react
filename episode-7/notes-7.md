# Code in ep 4

# useEffect

- If there is no dependency array then useEffect is called on every render of the component. Only the call back function is mandatory when declaring a new useEffect.
- If we provie an empty dependency array [] then useEffect is only called on the first render of the component (componentDidMount)
- If we provie a varaible inside the dependency array [data] then useEffect is called every time something in data changes (componentDidUpdate)
- If we provie an empty dependency array [] and a return statement inside the useEffect then it is called when component is dismounting (componentDidUnmount)
