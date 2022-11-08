import React from "react";
import CategoryList from "./CategoryList";

const Category = (props) => {
  const { category } = props;
  return (
    <span className="Category">
      <h3>{category.name}</h3>
      <img src={category.imageUrl} alt="test" />
      <div>
        <CategoryList listItems={category.categoryList} />
      </div>
    </span>
  );
};

export default Category;
