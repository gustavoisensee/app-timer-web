import React, { PureComponent } from 'react';
import Item from '../Item';
import ItemForm from '../ItemForm';
import './styles.scss';

class Group extends PureComponent {
  state = {
    active: false,
    editable: false,
    addNewItem: false,
    addNewSubItem: false
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  }

  handleToggleAddNewItem = () => {
    this.setState({ addNewItem: !this.state.addNewItem });
  }

  handleEditClick = (e) => {
    e.stopPropagation();
    this.setState({ editable: !this.state.editable });
  }

  render() {
    const { month, index, handleChange, handleBlur } = this.props;
    const { active, editable, addNewItem } = this.state;
    const cardContainerClass = `Card__container${active ? '-active' : ''}`;
    const totalItems = month.items && month.items.length &&
      month.items.reduce((acc, cur) => (acc + cur.totalItems), 0);

    return (
      <div key={`month-${index}`} className="Card">
        <div className="Card__title" onClick={this.handleToggle}>
          {editable ?
            <input
              value={month.month}
              name={`data.${index}.month`}
              onChange={handleChange}
              onBlur={handleBlur}
            /> :
            <h3>{month.month}</h3>}
          <div className="Card__title__buttons">
            <button type="button" onClick={this.handleEditClick}>
              {editable ? 'Save' : 'Edit'}
            </button>
            {editable ?
              <input
                value={month.income}
                name={`data.${index}.income`}
                onChange={handleChange}
                onBlur={handleBlur}
              /> :
              <h3>{month.income}</h3>}
          </div>
        </div>
        <div className={cardContainerClass}>
          <button type="button" className="Card__group-add" onClick={this.handleToggleAddNewItem}>Add Item</button>
          {addNewItem && (
            <ItemForm handleToggle={this.handleToggleAddNewItem} {...this.props} />
          )}
          {month.items && month.items.map((item, i) => (
            <Item key={`item-${i}`} i={i} {...item} {...this.props} />
          ))}
          <div className="Card__group__row">
            <span>Total spent:</span>
            <span>{totalItems}</span>
          </div>
          <div className="Card__group__row">
            <span>Total left:</span>
            <span>{(month.income - totalItems)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Group;
