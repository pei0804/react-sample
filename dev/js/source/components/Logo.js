import React from 'react'
// ECMAScript

// var React = require('react');

// var Logo = React.createClass({
//   render: function () {
//     return <div className="Logo" />
//   }
// });

class Logo extends React.Component {
  someMethod() {
  } // カンマは不要

  render() {
    return <div className="Logo" />
  }
}

// module.exports = Logo;
export default Logo
