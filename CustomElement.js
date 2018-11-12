import React, { Component } from 'react';
import HeaderBar from './src/header-bar';


class CustomElement extends Component {
  render() {
    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) {
      baseClasses += ' alwaysbreak';
    }

    const Element = this.props.data.component;

    return (
      <div className={baseClasses}>
        {!this.props.mutable &&
        <HeaderBar
          parent={this.props.parent}
          editModeOn={this.props.editModeOn}
          data={this.props.data}
          onDestroy={this.props._onDestroy}
          onEdit={this.props.onEdit}
          static={this.props.data.static}
          required={this.props.data.required}
        />
        }
        <br />
        <hr />
        <Element data={this.props.data} {...this.props.data.props} />
      </div>
    );
  }
}

CustomElement.propTypes = {};

export default CustomElement;
