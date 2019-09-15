import React from "react";

interface IState {
  isLoading: boolean;
  movies: object[];
}

class App extends React.Component<{}, IState> {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount () {
    setTimeout(() => {
    this.setState({ isLoading: false});
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading..." : "We are ready" }</div>
    );
  }
}

export default App;
