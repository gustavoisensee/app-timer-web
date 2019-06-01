import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SubItem from '../SubItem';
import SubItemForm from '../SubItemForm';

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
          <div>
            <button type="button" onClick={this.handleEditClick}>
              {editable ? 'Save' : 'Ed.'}
            </button>
            {!editable &&
              <button type="button" onClick={this.handleToggleAddNewSubItem}>
                &nbsp;&nbsp;+&nbsp;&nbsp;
              </button>
            }
            {editable && <button type="button" onClick={this.handleDeleteClick}>Del.</button>}
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
              key={`subitem-${indexItem}-${indexSubItem}`} 
              indexItem={indexItem}
              indexSubItem={indexSubItem}
              handleItemRefresh={this.handleRefresh}
              {...this.props}
              {...item}
            />
          )
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
