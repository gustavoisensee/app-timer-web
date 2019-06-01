import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ICON_SIZE } from '../../../constants/styles';
import IconTypes from '../../../constants/iconTypes';
import Svgs from './svgs';

const Icon = ({ type, onClick, ...rest }) => {
  const IconSvg = Svgs[type];
  return (
    <IconSvg
      width={ICON_SIZE}
      height={ICON_SIZE}
      onClick={onClick}
      {...rest}
    />
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf(
    Object.values(IconTypes)
  ),
  onClick: PropTypes.func,
};

export default memo(Icon);
