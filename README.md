# Namste-React

# Episode-1 : Inception

PreRequisite : html, css, js basic knowledege required

## DOM property & method

- .innerHTML property replace the things to new one.
- .appendChild() will add the children but not replace, remain will always same.

- .createElement() method use for create html element in js.

## CDN

- content delivery network it is a place where content / library is hosted and we put it in project from cdn link.

- we can use react in our js project with the help of react cdn .. isn't it simple

## React Project Setup without npm create-react-app (cra)

- we can use react, react-dom cdn link in our html page for setup React Project .
- we create root for react app using <b>ReactDOM.createRoot()</b>;
- we can create element using
  <b>React.createElement(tagname, attributeObjects, children) </b>
- finally we render using <b>.render()</b> method and in that pass our ReactElement

- Congrats React Library will work for you

## Note :-

- ReactElement gives/returns object not html Element.
  & ReactDOM render() takes the object and convert to html element and put in to DOM.

- React methods:-

  - React.createElement(tagName, attributeObjects, children)

- ReactDOM methods:-

  - ReactDOM.createRoot(document.querySelector("#root"))

    - it create react root for dom

  - .render() method takes object from ReactElement and convert html element and putting it dom.

### Remember Permanent ..

- root.render() will replace the things to new one.

# Episode-2 : Igniting our App

## git

- it is a tool used for tracking & manage codebase.

## github

- it is a place where all git repository are hosted.

## git commands

- git init
- git branch -M main
- git remote add origin main ---> local to remote push only once use for setup
- git clone "httpsLink" ---> remote to local fetch
- git add .
- git commit -m "msg"
- git push -u origin main
- git status

## npm - package manager

npm is package manager that will manage all packages, but funfact it does not stand as a node package manager 😂.

### npm is repository where all packages hosted over there.

- npm init :- for setup npm & after setup it gives package.json
- package.json :- it is configuration file for npm & it take & tells version of that package which is dependent on our Project.

## bundler : - used for Production Ready purpose

- it is take the whole code and gives bundle of code for production ready which is optimized, removing comments & console, minifying the code & code splitting , chunking & compress file that will do bundler for us.

- behind the scene create-react-app has own bundler which is Webpack

### bundler ex :-

1. webpack
2. parcel
3. vite

## dependency :-

sometimes package also know as dependency, beacuse our project is dependent on lot of package/ library.

### types of dependency :-

- dev dependency

  - dependency which required for development only not in production.

- normal dependecy
  - it dependency required for development & production both.

## node modules :-

- node modules are collection of dependency.
- node modules contains all the code that we fetch from npm.

it is like database in that all package exist that we need

## Transitive dependency :-

it is dependency dependent on some other dependency and thats has another dependency so lot going on..

## Should i put node_modules in git, github, production :-

big No, thats why we use <b>.gitignore </b> which will ignore the node_modules

note :- node modules are regenerative so dont push on github.

## Difference between package.json & package-lock.json :-

- package.json file has note approximate version of dependency

- package-lock.json file locking exact version of that dependency

## npx :- it will executes package

## parcel is beast :-

it is bundler that can i used for my project

### executing parcel command :-

- npx parcel index.html

## What What are doing Parcel :-

- dev build
- local server
- HMR (Hot Module Replacement) --> Automatic Refresh
- file watching algorithm
- Caching for faster bulds
- image optimization
- minification
- bundling
- compress
- code splitting
- Differential bundling --> Support Older Browsers
- Error Handling
- Tree Shaking --> remove unused code
- different dev & prod bundles

### thats why Parcel is Beast

## Cross Browser Compatibilty :-

- we use browserlist package for issue of different browser compatibilty.

- in package.json we just configure browserlist package

```javascript
  "browserslist": [
    "last 10 versions"
  ]
```

# Episode-3 : Laying the Foundation

## npm script :-

```javascript
 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
```

## JSX :- html/xml like syntax

- it's html like syntax but its not html element, it is jsx convention.

- react and jsx are both different .. means jsx is not part of core React.

- our bundler has babel dependency that understand jsx & convert to ReactElement.

## Babel :- js compiler

- some browser does not understand newer javascript code, that time babel does take our ES6+ code and gives browser compatibilty code.

- i loves <b> Babel </b> ❤️ for doing browser compatibilty.

### Who is convert jsx to ReactElement ?

- Babel package --> manage by bundler

