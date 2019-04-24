import React, { PureComponent } from 'react';
import Select from 'react-select';
import Group from '../Group';
import './styles.scss';

const EMPTY_ARRAY = [];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const data = [
  {
    year: 2019,
    month: months[3],
    income: [
      3500, 133
    ],
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
    month: months[2],
    income: [
      3500
    ],
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
    month: months[1],
    income: [
      3500
    ],
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
    month: months[11],
    income: [
      3500
    ],
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

const options = [
  { value: 2019, label: '2019' },
  { value: 2018, label: '2018' },
];

class Dashboard extends PureComponent {
  state = {
    year: new Date().getFullYear()
  }

  handleYearChange = (e) => {
    this.setState({ year: e.value });
  }

  render() {
    const { year } = this.state;
    const list = (data && data.length && data.filter(d => d.year === Number(year))) || EMPTY_ARRAY;

    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        <div className="Dashboard__filter">
          <Select
            options={options}
            defaultValue={options[0]}
            onChange={this.handleYearChange}
          />
        </div>
        {list.map((m, i) => <Group key={i} index={i} item={m} />)}
      </div>
    );
  }
};

export default Dashboard;
