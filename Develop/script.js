// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
function collectEmployees() {
  const employees = [] 
  while (confirm("Do you want to add another employee?")){
    let firstName= prompt ("Please enter employee's first name");
    let lastName = prompt ("Please enter eployee's last name");
    let salary = prompt ("Please enter employee's salary");
  }
  return employees;
  }
console.log(collectEmployees)
  // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const numberofEmployees = employees.length;
  if (numberofEmployees === 0){
    console.log("There are no employees to process");
    return;
    let totalSalary = 0;
    } 
    for (const employee of employees)
      {
        totalSalary += employee.salary;
    }
    const averageSalary = totalSalary / numberofEmployees;
    console.log(averageSalary)
  }
  // TODO: Calculate and display the average salary

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const numberOfEmployees = employees.length;

  if (numberOfEmployees === 0) {
    console.log("There are no employees to select.");
    return; 
  }

  // Generate a random index within the employee list range
  const randomIndex = Math.floor(Math.random() * numberOfEmployees);

  

  console.log(`The randomly selected employee is ${fullName}.`);
}


  
  // TODO: Select and display a random employee


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {

  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
