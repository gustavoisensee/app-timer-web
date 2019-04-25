import React, { PureComponent } from 'react';
import './styles.scss';

class Group extends PureComponent {
  state = {
    active: false,
    editable: false,
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  }

  handleEditClick = (e) => {
    e.stopPropagation();
    this.setState({ editable: !this.state.editable });
  }

  render() {
    const { item, index, handleChange, handleBlur } = this.props;
    const { active, editable } = this.state;
    const cardContainerClass = `Card__container${active ? '-active' : ''}`;
    const totalItems = item.groups && item.groups.length &&
      item.groups.reduce((acc, cur) => (acc + cur.totalItems), 0);

    return (
      <div key={`month-${index}`} className="Card">
        <div className="Card__title" onClick={this.handleToggle}>
          {editable ?
            <input
              value={item.month}
              name={`data.${index}.month`}
              onChange={handleChange}
              onBlur={handleBlur}
            /> :
            <h3>{item.month}</h3>}
          <div className="Card__title__buttons">
            <button type="button" onClick={this.handleEditClick}>
              {editable ? 'Save' : 'Edit'}
            </button>
            {editable ?
              <input
                value={item.income}
                name={`data.${index}.income`}
                onChange={handleChange}
                onBlur={handleBlur}
              /> :
              <h3>{item.income}</h3>}
          </div>
        </div>
        <div className={cardContainerClass}>
          <button type="button" className="Card__group-add">Add group</button>
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
            <span>{(item.income - totalItems)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Group;