- Babel just takes jsx and transpile to React.createElement(). now its responsibilty of core react that gives object.

## React Component :-

- Class based component --> old way
- Functional component --> latest way

## React Functional Component :-

it's just a normal javascript function which return jsx/ ReactElement.

- behind the scene, jsx is convert to ReactElement by Babel.

- Always use PascalCase for React Function components.

### How will use Functional component :-

```javascript
// babel knows it is functional component that return jsx & convert to ReactElement which is object.

<Component />
<Component> </Component>
Component()
```

## Component Composition :-

- it means use our <b>Component inside other Component</b> called as Component Composition.

- it make your component to reuseable. --> not new thing bcz in js always function use for reuseability.

## JSX SuperPower :-

- you can put any js code inside jsx using {} to prevent from jsx.

- <h3>writing js code inside of jsx is a very powerful thing, don't underistimate. </h3>

- babel does all jsx code convert to React code 🤘

### peoples say jsx is mix of html & js ..😂

- <b> big No, jsx is html like syntax not a html</b>

## End of the Day ✅ :-

- React is js code EOD(end of day).

- ReactElement is object EOD.

- JSX is ReactElement EOD.

- Function Component is just js Function EOD.

# Episode-4 : Talk is cheap, Show me the code

## How the build large project :-

- Planning :

  - before writing a code, you just plan how to build app skelton

  - then writing a code is easy for you, so first build mock, wireframe.

## Note :-

- jsx is strict than html.

- in jsx, we write js code using { } and escape from jsx

### in jsx, how we look/put Inline Style :-

- <b> style = { { backgroundColor : "gray", fontSize : "24px" } } :- </b>

  - it is not inline css style, it's js object

  - first { } use for js code & prevent from jsx & another { } is object

## Design Food Ordering App :-

- Header

  - Logo
  - NavItems

- Body

  - Search
  - RestroCardContainer
    - RestroCard

- Footer
  - Copyright

## props : -

- it is short name of properties & returns object

- always pass from parent component/ element.

- EOD, props are just passing normal argument to function.

## Config Driven UI :-

- our web-app is driven by config data :-

  - it means different city have different UI , ProductCards, Caraousel & Offers

  - config data comes from backend

## How Frontend Application Builds :-

- UI Layer --> makes static website

- Data Layer --> makes dynamic web-app

### UI is Powered by Data

## key :- used for Optimization of React Cycle

- whenever you are iterate things using map() or loop, that time, pass the <b> key </b> as a prop for unique identification in React.

- When you don't pass a key in React, React Cycle re-renders everything because it doesn't recognize a unique ID.

- React recommended that never use indexes as a key, it is a bad practice.

# Episode-5 : Let's get Hooked

## Two types of Export & Import in React:-

- Default Export & Import :- use for only one export

  - export default Component
  - import Component from "path"

- Name Export & Import :- use for Multiple export in one component/file
  - export Component
  - import { Component, AnotherComponent } from "path"

## Can i use default export along with name export ?

- ### yes, you can but default export is only one.

## Features :-

- ### Filter of Top Rated Restraurants

## Normal Js Variables in React :-

- if we use normal js variables in react, then it don't update/modify our UI/UI State.

## State Variable :- Superpowerful local variable in react

- it is like react variable when state is updated that time it will updated our UI.

- state variables created by hooks of useState() hook.

- whenever a state variable updated , react will re-render that component & update our UI & it's so so fast

## Hooks :- Normal js Utility Functions

- hook is just normal js utility function which is given by react.

- that functions are behind the scene some logic which we use as utility function.

### useState() Hook :-

- ### useState() :- Superpowerful state variables

  - used for create local State Variables in react function component

  - it gives array of two element:-

    - initial state

    - function that updated our state automagically.
      - it needs trigger to start diff algorithm... thats why we use state variables.

## React Two Layer :-

- UI Layer

- Data Layer

- React keeps your Data layer & sync with UI layer

- when Data layer Modifiy react re-render component and quickly updated UI, bcz UI layer is Powered by Data layer

## Logic of UI Update in React ?

- ### when state updates, react will re-render of that component.

## Why React is Fast ?

- React can do fast & efficient DOM Manipulation.

- it has virtual DOM that is EOD Object.

  - Virtual DOM :- representation of an actual DOM, but it is faster than actual DOM.

- Diff algorithm :- it is difference between two virtual DOM.

  - it find difference between new virtual dom & old virtual dom & actual update DOM on every render cycle.

