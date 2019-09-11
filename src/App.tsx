import React from 'react';

interface IProps {
  fav: string;
}

const Food: React.FunctionComponent<IProps> = ({fav}) => {
  return <h1>I like {fav}</h1>;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="kimchi" />
    </div>
  );
};

export default App;
