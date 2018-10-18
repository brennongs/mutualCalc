import React from 'react';
import './calculator.css';

const initialState = {
  total: 0,
  lastSelected: 0
};

export class Calculator extends React.Component {
  state = initialState

  add = () => {
    const { 
      total,
      lastSelected
    } = this.state;
    const newTotal = total + lastSelected;

    if (newTotal === 6) {
      window.location = 'https://sites.google.com/site/subgfyfs/tetris'
    }

    this.setState({ total: newTotal });
  }

  handleSelect = (i) => {
    this.setState({ lastSelected: i })
  }

  render = () => {
    console.log(this.state)
    return (
      <div className='Calculator'>
        <section className="totalScreen">
          {this.state.total}
        </section>
        <button onClick={() => this.handleSelect(1)}>1</button>
        <button onClick={() => this.handleSelect(2)}>2</button>
        <button onClick={() => this.add()}>add</button>
      </div>
    )
  }
}