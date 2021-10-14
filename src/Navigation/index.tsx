import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppDrawerNavigator from './AppDrawerNavigator';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Store/Sagas/root-saga';
import reducer from '../Store/Reducers';
import {applyMiddleware, createStore} from 'redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppDrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);

export default App;
