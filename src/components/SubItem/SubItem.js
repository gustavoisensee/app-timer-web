import React, { Component } from 'react';

class SubItem extends Component {
  render() {
    const { i, description, value } = this.props;
    return (
      <div key={`subitem-${i}`} className="Card__group__row">
        <span>{description}</span>
        <span>{value}</span>
      </div>
    );
  }
}

export default SubItem;
