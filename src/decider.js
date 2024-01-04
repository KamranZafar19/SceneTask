import React from 'react';
import {AppContext} from './context';
import AppContainer from './navigation';
import * as Util from './utilities';
import {StatusBar} from 'react-native';
import navigationRef from './utilities/navigation';
class Decider extends React.Component {

  render() {
    return (
      <AppContext.Provider>
        <AppContainer
          ref={navigationRef}
        />
      </AppContext.Provider>
    );
  }
}

export default Decider;
