import React, { Component } from 'react';
import SubItem from '../SubItem';
import SubItemForm from '../SubItemForm';

class Item extends Component {
  state = {
    addNewSubItem: false
  }

  handleToggleAddNewSubItem = () => {
    this.setState({ addNewSubItem: !this.state.addNewSubItem });
  }

  render() {
    const { addNewSubItem } = this.state;
    const { i, name, subItems, total, totalItems } = this.props;

    return (
      <div key={`group-${i}`} className="Card__group">
        <div className="Card__group__row Card__group__title">
          <span>{name}</span>
          <div>
            <button type="button" onClick={this.handleToggleAddNewSubItem}>Add sub item</button>
            <span>{total}</span>
          </div>
        </div>
        {addNewSubItem && (
          <SubItemForm
            i={i}
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
