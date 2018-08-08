import React from 'react';
import Alert from './Alert';
import Loading from './Loading';

export default class Swap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didLoaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      didLoaded: true,
    }), 5000);
  }

  componentDidCatch(error, info) {
    console.warn(error, info);
  }

  render() {
    const { didLoaded } = this.state;
    return didLoaded ? <Alert title="TA DA!!!" /> : <Loading />;
  }
}
