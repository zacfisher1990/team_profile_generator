
// //html for manager
// const generateManager = function (manager) {
//     return `
//     <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
//     <div class="card-header">${manager.name}</div>
//     <div class="card-body">
//       <h5 class="card-title">${manager.role}</h5>
//       <p class="card-text">
//       <ul>
//       <li>${manager.id}</li>
//       <li>${manager.email}</li>
//       <li>${manager.officeNumber}</li>
//       </ul>
//       </p>
//     </div>
//   </div>`
// }

// //html for engineer

// const generateEngineer = function (engineer) {
//     return `
//     <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
//     <div class="card-header">${engineer.name}</div>
//     <div class="card-body">
//       <h5 class="card-title">${engineer.role}</h5>
//       <p class="card-text">
//       <ul>
//       <li>${engineer.id}</li>
//       <li>${engineer.email}</li>
//       <li>${engineer.github}</li>
//       </ul>
//       </p>
//     </div>
//   </div>`
// }

// //html for intern

// const generateIntern = function (intern) {
//     return `
//     <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
//     <div class="card-header">${intern.name}</div>
//     <div class="card-body">
//       <h5 class="card-title">${intern.role}</h5>
//       <p class="card-text">
//       <ul>
//       <li>${intern.id}</li>
//       <li>${intern.email}</li>
//       <li>${intern.school}</li>
//       </ul>
//       </p>
//     </div>
//   </div>`
// }



//function to generate html page

function createTeam(manager) {
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
    <hearder>
        <h1>My Team</h1>
    </hearder>
        ${manager.name}
    
</body>
</html>`
}

module.exports = createTeam;
