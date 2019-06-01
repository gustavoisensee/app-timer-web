import React, { PureComponent } from 'react';
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
    year: new Date().getFullYear(),
    addNewMonth: false,
  }

  handleYearChange = (e) => {
    this.setState({ year: e.target.value });
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
          <select
            className='Select'
            onChange={this.handleYearChange}
            value={year}
          >
            {_options.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>  
            ))}
          </select>
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
