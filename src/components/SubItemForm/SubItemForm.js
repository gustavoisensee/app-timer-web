import React, { Component } from 'react';

class SubItemForm extends Component {
  handleAddNewSubItem = (itemIndex) => {
    const {
      index: monthIndex,
      values: { subItemName, subItemValue, data },
      setValues,
      handleToggle
    } = this.props;

    data[monthIndex].items[itemIndex].subItems.push({
      description: subItemName,
      value: subItemValue
    });
    
    setValues({ data });
    handleToggle();
  }

  render() {
    const { i, handleChange, handleBlur, handleToggle } = this.props;

    return (
      <div>
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
            className="AddNewMonth__button"
            type="button"
            onClick={() => this.handleAddNewSubItem(i)}
          >Save</button>
          <button
            className="AddNewMonth__button"
            type="button"
            onClick={handleToggle}
          >Cancel</button>
        </div>
      </div>
    )
  }
}

export default SubItemForm;
