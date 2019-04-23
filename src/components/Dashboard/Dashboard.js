import React from 'react';
import Group from '../Group';

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
    month: months[2],
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
  },
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
    {data && data.map((m, i) => <Group key={i} index={i} item={m} />)}
  </div>
);

export default Dashboard;
