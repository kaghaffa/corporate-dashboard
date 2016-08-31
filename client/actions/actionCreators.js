// Original data
import customers from '../data/customers';
import issues from '../data/issues';
import locations from '../data/locations';

// CSV data
import Utils from '../utils/utils';


// Define Action Creators
export function updateCustomers(useCsv) {
  return {
    type: 'UPDATE_CUSTOMERS',
    customers: useCsv ? customers : []
  };
}

// Define Action Creators
export function updateIssues(useCsv) {
  return {
    type: 'UPDATE_ISSUES',
    issues: useCsv ? issues : [{"open_date":"3/25/2016","open_time":"12:10 PM","customer_name":"William Hansen","email":"abell0@artisteer.com","status":"open","closed_date":null,"closed_time":null,"employee_name":"Alan Bell"}]
  };
}

export function updateLocations(useCsv) {
  return {
    type: 'UPDATE_LOCATIONS',
    locations: useCsv ? locations : []
  };
}