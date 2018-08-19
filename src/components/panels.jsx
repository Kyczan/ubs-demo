import React, { Component } from 'react';
import Panel from './panel';

class Panels extends Component {
  state = {
    panels: [
      { pair: 'USD CHF', buy: 0.99143, sell: 0.99043 },
      { pair: 'GBP USD', buy: 1.28495, sell: 1.2836 },
      { pair: 'GBP CHF', buy: 1.27378, sell: 1.27147 },
      { pair: 'EUR SEK', buy: 9.632, sell: 9.6055 },
      { pair: 'USD JPY', buy: 110.467, sell: 110.417 },
      { pair: 'EUR JPY', buy: 120.589, sell: 120.491 }
    ]
  };
  render() {
    return (
      <div className="container">
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
