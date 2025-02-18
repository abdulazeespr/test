import { useEffect, useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import AssignedList from "./components/AssignedList";

function App() {
  const [inputFields, setInputFields] = useState([]);
  // {
  //   type: "text",
  //   placeholder: "name",
  //   value: "aaa",
  // },
  // {
  //   type: "password",
  //   placeholder: "password",
  //   value: "",
  // },

  const [usersArray, setUsersArray] = useState([
    {
      id: 1,
      name: "TextInput",
    },
    {
      id: 2,
      name: "Checkbox",
    },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [inputType, setInputType] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [label, setLabel] = useState("");
  const [checkboxValue, setCheckBoxValue] = useState("");
  const [assignedList, setAssignedList] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleFormChange = (index, event) => {
    let formData = [...inputFields];

    formData[index].value = event.target.value;

    setInputFields(formData);
  };

  return (
    <div className="flex justify-between px-4 py-6">
      <div>
        <div>
          <h1 className="text-2xl text-blue-400 font-bold">Form Builder</h1>
        </div>
        <div>
          <div className="border-2 rounded-sm">
            {inputFields.map((input, index) => (
              <div key={index}>
                <label className="text-xl pr-2">{input.label}:</label>
                <input
                  className="text-black border-2 rounded-sm "
                  type={input.type}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
              </div>
            ))}
            {inputFields.length >= 1 && (
              <button
                className="bg-black text-blue-300 text-xl px-4 py-2 rounded-md"
                onClick={() => setDisplay(true)}
              >
                Submit
              </button>
            )}
          </div>
        </div>
        <div className="mt-10 border-2 rounded-sm">
          <Dropdown
            usersArray={usersArray}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            assignedList={assignedList}
            setAssignedList={setAssignedList}
          />
          <AssignedList
            assignedList={assignedList}
            setAssignedList={setAssignedList}
            placeholder={placeholder}
            setPlaceholder={setPlaceholder}
            inputType={inputType}
            setInputType={setInputType}
            inputFields={inputFields}
            setInputFields={setInputFields}
            label={label}
            setLabel={setLabel}
            checkboxValue={checkboxValue}
            setCheckBoxValue={setCheckBoxValue}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Output:</h1>
        <div className="flex flex-col">
          {inputFields?.map((input, index) => (
            <div key={index} className="flex">
              <h4 className="text-xl pr-2">{input.label}:</h4>
              <h4 className="text-xl pr-2">{input.value}:</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
