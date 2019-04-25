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
    // const { data } = this.state;
    // data.unshift();
    const { setValues, values } = this.props;
    const item = {
      year: 2019,
      month: this.month.value,
      income: this.income.value,
      groups: []
    };
    setValues({ data: [item, ...values.data] });
    this.setState({ addNewMonth: false});
  }

  handleToggleAddNewMonth = () => {
    this.setState({ addNewMonth: !this.state.addNewMonth });
  }

  render() {
    const { values: { data } } = this.props;
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
                ref={(ref) => this.month = ref}
                id="month"
                type="text"
                placeholder="Month name"
              />
              <input
                ref={(ref) => this.income = ref}
                id="income"
                type="number"
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
        {list.map((m, i) => <Group key={i} index={i} item={m} />)}
      </div>
    );
  }
};

export default Dashboard;
