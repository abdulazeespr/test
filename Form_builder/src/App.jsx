import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputFields, setInputFields] = useState([
    {
      type: "text",
      placeholder: "name",
      value: "aaa",
    },
    {
      type: "password",
      placeholder: "password",
      value: "",
    },
  ]);

  const [addArea, setaddArea] = useState(false);
  const [inputType, setInputType] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const handleFormChange = (index, event) => {
    let formData = [...inputFields];

    formData[index].value = event.target.value;

    setInputFields(formData);
  };

  const addInputBox = () => {
    let addNewField = {
      type: inputType,
      placeholder: placeholder,
      value: "",
    };

    setInputFields([...inputFields, addNewField]);
    setaddArea(false);
  };

  return (
    <div>
      <div>
        <h1>Form Builder</h1>
        <button onClick={() => setaddArea(true)}>Add InputBox</button>
      </div>
      <form>
        {inputFields.map((input, index) => (
          <div key={index}>
            <input
              type={input.type}
              placeholder={input.placeholder}
              value={input.value}
              onChange={(e) => {
                handleFormChange(index, e);
              }}
            />
          </div>
        ))}
      </form>
      {addArea && (
        <div>
          <form>
            <input
              type="text"
              placeholder="Enter the type"
              onChange={(e) => {
                setInputType(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter the Placeholder"
              onChange={(e) => {
                setPlaceholder(e.target.value);
              }}
            />

            <button onClick={addInputBox}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
