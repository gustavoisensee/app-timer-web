import React, { PureComponent } from 'react';
import Select from 'react-select';
import Group from '../Group';
import './styles.scss';

const EMPTY_ARRAY = [];

const _data = [
  {
    year: 2019,
    month: "March",
    income: 3633,
    groups: [
      {
        name: 'Gloceries',
        total: 300,
        totalItems: 0,
        items: [
        ]
      },
      {
        name: 'Health Ensurance',
        total: 235,
        totalItems: 0,
        items: [
        ]
      }
    ]
  },
  {
    year: 2019,
    month: "February",
    income: 3500,
    groups: [
      {
        name: 'Gloceries',
        total: 300,
        totalItems: 46.65,
        items: [
          { description: 'Albert heijn 1', value: 12.33 },
          { description: 'Albert heijn 2', value: 34.22 },
        ]
      },
      {
        name: 'Health Ensurance',
        total: 235,
        totalItems: 135,
        items: [
          { description: 'Bru HE', value: 135 },
        ]
      }
    ]
  },
  {
    year: 2019,
    month: "January",
    income: 3500,
    groups: [
      {
        name: 'Gloceries',
        total: 300,
        totalItems: 46.65,
        items: [
          { description: 'Albert heijn 1', value: 12.33 },
          { description: 'Albert heijn 2', value: 34.22 },
          { description: 'Albert heijn 3', value: 45.11 },
        ]
      },
      {
        name: 'Health Ensurance',
        total: 235,
        totalItems: 135,
        items: [
          { description: 'Bru HE', value: 135 },
        ]
      }
    ]
  },
  {
    year: 2018,
    month: "December",
    income: 3500,
    groups: [
      {
        name: 'Gloceries',
        total: 300,
        totalItems: 0,
        items: [
        ]
      },
      {
        name: 'Health Ensurance',
        total: 235,
        totalItems: 0,
        items: [
        ]
      }
    ]
  },
];

const _options = [
  { value: 2019, label: '2019' },
  { value: 2018, label: '2018' },
];


class Dashboard extends PureComponent {
  state = {
    data: _data,
    year: new Date().getFullYear(),
    addNewMonth: false,
  }

  handleYearChange = (e) => {
    this.setState({ year: e.value });
  }

  handleAddNewMonth = () => {
    const { data } = this.state;
    data.unshift({
      year: 2019,
      month: this.month.value,
      income: this.income.value,
      groups: []
    });
    this.setState({ addNewMonth: false, data });
  }

  handleToggleAddNewMonth = () => {
    this.setState({ addNewMonth: !this.state.addNewMonth });
  }

  render() {
    const { year, data, addNewMonth } = this.state;
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
