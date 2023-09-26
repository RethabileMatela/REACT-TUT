React - open-source library for building user interfaces -not a framework 

- focus on UI
- rich ecosystem 
- created and maintained by facebook 
- reusable code
- declarative - tell react what you want and it will build the actual UI
- DOM updated gracefully 
- seamlessly into your existing applications
- react native for mobile apps 
- component based architecture ![Alt text](01.PNG)

 npx create-react-app hello-world
 cd hello-world
 npm start 

 npm start=> index.html is served in the browser => index.html contains the root dom node => control enters index.js, react dom renders the app component onto the root dom node => app.js contains the html which is ultimately played in the browser 

 component types - describe part of UI
 -stateless functional components - take in props and return html(jsx)
 -stateful class components

FUNCTIONAL COMPONENTS
- simple functions 
- absence of 'this' keyword
- solution without using state
- mainly responsible for the UI 
- state/ dumb/ representational
- hooks 

CLASS COMPONENTS 
- more feature rich 
- maintain their own state - private data
- complex UI logic
- Provide lifecycle hooks 
- stateful/ smart/ container 