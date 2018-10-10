/* @flow */

import classNames from "classnames";
import React from "react";

// class Button extends Component {
//   render() {
//   }
// }
// ステートを持たないコンポーネントなら、以下のように書ける

type Props = {
  href: ?string,
  // ?は空でもいいよって意味
  className: ?string,
};

const Button = (props: Props) =>
  props.href ? (
    <a {...props} className={classNames("Button", props.className)} />
  ) : (
    <button {...props} className={classNames("Button", props.className)} />
  );

// Flowを使えば、実行時の型チェックが不要になり、処理速度が若干向上する
// Button.propTypes = {
//   href: PropTypes.string
// };

export default Button;
