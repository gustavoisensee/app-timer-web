import React, { PureComponent } from 'react';
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

  handleToggleAddNewSubItem = () => {
    this.setState({ addNewSubItem: !this.state.addNewSubItem });
  }

  handleAddNewItem = () => {
    const {
      index,
      values: { itemName, itemValue, data },
      setValues
    } = this.props;
    
    data[index].items.push({
      name: itemName,
      total: itemValue,
      totalItems: 0,
      subItems: []
    });

    setValues({ data });
    this.setState({ addNewItem: false });
  }

  handleAddNewSubItem = (itemIndex) => {
    const {
      index: monthIndex,
      values: { subItemName, subItemValue, data },
      setValues
    } = this.props;

    data[monthIndex].items[itemIndex].subItems.push({
      description: subItemName,
      value: subItemValue
    });
    
    setValues({ data });
    this.setState({ addNewSubItem: false });
  }

  handleEditClick = (e) => {
    e.stopPropagation();
    this.setState({ editable: !this.state.editable });
  }

  render() {
    const { month, index, handleChange, handleBlur } = this.props;
    const { active, editable, addNewItem, addNewSubItem } = this.state;
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
            <div>
              <div className="AddNewMonth__inputs">
                <input
                  type="text"
                  name="itemName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Group name"
                />
                <input
                  name="itemValue"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Value"
                />
              </div>
              <div>
                <button
                  className="AddNewMonth__button"
                  type="button"
                  onClick={this.handleAddNewItem}
                >Save</button>
                <button
                  className="AddNewMonth__button"
                  type="button"
                  onClick={this.handleToggleAddNewItem}
                >Cancel</button>
              </div>
            </div>
          )}
          {month.items && month.items.map((g, i) => (
            <div key={`group-${i}`} className="Card__group">
              <div className="Card__group__row Card__group__title">
                <span>{g.name}</span>
                <div>
                  <button type="button" onClick={this.handleToggleAddNewSubItem}>Add sub item</button>
                  <span>{g.total}</span>
                </div>
              </div>
              {addNewSubItem && (
                <div>
                  <div className="AddNewItem__inputs">
                    <input
                      type="text"
                      name="subItemName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Item name"
                    />
                    <input
                      name="subItemValue"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Value"
                    />
                  </div>
                  <div>
                    <button
                      className="AddNewMonth__button"
                      type="button"
                      onClick={() => this.handleAddNewSubItem(i)}
                    >Save</button>
                    <button
                      className="AddNewMonth__button"
                      type="button"
                      onClick={this.handleToggleAddNewSubItem}
                    >Cancel</button>
                  </div>
                </div>
              )}
              {g.subItems && g.subItems.map((item, i) => (
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
            <span>{(month.income - totalItems)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Group;
