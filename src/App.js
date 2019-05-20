import React, { Component } from "react";
import {View,Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {

    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyBXUmj8BeR9_0SWtn7A3dsLlW3Alqrdwi0",
            authDomain: "furqan-1ad72.firebaseapp.com",
            databaseURL: "https://furqan-1ad72.firebaseio.com",
            projectId: "furqan-1ad72",
            storageBucket: "furqan-1ad72.appspot.com",
            messagingSenderId: "165713305243",
            appId: "1:165713305243:web:f576f38e7834b450"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    render(){
        const store = createStore(reducers, {},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
            <Router />
            <LoginForm />
            {/* <View>
            <Text>Bismillah Redux Manager
            Project</Text>
            </View> */}
            </Provider>
            );
    }
}

export default App;