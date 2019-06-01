import IconTypes from '../../../constants/iconTypes';
import { ReactComponent as EditSvg } from '../../../assets/edit.svg';
import { ReactComponent as SaveSvg } from '../../../assets/save.svg';
import { ReactComponent as DeleteSvg } from '../../../assets/delete.svg';
import { ReactComponent as AddSvg } from '../../../assets/add.svg';

const Svgs = {
  [IconTypes.EDIT]: EditSvg,
  [IconTypes.SAVE]: SaveSvg,
  [IconTypes.DELETE]: DeleteSvg,
  [IconTypes.ADD]: AddSvg
};

export default Svgs;
