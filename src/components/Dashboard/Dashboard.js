import React from 'react';
import './styles.scss';

const data = [
  {
    year: 2019,
    month: 1,
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
      }
    ]
  }
];

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    {data && data.map((m, i) => (
      <div key={`month-${i}`} className="Card">
        <div>
          <span>{m.year}</span>/
          <span>{m.month}</span>
        </div>
        <div>
          <span>{m.income.reduce((acc, cur) => (acc + cur), 0)}</span>
        </div>
        <div>
          {m.groups && m.groups.map((g, i) => (
            <div key={`group-${i}`}>
              <span>{g.name}</span>&nbsp;
              <span>{g.total}</span>
              {g.items && g.items.map((item, i) => (
                <div key={`item-${i}`}>
                  <span>{item.description}</span>&nbsp;
                  <span>{item.value}</span>
                </div>
              ))}
              <div>
                <span>Total spent: {g.totalItems}</span>
              </div>
              <div>
                <span>Total left: {(g.total - g.totalItems)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Dashboard;
