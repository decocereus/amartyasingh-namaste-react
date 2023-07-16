# How a food ordering app is built?

- If your planning is good then coding is easy
- - You should know what you are building, have UI mock and then implement code.
- - Once you have a mockup about where what goes like where should the logo be in the header, it will be easy to code stuff
- - This is called wireframe

# Config driven UI

- So when you see websites like Zomato or swiggy they have different offeres in different cities. This is done through config driven UI. Then backend serves data based on the location entered by the user, and then they are able to explore offeres which are exclusive to a particular location. This is also done in amazon, except there they have data based on countries.

- The UI is built based on the config sent by the backend. This is called config driven UI.

# Is JSX mandatory for React?

- No it is not mandatory, however it helps in making the dev experience better.

# Is ES6 mandatory for React?

- No it is not mandatory, however it includes crucial functions which make implementation a lot easier. For example map, filter and reduce.

# How can I write comments in JSX?

- We can write any JS code inside JSX by using curly brackets {} this is also true for comments. {/\*_ This is a comment _/}

# What is <React.Fragment></React.Fragment> and <></>?

- They are both the same thing just different ways of writing them.
- These fragments were introduced in React because whenever we write JSX we can only have one element at the root level. To have multiple elements at the root level fragment is used, by using this the fragment acts as the parent.

# What is Virtual DOM?

- Virtual DOM is the copy of the real DOM which is used by react in the process of reconciliation. React maintains a Virtual DOM so that it can quickly identify where new elements were created and where updates were made to the existing ones.
- Once the the updates are identified, React only then updates the real DOM by using a diffing algorithm where it generates two trees and recurses over both of them while making changes wherever necessary.
- Virtual DOM increases the performance of the application and the development speed since it provides instant updates in the browser whenever a change is made.

# What is Reconciliation in React?

- The process of comparing the old DOM tree to the new DOM tree and making changes to refelect the new changes is called reconciliation.

# What is React Fiber?

- React Fiber is basically the new and improved version of the reconciliation alogorithm. Instead of working in one syncronous phase React Fiber works in two.
- The first phase compiles the list of all new changes and updates, this phase is async and can be interuppted so that React can work on other more important tasks. The imporatance of a task is given by a priority.
- The second phase is cannot be interuppted and it here when React tells the browser to render the updates and the new elements.
- Because of React Fiber the applications are much smoother and and are more fluid.

# Why do we need Keys in React? When do we need them?

- We need keys in React to tell the Virtual DOM which child elements exist already and which are new child elements added.
- A key is associated to each child element of a parent element. This key helps whenever there is an update made to a child element or whenever a new child element is created. By using these keys React knows which elements were updated and which element were added or removed.
- Keys help in maintaing order, sorting etc.
- It is recommened by React to have unique keys for each child element. If there are no unique keys present then idx can be used as a key but only as a last resort.

# Can we use Index as Keys in React?

- Yes, index can be used but it is not recommended since they might not maintain the order of the elements or give unexpected output when trying to sort the elements.
- It might also make adding and removing elements much harder and give unexpected output.

# What is props in React? How are they used?

- Props stands for properties. Theses can be used to make resubale components.
- Props can be used to pass data from parent to child or from child to parent with the help of a callback function.

# What is config driven UI?

- UI which can be modified/built based on a config given by the sever is called config driven UI.
