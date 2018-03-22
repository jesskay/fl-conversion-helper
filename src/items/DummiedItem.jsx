import React, { Component } from 'react';

import ToolTip from '../tooltips/ToolTip';
import { IMAGE_ROOT } from './Item';

export default class DummiedItem extends Component {

  constructor(props) {
    super(props);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { showToolTip: false };
  }

  handleMouseLeave() {
    this.setState({ showToolTip: false });
  }

  handleMouseMove() {
    this.setState({ showToolTip: true });
  }

  render() {
    const { data } = this.props;
    const { showToolTip } = this.state;

    return (
      <li className="item">
        <div className="icon icon--inventory icon--flch-dummied">
          <img
            alt={data.Name}
            onMouseLeave={this.handleMouseLeave}
            onMouseMove={this.handleMouseMove}
            ref={(element) => this.element = element}
            src={`${IMAGE_ROOT}/${data.Image}.png`}
          />
          <span className="js-item-value icon__value">{data.Level}</span>
        </div>
        {showToolTip && (<ToolTip data={data} parent={this.element} active={showToolTip} />)}
      </li>
    );
  }
}
