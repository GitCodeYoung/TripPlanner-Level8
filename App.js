import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import PlacesNavigator from './navigation/PlacesNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import placeReducer from './store/places-reducer';
import {init} from './helpers/db'; 

init().then(()=>{
  console.log('Initialized Database')
})
.catch(err=>{
  console.log('Initializing db failed');
  console.log(err);
})

const rootReducer = combineReducers({
  places: placeReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
