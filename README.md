<h1 align="center" id="title">Getting started with React and Next.js</h1>

<p align="center"><img src="https://socialify.git.ci/nushra88/stepOne/image?description=1&amp;descriptionEditable=Just%20the%20first%20step%20to%20my%20FullStack%20journey&amp;font=KoHo&amp;language=1&amp;logo=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F6168%2F6168334.png&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;theme=Dark" alt="project-image"></p>

<p id="description">a project to understand the basics of React and next.js</p>

<p align="center"><img src="https://img.shields.io/badge/npm-10.9-purple" alt="shields"></p>

![](https://github.com/nushra88/stepOne/blob/main/Untitled%20design.gif)

  
<h2>What is React and Next.js</h2>

<b>React</b> is a javascript library for building interactive user interfaces.<br>
<b>Next.</b> is a React framework that handles the tooling and configuration, along with additional structure, features and optimizations, like - data fetching, routing and caching.

<h2>What is DOM?</h2>
- DOM is an object representation of HTML elements.<br>
- It acts as a bridge between the code and the user interface.<br>
- When user opens a webpage, the server returns an HTML file to the browser.<br>
- The browser reads the file and constructs the DOM.<br>
- DOM methods and JavaScript is used to listen to user events and manipulate the DOM by- adding, updating and removing specific user elements.<br>
![Screenshot 2024-12-09 121459](https://github.com/user-attachments/assets/5f9d28a8-c19d-4575-ad86-c6742395f6d6)

<h2>First Step</h2>
- I used VS code to create an index.html file.<br>

![Screenshot 2024-12-09 122154](https://github.com/user-attachments/assets/d053836a-dc26-4fd5-9773-8798a6ad7031)
<br>
- a unique id is given to div and javascript tag is added, so that I can use javascript in the html file.
  ![Screenshot 2024-12-09 122518](https://github.com/user-attachments/assets/02084763-4b7b-4ddf-a83d-29d08034be9e)
<br>
- Inside the script tag, a DOM method, getElementById() is added to select <div> element by its id.<br>
- New elements are added to the h1 element using DOM methods and appended to the <div>
  
![Screenshot 2024-12-09 125644](https://github.com/user-attachments/assets/aafdd2b2-a4e0-4515-8b8a-a5b22821b8ce)<br>
- Now, when the file is opened in the browser, it would display the text.<br>

- HTML represents the initial page content whereas the DOM represents the updated page content. DOM contains the h1 element but HTML doesn't.<br>
  
![Screenshot 2024-12-09 130653](https://github.com/user-attachments/assets/37105711-a451-4444-b954-b52c519e31ff) 

<h2>Second Step</h2>
- React is a declarative UI library, i.e. it figures out how to update the DOM after the developer tells it how they want the user interface to be.<br>
- By using React we can reduce the amount of code written to manipulate DOM and it's time sufficient<br>
- Add react and react-dom scripts from an external website "unpkg.com" <br>
  Remove the DOM methods and add <b>ReactDOM.createRoot()</b> method to target a DOM element.<br>
  Create a root to display react components and add root.render method to render the react code to DOM.<br>
- A Babel script is added<br>
  Babel is a JavaScript compiler. We need this as in the code snippet before, "<..h1" is a JSX code.<br>
  <b>JSX</b> is a syntax extension of JavaScript that helps it to describe UI in a HTML like syntax.<br>
  Browsers don't understand JSX so Babel is added.<br>
  
![Screenshot 2024-12-09 142214](https://github.com/user-attachments/assets/9ce66b3a-36d3-42f3-b90a-5c2cd95d0f34)

<h2>Step 3</h2>
- There are three React core concepts : components, props and state.<br>
- Components are functions in react that return UI elements.<br>
- Here,  a function named 'Header'(the function name is capitalized to differentiate with HTML and JavaScript) is added.<br>
- A HomePage function is created and Header component is nested in it.<br>
- HomePage is thus the top level component and so is passed in root.render() with HTML like tags.<br>

![Screenshot 2024-12-09 144845](https://github.com/user-attachments/assets/f83ed5ab-16db-49e2-98fd-99eb1acc0729)

<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Like button
*   When clicked the click number shows beside the like button

<h2>🛠️ Installation Steps:</h2>

<p>1. create package.json file</p>

```
{}
```

<p>2. install react and react-dom packages</p>

```
npm install react@latest react-dom@latest next@latest
```
