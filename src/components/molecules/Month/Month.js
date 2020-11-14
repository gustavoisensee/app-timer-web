import React, { Component, Fragment } from 'react';
import Item from '../Item';
import ItemForm from '../ItemForm';
import Icon from '../../atoms/Icon';
import IconTypes from '../../../constants/iconTypes';
import { euro } from '../../../helpers/currency';
import './styles.scss';

class Group extends Component {
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

  handleDeleteClick = (e) => {
    e.stopPropagation();
    const { values, setValues, indexMonth } = this.props;

    values.data[indexMonth].deleted = true;
    this.setState({ editable: false });
    setValues({ ...values });
  }

  handleRefresh = () => {
    this.forceUpdate();
  }

  renderInput = (value, name) => {
    const { indexMonth, handleChange, handleBlur } = this.props;

    return (
      <input
        value={value}
        name={`data.${indexMonth}.${name}`}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={(e) => e.stopPropagation()}
      />
    );
  }

  render() {
    const { indexMonth, month } = this.props;
    const { active, editable, addNewItem } = this.state;
    const cardContainerClass = `Card__container${active ? '-active' : ''}`;
    const iconType = (editable ? IconTypes.SAVE : IconTypes.EDIT);
    const monthClass = (active ? 'Month__open' : 'Month');

    return (
      <div key={`month-${indexMonth}`} className="Card">
        <div className={`Card__title ${monthClass}`} onClick={this.handleToggle}>
          {editable ?
            <Fragment>
              {this.renderInput(month.month, 'month')}
              {this.renderInput(month.income, 'income')}
            </Fragment> :
            <div className='Month__title'>
              <h3>{month.month}</h3>
              <h3>{euro(month.income)}</h3>
            </div>
          }
          <div className="Card__title__buttons">
            {editable && <Icon type={IconTypes.DELETE} onClick={this.handleDeleteClick} />}
            <Icon type={iconType} onClick={this.handleEditClick} />
          </div>
        </div>
        <div className={cardContainerClass}>
          <button type="button" className="Card__group-add" onClick={this.handleToggleAddNewItem}>Add Item</button>
          {addNewItem && (
            <ItemForm handleToggle={this.handleToggleAddNewItem} {...this.props} />
          )}
          {month.items && month.items.map((item, indexItem) => (
            <Item
              key={`item-${indexMonth}-${indexItem}`}
              indexItem={indexItem}
              handleMonthRefresh={this.handleRefresh}
              {...this.props}
              {...item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Group;
