import React, { Component, Fragment } from 'react';

class SubItem extends Component {
  state = {
    editable: false
  }

  handleEditClick = () => {
    this.setState({ editable: !this.state.editable });
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
        </div>
      </div>
    );
  }
}

export default SubItem;
