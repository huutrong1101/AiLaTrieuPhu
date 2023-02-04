import React, { useRef } from "react";

function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        type="text"
        placeholder="Nhập tên người chơi"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Bắt đầu
      </button>
    </div>
  );
}

export default Start;
