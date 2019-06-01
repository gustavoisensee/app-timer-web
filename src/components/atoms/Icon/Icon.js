import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ICON_SIZE } from '../../../constants/styles';
import IconTypes from '../../../constants/iconTypes';
import Svgs from './svgs';
import './styles.scss';

const Icon = ({ type, onClick, style, ...rest }) => {
  const IconSvg = Svgs[type];
  return (
    <div className='Icon' style={style}>
      <IconSvg
        width={ICON_SIZE}
        height={ICON_SIZE}
        onClick={onClick}
        {...rest}
      />
    </div>
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf(
    Object.values(IconTypes)
  ),
  onClick: PropTypes.func,
};

export default memo(Icon);
