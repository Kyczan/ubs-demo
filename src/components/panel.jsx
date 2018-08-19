import React, { Component } from 'react';
import './panel.css';

class Panel extends Component {
  state = this.props.panel;
  render() {
    return (
      <div className="col-3">
        <div className="card panel">
          <div className="panel-title">{this.state.pair}</div>
          <div className="row no-gutters panel-data">
            <div className="panel-badge-wrapper">
              <div className="panel-badge-outline panel-badge-outline-sell">
                <div className="panel-badge panel-badge-sell">
                  <div className="panel-badge-title">
                    Sell {this.getFirstCurr()}
                  </div>
                  {this.formatValue(this.state.sell)}
                </div>
              </div>
            </div>
            <div className="panel-indicator">^</div>
            <div className="panel-badge-wrapper">
              <div className="panel-badge-outline panel-badge-outline-buy">
                <div className="panel-badge panel-badge-buy">
                  <div className="panel-badge-title">
                    Buy {this.getFirstCurr()}
                  </div>
                  {this.formatValue(this.state.buy)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getFirstCurr() {
    const { pair } = this.state;
    return pair.split(' ')[0];
  }

  formatValue(val) {
    val = val.toString().padEnd(7, '0');
    const start = val.substr(0, 4);
    const mid = val.substr(4, 2);
    const end = val.substr(6, 1);
    return (
      <div>
        <span>{start}</span>
        <span className="panel-badge-value-mid">{mid}</span>
        <span className="panel-badge-value-end">{end}</span>
      </div>
    );
  }
}

export default Panel;
