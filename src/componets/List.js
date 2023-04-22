import React, { useState, memo, useEffect } from "react";
import PropTypes from "prop-types";
import "./List.css";

const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    index === isSelected ? setBool(true) : setBool(false);
  }, [index, isSelected]);

  return bool ? (
    <li
      style={{ backgroundColor: "green" }}
      onClick={() => onClickHandler(index)}
    >
      {text}{" "}
    </li>
  ) : (
    <li
      style={{ backgroundColor: "red" }}
      onClick={() => onClickHandler(index)}
    >
      {text}{" "}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.number,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

const WrappedListComponent = ({ items }) => {
  const [selectIndex, setSelectIndex] = useState(false);

  const handleClick = (index) => {
    setSelectIndex(index);
  };

  return (
    <ul style={{ textAlign: "left", cursor: "pointer" }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={(index) => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectIndex}
          key={index}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};
WrappedListComponent.defaultProps = {
  items: [
    {
      text: "Computer Science and Engineering",
    },
    {
      text: "Information Technology",
    },
    {
      text: "Electronics and Communication",
    },
    {
      text: "Mechanincal Engineering",
    },
    {
      text: "Chemical Engineering",
    },
    {
      text: "Architectural engineering",
    },
    {
      text: "Aerospace Engineering",
    },
  ],
};
const List = memo(WrappedListComponent);
export default List;
