import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Soccer",
    "Music",
    "Live",
    "Cooking",
    "Cricket",
    "Computer",
    "Retro",
  ];
  return (
    <div className="flex">
      {list.map((x) => {
        return <Button name={x} className="" />;
      })}
    </div>
  );
};

export default ButtonList;
