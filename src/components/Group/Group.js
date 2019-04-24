import React, { PureComponent } from 'react';
import './styles.scss';

class Group extends PureComponent {
  state = {
    active: false
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { item, index } = this.props;
    const { active } = this.state;
    const cardContainerClass = `Card__container${active ? '-active' : ''}`;
    const totalIncome = item.income.reduce((acc, cur) => (acc + cur), 0);
    const totalItems = item.groups && item.groups.length &&
      item.groups.reduce((acc, cur) => (acc + cur.totalItems), 0);

    return (
      <div key={`month-${index}`} className="Card">
        <div className="Card__title" onClick={this.handleToggle}>
          <h3>{item.month}</h3>
          <h3>{totalIncome}</h3>
        </div>
        <div className={cardContainerClass}>
          {item.groups && item.groups.map((g, i) => (
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
              <div className="Card__group__row Card__group__footer">
                <span>Total left:</span>
                <span>{(g.total - g.totalItems)}</span>
              </div>
            </div>
          ))}
          <div className="Card__group__row">
            <span>Total spent:</span>
            <span>{totalItems}</span>
          </div>
          <div className="Card__group__row">
            <span>Total left:</span>
            <span>{(totalIncome - totalItems)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Group;
