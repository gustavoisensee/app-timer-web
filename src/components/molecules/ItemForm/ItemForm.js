import React, { Component } from 'react';
import './styles.scss';

class ItemForm extends Component {
  handleAddNewItem = () => {
    const {
      indexMonth,
      values: { itemName, itemValue, data },
      setValues,
      handleToggle
    } = this.props;
    
    data[indexMonth].items.push({
      name: itemName,
      total: itemValue,
      totalItems: 0,
      subItems: []
    });

    setValues({ data });
    handleToggle();
  }

  render() {
    const { handleChange, handleBlur, handleToggle } = this.props;

    return (
      <div className="ItemForm">
        <div className="AddNewMonth__inputs">
          <input
            type="text"
            name="itemName"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Item name"
          />
          <input
            name="itemValue"
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
            onClick={this.handleAddNewItem}
          >Save</button>
          <button
            className="AddNewMonth__button"
            type="button"
            onClick={handleToggle}
          >Cancel</button>
        </div>
      </div>
    );
  }
}

export default ItemForm;
