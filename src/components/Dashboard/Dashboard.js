import React, { PureComponent } from 'react';
import Select from 'react-select';
import Group from '../Group';
import './styles.scss';

const EMPTY_ARRAY = [];


const _options = [
  { value: 2019, label: '2019' },
  { value: 2018, label: '2018' },
];

class Dashboard extends PureComponent {
  state = {
    // data: this.props.values.data,
    year: new Date().getFullYear(),
    addNewMonth: false,
  }

  handleYearChange = (e) => {
    this.setState({ year: e.value });
  }

  handleAddNewMonth = () => {
    const { setValues, values } = this.props;
    const item = {
      year: 2019,
      month: values.month,
      income: values.income,
      groups: []
    };
    setValues({ data: [item, ...values.data] });
    this.setState({ addNewMonth: false});
  }

  handleToggleAddNewMonth = () => {
    this.setState({ addNewMonth: !this.state.addNewMonth });
  }

  render() {
    const {
      values: { data },
      handleChange,
      handleBlur
    } = this.props;
    const { year, addNewMonth } = this.state;
    const list = (data && data.length && data.filter(d => d.year === Number(year))) || EMPTY_ARRAY;

    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        <div className="Dashboard__filter">
          <Select
            options={_options}
            defaultValue={_options[0]}
            onChange={this.handleYearChange}
          />
        </div>
        <div className="Dashboard__add-button">
          <button type="button" onClick={this.handleToggleAddNewMonth}>Add month</button>
        </div>
        {addNewMonth && (
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
                className="AddNewMonth__button"
                type="button"
                onClick={this.handleAddNewMonth}>Save</button>
              <button
                className="AddNewMonth__button"
                type="button"
                onClick={this.handleToggleAddNewMonth}>Cancel</button>
            </div>
          </div>
        )}
        {list.map((m, i) => <Group key={i} index={i} item={m} {...this.props} />)}
      </div>
    );
  }
};

export default Dashboard;
