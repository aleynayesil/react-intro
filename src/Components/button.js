import React, { useState } from "react";
import "./button.css";
//rfce
function Button({ text, className, clicked }) {
  const [counter, setCounter] = useState(0);

  const click = () => {
    // window.alert("clicked");
    clicked(`${text} 'e tıklandı`);
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>Tıklama Sayısı :{counter}</p>
      <button className={className} onClick={click}>
        {text}
      </button>
    </div>
  );
}
export default Button;
