
/*
REACT exercise:
i. create a function name is MyComponent. ie name starts with uppercase letter
ii. return null component

2. create a function(component) that returns a html element ie div inside h1
with some text ie <div> <h1> fav text </h1></div>

3. using react fragment, create a function named MyComponent3. 
this should return a react fragment inside; have multiple html elements ie
<div></div> <div></div> <div></div> 

4. create a component called parent component. 
render all your other components; the parent components. 
and finally put the parent component inside the strictmode
*/

/*
function MyComponent(){
  return null;    // valid jsx
}

function MyComponent2(){
  return(
    <div>
      <h1>This is my second component</h1>
    </div>
  );
}

function MyComponent3() {
  return (
    <>
      <div>First div</div>
      <div>Second div</div>
      <div>Third div</div>
    </>
  );
}

// Parent Component
function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <MyComponent />
      <MyComponent2 />
      <MyComponent3 />
    </div>
  );
}

// Render the ParentComponent inside StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParentComponent />
  </StrictMode>
);

// Only ONE render call - this renders everything
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>My first react app</h1>
    <MyComponent />          {/* self closing tags}
    <MyComponent2 />         {/* self closing }
    <MyComponent3 />         {/* self closing }
 </StrictMode>
);
*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './AmazonPage/Navigation';
import FilterList from './AmazonPage/FilterList';
import ItemCard from './AmazonPage/ItemCard';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation/>
    <FilterList/>
    <ItemCard/>
  </StrictMode>
);