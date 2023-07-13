# JSX

- Jsx is not HTML inside JavaScript, it is a HTML like syntax which works inside JavaScript files to make dev lifes easier. It is eventually transpiled in React.createElement which give a React element, this element is a js object which is then converted into html.
- jsx(transpiled) => React.createElement => ReactElement => JS object => HTML
- The transpilation is done by babel who is given to us by parcel. Babel only responsibility is to to convert jsx into something which can be understood by react.
- JSX is different to React, they are not the same
- JSX is not HTML
- It is HTML-like or XML-like syntax
- Attrbutes given in JSX are written in camelCase
- If your jsx is multiline enclose it in (). If there is only onle like then brackets are not mandatory, but if there are multiple line then babel needs to know the start and the end point of the jsx.
- JSX expressions must have one parent element, meaning you have
(<div>
<div>
<p></p>
</div>
</div>)
This is valid JSX but this
(<div></div>
<div></div>)
is not since it has two elements at the parent level

- The solution to this problem is React fragment, we can use <></> at the parent level and then have two elements at the same level.
- You can have a fragment inside another fragment.
