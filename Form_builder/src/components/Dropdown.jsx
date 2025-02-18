import { useState } from "react";

const Dropdown = ({
  usersArray,
  setIsDropdownOpen,
  isDropdownOpen,
  assignedList,
  setAssignedList,
}) => {
  // { usersArray }
  const toggleDropdown = () => {
    setIsDropdownOpen(true);
  };

  function handleAssign(user) {
    setAssignedList((prevList) => {
      // Check if the user already exists in the list
      if (prevList.includes(user)) {
        // If user exists, remove it from the list
        const updatedList = prevList.filter((item) => item !== user);
        return updatedList;
      } else {
        // If user doesn't exist, add it to the list
        return [...prevList, user];
      }
    });
  }
  return (
    <div>
      <label className="mt-4">Select Element:</label>

      <button
        className="  px-4 w-full py-2 flex items-center justify-between  rounded border  border-[#828FA340] hover:border-primary cursor-pointer relative "
        onClick={toggleDropdown}
      >
        <span className="block">Select</span>
        {isDropdownOpen && (
          <div className="absolute bottom-full translate-x-9 text-white left-full translate-y-full rounded w-max">
            <ul className="flex flex-col p-2">
              {usersArray.map((user) => (
                <li
                  key={user.id}
                  className={`flex items-center gap-2 p-4 hover: rounded transition-all bg-black duration-200 `}
                  onClick={() => handleAssign(user)}
                >
                  {assignedList.includes(user) && <p>✔️</p>}
                  <span>{user.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
    </div>
  );
};

export default Dropdown;
