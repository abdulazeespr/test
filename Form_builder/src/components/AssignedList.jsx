function AssignedList({
  assignedList,
  setAssignedList,
  placeholder,
  setPlaceholder,
  inputType,
  setInputType,
  inputFields,
  setInputFields,
  label,
  setLabel,
  checkboxValue,
  setCheckBoxValue,
}) {
  function handleRemove(id) {
    setAssignedList((assignedList) =>
      assignedList.filter((user) => user.id !== id)
    );
  }
  const addInputBox = () => {
    let addNewField = {
      type: inputType,
      label: label,
      placeholder: placeholder,
      value: "",
    };

    setInputFields((prev) => [...prev, addNewField]);
  };
  const addCheckBox = () => {
    let addNewField = {
      type: "checkbox",
      label: checkboxValue,
      value: checkboxValue,
    };

    setInputFields((prev) => [...prev, addNewField]);
  };

  return (
    <div className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
      <h2 className="px-2 my-3 font-bold">Element list:</h2>
      <div className="flex flex-wrap gap-4 ">
        {assignedList?.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center gap-1 w-[47.5%] p-2 hover: rounded transition-all duration-200"
          >
            <span>{index + 1}.</span>
            {user.id === 1 ? (
              <div className="flex gap-2">
                <input
                  className="text-black border-2 rounded-sm "
                  type="text"
                  placeholder="Enter the type"
                  onChange={(e) => {
                    setInputType(e.target.value);
                  }}
                />
                <input
                  className="text-black border-2 rounded-sm "
                  type="text"
                  placeholder="Enter the Label"
                  onChange={(e) => {
                    setLabel(e.target.value);
                  }}
                />
                <input
                  className="text-black border-2 rounded-sm "
                  type="text"
                  placeholder="Enter the Placeholder"
                  onChange={(e) => {
                    setPlaceholder(e.target.value);
                  }}
                />

                <button
                  className="bg-black text-blue-300 text-xl px-4 py-2 rounded-md"
                  onClick={addInputBox}
                >
                  Submit
                </button>
              </div>
            ) : user.id === 2 ? (
              <div>
                <input
                  className="text-black border-2 rounded-sm "
                  type="text"
                  placeholder="Value"
                  onChange={(e) => {
                    setCheckBoxValue(e.target.value);
                  }}
                />

                <button
                  className="bg-black text-blue-300 text-xl px-4 py-2 rounded-md"
                  onClick={addCheckBox}
                >
                  Submit
                </button>
              </div>
            ) : null}

            <span
              className="ml-auto cursor-pointer p-1 hover:bg-[#2b2c37] rounded-full"
              onClick={() => handleRemove(user.id)}
            >
              ❌
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignedList;
