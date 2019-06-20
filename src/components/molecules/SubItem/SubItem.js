import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atoms/Icon';
import IconTypes from '../../../constants/iconTypes';
import { euro } from '../../../helpers/currency';
import './styles.scss';

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

    setValues({ ...values });
    this.setState({ editable: false });

    handleItemRefresh();
  }

  render() {
    const { editable } = this.state;
    const { indexMonth, indexItem, indexSubItem, description, value, handleChange, handleBlur } = this.props;
    const iconType = (editable ? IconTypes.SAVE : IconTypes.EDIT);

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
          <div className='SubItem__title'>
            <span>{description}</span>
            <span>{euro(value)}</span>
          </div>
        }
        <div className='row'>
          {editable && <Icon type={IconTypes.DELETE} onClick={this.handleDeleteClick} />}
          <Icon type={iconType} onClick={this.handleEditClick} />
        </div>
      </div>
    );
  }
}

export default SubItem;
