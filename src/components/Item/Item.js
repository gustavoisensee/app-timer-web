import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SubItem from '../SubItem';
import SubItemForm from '../SubItemForm';
import Icon from '../atoms/Icon';
import IconTypes from '../../constants/iconTypes';

class Item extends Component {
  static propTypes = {
    handleMonthRefresh: PropTypes.func
  }

  state = {
    editable: false,
    addNewSubItem: false
  }

  handleEditClick = (e) => {
    e.stopPropagation();
    this.setState({ editable: !this.state.editable });
  }

  handleDeleteClick = (e) => {
    e.stopPropagation();
    const {
      values, setValues, indexMonth, indexItem, handleMonthRefresh
    } = this.props;

    values.data[indexMonth].items.splice(indexItem, 1);
    setValues(values);
    this.setState({ editable: false });

    handleMonthRefresh();
  }

  handleToggleAddNewSubItem = () => {
    this.setState({ addNewSubItem: !this.state.addNewSubItem });
  }

  handleRefresh = () => {
    this.forceUpdate();
  }

  render() {
    const { addNewSubItem, editable } = this.state;
    const {
      indexMonth, indexItem, name, subItems, total,
      handleChange, handleBlur
    } = this.props;
    const iconType = (editable ? IconTypes.SAVE : IconTypes.EDIT);
    let totalItems = 0;

    return (
      <div key={`item-${indexItem}`} className="Card__group">
        <div className="Card__group__row Card__group__title">
          {editable ?
            <Fragment>
              <input
                value={name}
                name={`data.${indexMonth}.items.${indexItem}.name`}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                className='Input__small'
                value={total}
                name={`data.${indexMonth}.items.${indexItem}.total`}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Fragment> :
            <Fragment>
              <span>{name}</span>
              <span>{total}</span>
            </Fragment>
          }
          <div className='row'>
            <Icon type={iconType} onClick={this.handleEditClick} />
            {!editable &&
              <Icon type={IconTypes.ADD} onClick={this.handleToggleAddNewSubItem} style={{ marginLeft: 8 }} />}
            {editable &&
              <Icon type={IconTypes.DELETE} onClick={this.handleDeleteClick} />}
          </div>
        </div>
        {addNewSubItem && (
          <SubItemForm
            i={indexItem}
            handleToggle={this.handleToggleAddNewSubItem}
            {...this.props}
          />
        )}
        {subItems && subItems.map((item, indexSubItem) => {
          totalItems += item.value;
          return (
            <SubItem
              key={`subitem-${indexMonth}-${indexItem}-${indexSubItem}`} 
              indexMonth={indexMonth}
              indexItem={indexItem}
              indexSubItem={indexSubItem}
              handleItemRefresh={this.handleRefresh}
              {...this.props}
              {...item}
            />
          );
        })}
        <div className="Card__group__row Card__group__footer">
          <span>Total left:</span>
          <span>{(total - totalItems)}</span>
        </div>
      </div>
    );
  }
}

export default Item;
