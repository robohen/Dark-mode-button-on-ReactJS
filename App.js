import React, { useState } from "react";

export default function App() {

 const [isClicked, setIsClicked] = useState(false);

  function darkMode() {
    setIsClicked(isClicked => !isClicked);
  }
  
  let color1 = "orange"
  let color2 = "blue"
  
  return (
  
   <div className="App" style={isClicked ? ( {backgroundColor: `#181818`}) : (
      {backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})`}
      )}>
          <h1><button onClick={darkMode}>Dark Mode Test</button></h1>
   </div>
   );
}