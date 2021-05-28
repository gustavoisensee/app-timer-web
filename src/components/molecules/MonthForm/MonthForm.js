import React, { Component } from 'react';

class MonthForm extends Component {
  handleAddNewMonth = () => {
    const { setValues, values, handleToggle, year } = this.props;
    const item = {
      year,
      month: values.month,
      income: values.income,
      items: []
    };
    setValues({ data: [item, ...values.data] });
    handleToggle();
  }

  render() {
    const { handleChange, handleBlur, handleToggle } = this.props;

    return (
      <div className="AddNewMonth">
        <div className="AddNewMonth__inputs">
          <input
            type="text"
            name="month"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Month name"
          />
          <input
            name="income"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Income"
          />
        </div>
        <div>
          <button
            className="btn AddNewMonth__button"
            type="button"
            onClick={this.handleAddNewMonth}>Save</button>
          <button
            className="btn AddNewMonth__button"
            type="button"
            onClick={handleToggle}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default MonthForm;
