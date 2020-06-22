import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import Register from './pages/Register'
import thunk from 'redux-thunk'
import MainReducer from './reducers'

export const store = createStore(MainReducer, composeWithDevTools(
  applyMiddleware(
    thunk
  )
))

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})

const App = props => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Register {...props} />
      </SafeAreaView>
    </Provider>
  )
}



export default App