- React Reconciliation Algorithm / React Fiber

  - Reconciliation :- whenever something changes on ui this is known as Reconsillation.

  - React Fiber :-
    - it is Re-Implementation of React core algorithm.
    - it is new way of finding the Diff & Actually updating the DOM.
    - it is does not touch html alot
    - React Fiber comes in react 16 which year of 2017

- In short, Every Re-Rendering React will finding diff of two virtual DOM & Update the Original DOM.. thats why React is so Fast .

# Episode-6 : Exploring the World

## Monolithic vs Micro Service :- 🚀🚀

- ### single responsibilty principle :- 🚀🚀

## Real World Data :- Swiggy live API fetch for practice purpose of How Dynamic data comes in Real World

- Real World API has lot of complicated and mess up data that's why we use live swiggy api for Real World industrial practice purpose.

## useEffect() Hook :- after rendering component, it will call callback function

```javascript
useEffect(() => {
  return fetchAPI();
}, []);
```

- ### if you have to do something, after rendering the component you have write inside useEffect()

## cors policy :- 🚀🚀 Cross Origin Resource Sharing

<!-- - it is mechanism which uses additional http request header
- same origin then cors easily share resources but if two different port or different origin access resources then browser did not allow share resource.
- it is http header based mechanism that allow -->

- ### bypass cors error :- download cors chrome extension

## Shimmer UI :- use for Better UX --> first shimmer effect show, then fetch api & rerender

- Page load --> Render Shimmer/component --> fetch api --> Re-Render

- shimmer ui is a fake page skelon until the real data comes for better ux (user experience)

## Conditional Rendering :- based on conditon renders component

## why normal js variables are not use in React?

- normal js variables not update ui

  - because react will not track variables when it is update.

- thats why react gives you useState() hook which returns array & in that array two elements :-

  - initial state variable

  - function that update state and re-render component again

  - whenever state updated, that time React will Re-Render Whole Component but update only difference between two virtual dom ... so hooks are powerful things in React.

## Features :-

- Fetching Live Swiggy API ❤️
- Config Driven UI
- Searching Product
- Filter / Top Rating Product
- Shimmer UI Effect for Better User Experience (UX) ❤️
- Mobile Responsiveness
- Error Handling

# Episode-7 : Finding the path

## Hook :- normal js Utility Function gives by React

- dont take tension of Hooks, Hooks are normal js Utility Function that react gives you.

- useState()
- useEffect()
- useContext()
- useRef()
- useMemo()
- useCallback()
- useParams()

## useEffect() hook :- When you have to do something after rendering component

- it is Utility Function that take two elements.

  - Callback Function :- calls callback function after rendering component..

  - Dependency Array :- optional argument

    - if useEffect() hook has no dependency array, every time it will calls callback function after component render/re-renders.

    - if empty [] dependecy array, then it will call only once after component render.

    - if state [state] dependecy array, then it will call callback function whenver state updated.

## State :- React Variable

- normal js variables can't update UI.

- React will not track js variables.. thats why we need of State variables.

- it is a Powerful Variables that react gives you.

- state is created by useState() hook.

## useState() hook :-

- it is utility function that gives you react.

- useState() hook gives you array that have two elements :-

  - Initial State

  - Function that update state

## 🚀🚀🚀 Note :-

- Whenever State is Updated that time, Reconcillation process trigers and Whole Component is Re-Render and find diff between two virtual DOM, & that diff only updated in Actual DOM... thats why React is so fast for efficient DOM rendering.

## Routing for React App :- we use react-router-dom

- npm i react-router-dom

```react
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>
    },
    {

    }
  ])

root.render(<RouterProvider router={appRouter} />)
```

## SPA - Single Page Application

- We are not use normal anchor tags in React .. that normal anchor tags doing reload our whole page.. it is not good for SPA.

- thats why for making SPA we have <Link to=""> </Link> tag in React gives by react-router-dom.
- behind the scene Link tag will convert in normal anchor tag but not reloading whole page.. it will refresh some portion.
- thats how SPA Works .

## Two types of Routing :-

- 1. client side routing
- 2. server side routing

## Dynamic Routing :-
- using useParams() Hook
- in routing page <b>":"</b> use for dynamic routes

- create dynamic page for every product card 
  - we use <b>":"</b> for dynamic route path in App
  - we use useParams() for dynamic id/name in ProductInfo Component
