import { useState } from "react";
import "./App.css";
import General from "./components/General";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [test, setTest] = useState({ preview: "", finished: "" });
  /*form handlers 
  for education experience etc need state to be array or set to be able to add and remove panels.
  make sure add button is independent so you can technically have 0 education or expirenece skills etc.*/

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmit(true);
          setTest({ ...test, finished: test.preview });
        }}
      >
        <input
          type="text"
          value={test.preview}
          onChange={(e) => setTest({ ...test, preview: e.target.value })}
        />
        {/*General Info*/}
        {/*Education*/}
        {/*Experience*/}
        {/*Skills*/}
        <button type="submit">Submit</button>
      </form>
      {
        isSubmit && <General test={test.finished} />
        /*Switch Form Product visiblity?*/
      }
    </>
  );
}

export default App;
