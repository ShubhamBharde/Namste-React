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

## git commands

- git init
- git branch -M main
- git remote add origin main ---> local to remote push only once use for setup
- git clone "httpsLink" ---> remote to local fetch
- git add .
- git commit -m "msg"
- git push -u origin main
- git status

## git

- it is a tool used for tracking & manage codebase

## github

- it is a place where all git repository are hosted by using git tool.

## npm - package manager

npm is package manager that will manage all packages but not stand/abbrevation as node package manager

- npm init - for setup package manager
- package.json - it is configuration file for npm

## bundler

- it is take the whole code and gives production code which is optimized, remove comments, minifying the code & compress file that will do bundler

### bundler ex :-

1. webpack
2. parcel
3. vite

## dependency :-

- dev dependency

  - it dependency required for development only not in production.

- normal dependecy
  - it dependency required for development &production both.
