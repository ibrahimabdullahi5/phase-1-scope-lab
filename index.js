
var customerName = 'bob';
function getCustomerName() {
    return customerName;
}

console.log(getCustomerName()); 

var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob';
}
var bestCustomer;
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some initial value';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another value'; r
}