import React, { Component, Fragment } from 'react';
import SubItem from '../SubItem';
import SubItemForm from '../SubItemForm';

class Item extends Component {
  state = {
    editable: false,
    addNewSubItem: false
  }

  handleEditClick = () => {
    this.setState({ editable: !this.state.editable });
  }

  handleToggleAddNewSubItem = () => {
    this.setState({ addNewSubItem: !this.state.addNewSubItem });
  }

  render() {
    const { addNewSubItem, editable } = this.state;
    const {
      indexMonth, indexItem, name, subItems, total, totalItems,
      handleChange, handleBlur
    } = this.props;

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
            <button type="button" onClick={this.handleToggleAddNewSubItem}>
              &nbsp;&nbsp;+&nbsp;&nbsp;
            </button>
          </div>
        </div>
        {addNewSubItem && (
          <SubItemForm
            i={indexItem}
            handleToggle={this.handleToggleAddNewSubItem}
            {...this.props}
          />
        )}
        {subItems && subItems.map((item, i) => (
          <SubItem key={`subitem-${i}`} i={i} {...item} />
        ))}
        <div className="Card__group__row Card__group__footer">
          <span>Total left:</span>
          <span>{(total - totalItems)}</span>
        </div>
      </div>
    );
  }
}

export default Item;
