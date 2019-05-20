import React, { Component } from "react";
import { Card, CardSection, Input, CustomButton } from "./common";
import { connect } from "react-redux";
import { emailChanged, passwordChanged } from "../actions";
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            onChangeText={this.onEmailChange.bind(emailChanged)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <CustomButton>Sign In</CustomButton>
        </CardSection>
      </Card>
      
    );
  }
}

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged }
)(LoginForm);
//export default connect(  null, emailChanged)(LoginForm);
