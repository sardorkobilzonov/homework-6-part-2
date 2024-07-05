import React, { useState, useEffect } from "react";

import Timer from "./components/Timer.jsx";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        style={{
          marginLeft: "600px",
        }}
      >
        {show ? "Hide Timer" : "Show Timer"}
      </button>
      {show && <Timer />}
    </div>
  );
};

export default App;
