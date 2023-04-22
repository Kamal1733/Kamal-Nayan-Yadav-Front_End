import React from "react";
import "./Answer.css";
import i1 from "./s111.png"

import i2 from "./s2.png"
import i3 from "./s3.png"
const Answer = () => {
  return (
    <div className="ans">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> 1. Explain what the simple List component does.</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                {" "}
                We have give a Raect component named as List that renders an
                unordered list of items passed as props. Each item is
                represented as a SingleListItem component, which is a memoized
                functional component that receives several props, including the
                index of the item, a boolean value indicating whether the item
                is selected or not, a function to handle clicks on the item, and
                the text to display in the item. <br /> <br />
                The List component maintains its own state using the useState
                hook to keep track of the index of the selected item. When an
                item is clicked, the handleClick function is called with the
                index of the clicked item, and this index is stored in the
                component's state using the setSelectedIndex function.
                <br />
                <br />
                The isSelected prop passed to each SingleListItem component is a
                boolean that indicates whether the item at the given index is
                currently selected, based on the selected index stored in the
                List component's state. If the index matches the selected index,
                the item is highlighted with a green background; otherwise, it
                has a red background <br />
                <br />
                The List component also uses the useEffect hook to reset the
                selected index to null whenever the items prop changes. This
                ensures that if the list is updated with new items, any
                previously selected item is deselected. Additionally, the List
                component defines default props for the items prop, setting it
                to null if not provided.
                <br />
                <br />
                Overall, the List component allows a user to select a single
                item from a list of items and provides visual feedback on which
                item is currently selected.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> 2.What problems / warnings are there with code?</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                <strong>
                  There are a few problems/warnings with this code:  <br /><br />
                </strong>{" "}
            1.  In the SingleListItem component, the <code>onClickHandler</code>{" "}
                prop is passed the result of calling the{" "}
                <code>handleClick</code> function instead of the function
                itself. This will cause <code>handleClick</code> to be called
                immediately when the component is rendered, rather than when the
                item is clicked. To fix this, the <code>onClickHandler</code>{" "}
                prop should be passed a function that calls{" "}
                <code>handleClick</code> when the item is clicked, like this:  <code> {'onClick={() => onClickHandler(index)}'}</code> <br />  <br />
                2.  In the WrappedListComponent propTypes definition, the array prop items is defined as an array of objects with a text property that is a required string. However, the correct syntax is <code>{'PropTypes.arrayOf(PropTypes.shape({...}))'}</code>. The correct propTypes definition for items should be: items: <code>{'PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string.isRequired}))'}</code>. <br /><br />
                3. In the WrappedListComponent component, the selectedIndex variable initialized by useState should be set to null instead of undefined. This occurs in the following line: const [setSelectedIndex, selectedIndex] = useState();.  <br /><br />
                4.   bIn the SingleListItem component, the isSelected prop is passed the selectedIndex state variable instead of a boolean value. This occurs in the following line:  <code>{'isSelected={selectedIndex}'}</code> . <br /><br />
                5.  In the WrappedListComponent component, a unique key should be provided for each SingleListItem component to help React efficiently render the list. This occurs in the following line: <code>{'<SingleListItem .../>'}</code>. <br /><br />


                6.  In Given code we are using map() method without any  data passing  from the App component, the selectedIndex variable was set to null by default, resulting in an error. To address this, a default prop for data can be set to ensure that the map() method has valid data to work with, even if it is not passed from the App component. <br /><br />

                7.  the state setter function setSelectedIndex is defined incorrectly in the WrappedListComponent. The line const [setSelectedIndex, selectedIndex] = useState(); should be changed to const [selectedIndex, setSelectedIndex] = useState(null);.

        
 
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>
                {" "}
                3.Please fix, optimize, and/or modify the component as much as
                you think is necessary.
              </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>I have fixed and optimized code.. and modify it to look more pleasent <br /></strong> Here is my code link: <br /><br />
               <img  className="imm" src={i1} alt="" /> <br /><br />
               <img className="imm"  src={i2} alt="" /> <br /><br />
               <img  className="imm"  src={i3} alt="" /> <br />


               <strong>detail code available on github</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
