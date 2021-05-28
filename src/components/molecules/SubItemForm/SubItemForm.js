import React, { Component } from 'react';
import './styles.scss';

class SubItemForm extends Component {
  handleAddNewSubItem = (itemIndex) => {
    const {
      indexMonth,
      values: { subItemName, subItemValue, data },
      setValues,
      handleToggle
    } = this.props;

    data[indexMonth].items[itemIndex].subItems.push({
      description: subItemName,
      value: subItemValue
    });
    
    setValues({ data });
    handleToggle();
  }

  render() {
    const { i, handleChange, handleBlur, handleToggle } = this.props;

    return (
      <div className="SubItemForm">
        <div className="AddNewItem__inputs">
          <input
            type="text"
            name="subItemName"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Item name"
          />
          <input
            name="subItemValue"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Value"
          />
        </div>
        <div>
          <button
            className="btn AddNewMonth__button"
            type="button"
            onClick={() => this.handleAddNewSubItem(i)}
          >Save</button>
          <button
            className="btn AddNewMonth__button"
            type="button"
            onClick={handleToggle}
          >Cancel</button>
        </div>
      </div>
    );
  }
}

export default SubItemForm;
