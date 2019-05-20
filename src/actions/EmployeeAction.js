import { EMPLOYEE_UPDATE } from "./types";
import { employeeUpdate, employeeCreate } from "../actions";
export const employeUpdate = ({ prop, value })=> {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};
export default connect(mapStateToProps,{ employeeUpdate, employeeCreate })(EmployeeCreate);