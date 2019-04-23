import React from 'react';
import './styles.scss';

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
    month: months[1],
    income: [
      3500, 133
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
  }
];

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    {data && data.map((m, i) => (
      <div key={`month-${i}`} className="Card">
        <div className="Card__title">
          <h3>{m.year}</h3>
          <h3>{m.month}</h3>
          <h3>{m.income.reduce((acc, cur) => (acc + cur), 0)}</h3>
        </div>
        <div className="Card__container">
          {m.groups && m.groups.map((g, i) => (
            <div key={`group-${i}`} className="Card__group">
              <div className="Card__group__row Card__group__title">
                <span>{g.name}</span>
                <span>{g.total}</span>
              </div>
              {g.items && g.items.map((item, i) => (
                <div key={`item-${i}`} className="Card__group__row">
                  <span>{item.description}</span>
                  <span>{item.value}</span>
                </div>
              ))}
              <div className="Card__group__row">
                <span>Total spent:</span>
                <span>{g.totalItems}</span>
              </div>
              <div className="Card__group__row">
                <span>Total left:</span>
                <span>{(g.total - g.totalItems)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Dashboard;
