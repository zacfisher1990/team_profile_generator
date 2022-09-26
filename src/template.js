
//html for manager
  const generateManager = manager => {
    return `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">${manager.getName()}</div>
    <div class="card-body">
      <h5 class="card-title">${manager.getRole()}</h5>
      <p class="card-text">
      
      <p><strong>Employee ID: </strong>${manager.getId()}</p>
      <p><strong>Email: </strong>${manager.getEmail()}</p>
      <p><strong>Office #: </strong>${manager.getOfficeNumber()}</p>
      
      </p>
    </div>
  </div>`
  }

//html for engineer

const generateEngineer = engineer => {
    return `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">${engineer.getName()}</div>
    <div class="card-body">
      <h5 class="card-title">${engineer.getRole()}</h5>
      <p class="card-text">
      
      <p><strong>Employee ID: </strong>${engineer.getId()}</p>
      <p><strong>Email: </strong>${engineer.getEmail()}</p>
      <p><strong>GitHub: </strong>${engineer.getGithub()}</p>
      
      </p>
    </div>
  </div>`
}

//html for intern

const generateIntern = intern => {
    return `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">${intern.getName()}</div>
    <div class="card-body">
      <h5 class="card-title">${intern.getRole()}</h5>
      <p class="card-text">
      
      <p><strong>Employee ID: </strong>${intern.getId()}</p>
      <p><strong>Email: </strong>${intern.getEmail()}</p>
      <p><strong>School: </strong>${intern.getSchool()}</p>
      
      </p>
    </div>
  </div>`
}

//function to put cards together

const employees = employeesArr => {
  let employeeHtml = ''

  for ( i = 0; i < employeesArr.length; i++ ) {
    if (employeesArr[i].getRole() === "Manager"){
      employeeHtml = employeeHtml + generateManager(employeesArr[i])
    }
    if (employeesArr[i].getRole() === "Engineer"){
      employeeHtml = employeeHtml + generateEngineer(employeesArr[i])
    }
    if (employeesArr[i].getRole() === "Intern"){
      employeeHtml = employeeHtml + generateIntern(employeesArr[i])
    }
  } return employeeHtml
}

//function to generate html page

function createTeam(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    

</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
        ${employees(data)}
    
    
</body>
</html>`
}

module.exports = createTeam;
