import React, { Component } from 'react';
import Panel from './panel';

class Panels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panels: [
        { pair: 'USD CHF', buy: 0.99143, sell: 0.99043, isUp: 'const' },
        { pair: 'GBP USD', buy: 1.28495, sell: 1.2836, isUp: 'const' },
        { pair: 'GBP CHF', buy: 1.27378, sell: 1.27147, isUp: 'const' },
        { pair: 'EUR SEK', buy: 9.632, sell: 9.6055, isUp: 'const' },
        { pair: 'USD JPY', buy: 110.467, sell: 110.417, isUp: 'const' },
        { pair: 'EUR JPY', buy: 120.589, sell: 120.491, isUp: 'const' }
      ]
    };
  }
  startRage = () => {
    setInterval(() => {
      // intentionally mutating state
      const panels = this.state.panels;
      panels.forEach(el => {
        const max = el.buy * 0.1;
        const rnd = Math.random() * (2 * max) - max;
        el.buy = el.buy + rnd;
        el.isUp = rnd > 0 ? true : rnd < 0 ? false : 'const';
      });
      this.forceUpdate();
    }, 1000);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn" onClick={this.startRage}>
              Start Rage
            </button>
          </div>
        </div>
        <div className="row no-gutters">
          {this.state.panels.map(panel => (
            <Panel key={panel.pair} panel={panel} />
          ))}
        </div>
      </div>
    );
  }
}

export default Panels;
