import React, { PureComponent } from 'react';
import Month from '../../molecules/Month';
import MonthForm from '../../molecules/MonthForm';
import { getMonths } from '../../../services/month';
import NavBar from '../../atoms/NavBar';
import image from '../../../assets/loading-black.png';
import './styles.scss';

const EMPTY_ARRAY = [];

const _options = [
  { value: 2020, label: '2020' },
  { value: 2019, label: '2019' },
  { value: 2018, label: '2018' },
];

class Dashboard extends PureComponent {
  state = {
    year: new Date().getFullYear(),
    addNewMonth: false,
    user: null
  }

  handleYearChange = (e) => {
    this.setState({ year: e.target.value });
  }

  handleToggleAddNewMonth = () => {
    this.setState({ addNewMonth: !this.state.addNewMonth });
  }

  async componentDidMount() {
    const { setValues } = this.props;
    const promiseMonths = await getMonths();
    const data = await promiseMonths.json();
    setValues({ data });
  }

  render() {
    const {
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      setValues,
      user
    } = this.props;
    const { year, addNewMonth } = this.state;
    const { data } = values;

    const filteredData = (data && data.length &&
      data.filter(d => d.year === Number(year) && !d.deleted)
    ) || EMPTY_ARRAY;

    const basic = {
      handleChange,
      handleBlur,
      values,
      setValues,
      year
    };

    return (
      <div>
        <NavBar user={user} />
        <form onSubmit={handleSubmit}>
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
              <button type="button" onClick={this.handleToggleAddNewMonth} className='btn'>Add month</button>
              <button type="submit" className="btn btn-secondary">
                {isSubmitting ?
                  <img alt='' src={image} className='Loading' style={{ width: 14, height: 14 }} /> :
                  'Save'
                }
              </button>
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
        </form>
      </div>
    );
  }
};

export default Dashboard;
