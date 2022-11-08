import React from "react";

const CategoryList = (props) => {
  const listItems = props.listItems;
  return (
    <div>
      {listItems.map((item, index) => {
        return (
          <div key={index}>
            <li>{item}</li>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
