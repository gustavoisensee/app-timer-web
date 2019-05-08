import React, { PureComponent } from 'react';
import Select from 'react-select';
import Month from '../Month';
import MonthForm from '../MonthForm';
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

  handleToggleAddNewMonth = () => {
    this.setState({ addNewMonth: !this.state.addNewMonth });
  }

  render() {
    const {
      handleChange,
      handleBlur,
      values,
      setValues
    } = this.props;
    const { year, addNewMonth } = this.state;
    const { data } = values;
    const filteredData = (data && data.length && data.filter(d => d.year === Number(year))) || EMPTY_ARRAY;
    const basic = {
      handleChange,
      handleBlur,
      values,
      setValues
    };

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
          <MonthForm
            handleToggle={this.handleToggleAddNewMonth}
            {...basic}
          />
        )}
        {filteredData.map((month, indexMonth) => (
          <Month
            key={`month-${indexMonth}`}
            indexMonth={indexMonth}
            month={month}
            {...basic}
            {...this.props}
          />
        ))}
      </div>
    );
  }
};

export default Dashboard;
