import classNames from 'classnames';
import React, {PropTypes} from 'react';

// class Button extends Component {
//   render() {
//   }
// }
// ステートを持たないコンポーネントなら、以下のように書ける
const Button = props =>
  props.href
    ? <a {...props} className={classNames('Button', props.className)}/>
    : <button {...props} className={classNames('Button', props.className)}/>


Button.propTypes = {
  href: PropTypes.string,
};

export default Button