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

<h2>Step 4</h2>
- React props are informations passed as properties to React components.<br>
- In the HomePage component, a title prop is added to the Header component.<br>
- The value of the prop is then passed as Header function parameter. <br>
- Curly braces({}) is used to pass the prop value, so that we can use javascript inside the JSX markup. <br>
- An array of names is added to the HomePage component.<br>
- array.map method iterates through the array and the arrow function maps the array items to a list.<br>
- A key prop is used as React needs something unique to identify items in an array so it knows what to update in the DOM. <br>
![Screenshot 2024-12-11 094425](https://github.com/user-attachments/assets/6563121f-1d84-40ee-afb7-243ce1e9f17f)

<h2>Step 5</h2>
- A like button element is added to the return statement of the HomePage component.<br>
- For the button to do something, onClick() event is added.<br>
- A handleClick() function is added and called when button is clicked.<br>
- <b>Hooks</b> is a set of functions in React.<br>
- Hooks add additional logic, like - <b>state</b> to the components.<br>
- <b>State</b> is any information in the UI that changes according to user interactions.<br>
- React hook useState() is used to store and increment the number of times the user has clicked the Like button.<br>
- The useState funtion returns an array. The first item in the array is the state value and the second item is a function to update the value.<br>
- The initial state value is set to 0 and passed inside the component.<br>
- Then the state updater function, in this case - setLikes, is called in handleClick() and it increments the like value.<br>

![Screenshot 2024-12-11 104803](https://github.com/user-attachments/assets/0a827796-d716-457c-9052-0f55b48a5d6e)


<h2>Step 6</h2>
<h3>🛠️ Installations:</h3>

<p>1. create package.json file</p>

```
{}
```

<p>2. install react and react-dom packages</p>

```
npm install react@latest react-dom@latest next@latest
```
- Since react and reactDom packages were installed using npm package manager, the scripts are removed.
- html and body tags, babel scripts, React. part of useState(), document.getElementBy() are all removed.
- File name is changed from index.html to index.js.
- Next.js uses file system routing so instead of code the application uses files and folders for routing.
- To create the page, a folder called app is opened and the index.js file is moved into it and renamed page.js. The folder and file has to be named that way since that is the framework of Next.js.(I tried to name the folder something else and the code didnt run)
<p>Add this line to the top of the file</p>

```
import { useState } from 'react';
```
- Add export default to the <HomePage> component, to help Next.js to distinguish which component to render as the main component of the page.
- Add a "next dev" script to package.json file
  ![Screenshot 2024-12-11 113030](https://github.com/user-attachments/assets/dce946c4-f7ed-4c25-97db-b0cd9289af01)
  ![Screenshot 2024-12-11 113131](https://github.com/user-attachments/assets/90a68c33-7551-42ff-b465-31fb1b5ece09)
![Screenshot 2024-12-11 113146](https://github.com/user-attachments/assets/5ac57c11-e44c-4b69-bd9d-4149a75add90)

- A layout.js file is automatically created in the app folder.

<h2>Step 7</h2>
- <b>Client</b> refers to the browser on the user's device that sends a request to the server for the application code, it then turns the server response into an interface the user can interact with. <br>
- <b>Server</b> refers to the computer in a data center that stores the application code.<br>
- React components are split into two module graphs<br>
1. <b>Server module graph</b> contains all the server components that are rendered on the server. <br>
2. <b>Client module graph</b> contains all the client components.<br>
- Next.js uses server components by default.<br>
- useState() is a client component, so to be able to use it we need to shift the interactive like button to client component.<br>
- A file named like-button.js is created inside the app folder and LikeButton() is exported.<br>
- the button element and handleClick() function is moved from page.js to LikeButton() component.<br>
- the "import { useState } from 'react';" is also moved.<br>
- To make the like button a client component, the React directive 'use Client'; is used at the top of the file.<br>
- In the page.js file, the LikeButton() is imported.<br>
<p>Now run the server, by writing the following line in the command prompt</p>

```
npm run dev
```
- This will compile and give link to localhost:3000
- go to link, to see the application work.

![Screenshot 2024-12-11 131042](https://github.com/user-attachments/assets/2d9868e7-994c-4ed7-8819-997b47b8f656)
![Screenshot 2024-12-11 131056](https://github.com/user-attachments/assets/dc4bc8ca-27ab-450c-87fd-1d78ea1afa6c)


<h2>:partying_face: Project DONE!!!</h2>
