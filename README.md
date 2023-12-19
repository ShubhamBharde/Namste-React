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

## Two types of export in React:-

- Default Export :- use for only one export

  - export default component

- Name Export :- use for Multiple export in one component
  - export component
