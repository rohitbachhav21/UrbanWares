import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyContextProvider } from '../src/components/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; // Assuming your App component is in a file named App.jsx
// import './index.css';
// import { ClerkProvider } from '@clerk/clerk-react';

// // Import your publishable key
// import { VITE_CLERK_PUBLISHABLE_KEY as PUBLISHABLE_KEY } from 'vite';

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//       <App />
//     </ClerkProvider>
//   </React.StrictMode>
// );
