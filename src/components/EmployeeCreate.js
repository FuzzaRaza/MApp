import React, { Component } from "react";
import { Picker } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { Card, CardSection, Input, CustomButton } from "./common";
import { Picker } from "react-native";

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Name"
                        placeholder="Zahid" 
                        onChangeText = {text => this.props.employeeUpdate({prop: "name", value: text})
                        }/>
                </CardSection>
                <CardSection>
                    <Input label="Phone"
                        placeholder="+55-555-5555555" 
                        onChangeText = { text => this.props.employeeUpdate({ prop: "phone", value: text }) 
                        }/>
                </CardSection>
                <CardSection />
                <CardSection>
                    <CustomButton>Add Employee</CustomButton>
                </CardSection>
            </Card>
            <Picker>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
        );
    }
}
const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);