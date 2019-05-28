import React, { Component } from "react";
// import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk"; //Wiring up the middle ware :)

import reducers from "./reducers";
// import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDMi-RQYY_NQmnd2XQzGoLhdoi0RWlx3bI",
        authDomain: "reduxappprj.firebaseapp.com",
        databaseURL: "https://reduxappprj.firebaseio.com",
        projectId: "reduxappprj",
        storageBucket: "reduxappprj.appspot.com",
        messagingSenderId: "707975222858",
        appId: "1:707975222858:web:8bf09114bb209846"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
        {/* <LoginForm /> */}
        {/* <View>
          <Text>Bismillah Redux Manager Project</Text>
        </View> */}
      </Provider>
    );
  }
}

export default App;
