import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";

import { fetchSmurfs } from '../store/actions'
import SmurfForm from './SmurfForm';

const App = ({ smurfList, isFetching, fetchSmurfs }) => {

  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      {isFetching && <h3>Fetching data...</h3>}
      <SmurfForm />
      <div>
        {smurfList.length ? (
          <>
            {smurfList.map(smurf => (
              <div key={smurf.name}>
                <h2>{smurf.name}</h2>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </div>
            ))}
          </>
        ) : (
          <p>Smurf data not available at this time</p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('App.js mSTP is running...', {state});

  return {
    smurfList: state.smurfList,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
