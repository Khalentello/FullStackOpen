import ReactDOM from "react-dom/client";
import App from "./App";
import react from "react";

//NOT A GOOD PRACTICE TO FETCH DATA FROM A SERVER BUT IT WORKS
// axios.get("http://localhost:3001/notes").then((response) => {
//   const notes = response.data;
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <react.StrictMode>
//       <App notes={notes} />
//     </react.StrictMode>
//   );
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <react.StrictMode>
    <App />
  </react.StrictMode>
);
