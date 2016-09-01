// Original data
import customers from '../data/customers';
import issues from '../data/issues';
import locations from '../data/locations';

// CSV data
import Utils from '../utils/utils';

var customerCsvData = [];
fetch('customers.csv').then(function(response) {
  if (response.status >= 200 && response.status < 300) {
    response.text().then(function(res) {
      customerCsvData = Utils.parseCsv(res);
    })
  }
});

var locationsCsvData = [];
fetch('locations.csv').then(function(response) {
  if (response.status >= 200 && response.status < 300) {
    response.text().then(function(res) {
      locationsCsvData = Utils.parseCsv(res);
    })
  }
});

var issuesCsvData = [];
fetch('issues.csv').then(function(response) {
  if (response.status >= 200 && response.status < 300) {
    response.text().then(function(res) {
      issuesCsvData = Utils.parseCsv(res);
    })
  }
});

// Define Action Creators
export function updateCustomers(useCsv) {
  return {
    type: 'UPDATE_CUSTOMERS',
    customers: useCsv && customerCsvData ? customerCsvData : customers
  };
}

// Define Action Creators
export function updateIssues(useCsv) {
  return {
    type: 'UPDATE_ISSUES',
    issues: useCsv && issuesCsvData ? issuesCsvData : issues
  };
}

export function updateLocations(useCsv) {
  return {
    type: 'UPDATE_LOCATIONS',
    locations: useCsv && locationsCsvData ? locationsCsvData : locations
  };
}