//import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/todos";
import Button from "./Components/button";

export default function App() {
  const buttonClick = (message) => {
    //     alert(message);
  };
  return (
    <div>
      <Todos />
    </div>
  );
}

//export default App;
//
//   return (
//     <div className="App">
//       {
//        <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <Button
//           clicked={buttonClick}
//           text={"Button-1"}
//           className={"blue-button"}
//         />
//         <Button
//           clicked={buttonClick}
//           text={"Button-2"}
//           className={"green-button"}
//         />
//       </header>
//     </div>
//   );
