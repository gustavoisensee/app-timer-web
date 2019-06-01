import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class SubItem extends Component {
  static propTypes = {
    handleItemRefresh: PropTypes.func
  }

  state = {
    editable: false
  }

  handleEditClick = () => {
    this.setState({ editable: !this.state.editable });
  }

  handleDeleteClick = (e) => {
    e.stopPropagation();
    const {
      values, setValues, indexMonth, indexItem, indexSubItem, handleItemRefresh
    } = this.props;

    values.data[indexMonth]
      .items[indexItem]
      .subItems.splice(indexSubItem, 1);

    setValues(values);
    this.setState({ editable: false });

    handleItemRefresh();
  }

  render() {
    const { editable } = this.state;
    const { indexMonth, indexItem, indexSubItem, description, value, handleChange, handleBlur } = this.props;

    return (
      <div className="Card__group__row">
        {editable ?
          <Fragment>
            <input
              value={description}
              name={`data.${indexMonth}.items.${indexItem}.subItems.${indexSubItem}.description`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              className='Input__small'
              value={value}
              name={`data.${indexMonth}.items.${indexItem}.subItems.${indexSubItem}.value`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Fragment> :
          <Fragment>
            <span>{description}</span>
            <span>{value}</span>
          </Fragment>
        }
        <div>
          <button type="button" onClick={this.handleEditClick}>
            {editable ? 'Save' : 'Ed.'}
          </button>
          {editable && <button type="button" onClick={this.handleDeleteClick}>Del.</button>}
        </div>
      </div>
    );
  }
}

export default SubItem;
