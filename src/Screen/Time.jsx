import React from 'react';

const INTERVAL = 100;

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, INTERVAL);
    this.setState({
      interval,
    });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    const { date } = this.state;
    return (
      <alertTemplate>
        <title>{`Time updating in ${INTERVAL}ms`}</title>
        <description>{date.toJSON()}</description>
      </alertTemplate>
    );
  }
}
