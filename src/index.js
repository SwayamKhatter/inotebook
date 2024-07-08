// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
// // reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { NoteProvider } from './context/notes/noteContext';

// ReactDOM.render(
//   <NoteProvider>
//     <App />
//   </NoteProvider>,
//   document.getElementById('root')
// );




import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NoteState from './context/notes/NoteState';

ReactDOM.render(
  <NoteState>
    <App />
  </NoteState>,
  document.getElementById('root')
);
