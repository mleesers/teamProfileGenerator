const managerCard = (manager) => {
  return `
  <div class="card col" style="width: 18rem">
  <div class="card-header">
  <h5 class="card-title">Manager</h5>
  </div>
  <div class="card-body">   
  <ul>
  <li>Name: ${manager.name}</li>
  <li>Id: ${manager.Id}</li>
  <li>email: ${manager.email}</li>
  <li>office number: ${manager.officeNumber}</li>
  </ul>
</div>   
  </div>
  
    
  
  `;
};
const engineerCard = (engineer) => {
  return `
<div class="card col" style="width: 18rem">
<div class="card-header">
<h5 class="card-title">Engineer</h5>
</div>
<div class="card-body">   
<ul>
<li>Name: ${engineer.name}</li>
<li>Id: ${engineer.Id}</li>
<li>email: ${engineer.email}</li>
<li>github: ${engineer.gitHub}</li>
</ul>
</div>   
</div>

  

`;
};
const internCard = (intern) => {
  return `
<div class="card col" style="width: 18rem">
<div class="card-header">
<h5 class="card-title">Intern</h5>
</div>
<div class="card-body">   
<ul>
<li>Name: ${intern.name}</li>
<li>Id: ${intern.Id}</li>
<li>email: ${intern.email}</li>
<li>office number: ${intern.school}</li>
</ul>
</div>   
</div>

  

`;
};
// const internCard = (intern) => {
//     return `
//       <div class="card col" style="width: 18rem">
//       <div class="card-header">
//         <h5 class="card-title">Intern</h5>
//       <div class="card-body">   
//         <ul>
//         <li>Intern Name: ${intern.name}</li>
//         <li>Intern Id: ${intern.Id}</li>
//         <li>Intern email: ${intern.email}</li>
//         <li>Intern school: ${intern.school}</li>
//         </ul>
//       </div>   

//       </div>
//       `;
// };
// const engineerCard = (engineer) => {
//     return `
//       <div class="card col" style="width: 18rem">
//       <div class="card-header">
//         <h5 class="card-title">Engineer</h5>
//       <div class="card-body">   
//         <ul>
//         <li>Engineer Name: ${engineer.name}</li>
//         <li>Engineer Id: ${engineer.Id}</li>
//         <li>Engineer email: ${engineer.email}</li>
//         <li>Engineer git hub: ${engineer.gitHub}</li>
//         </ul>
//       </div>   

//       </div>
//       `;
// };

const generateHTML = (teamMembers) => {
  const cardArray = [];

  teamMembers.forEach((item) => {
      console.log(item.getRole());
      if (item.getRole() === "Manager") {
          cardArray.push(managerCard(item));
      } else if (item.getRole() === "Engineer") {
          cardArray.push(engineerCard(item));
      } else if (item.getRole() === "Intern") {
          cardArray.push(internCard(item));
      }
  });

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="./src/style.css" />
  <title>Document</title>
</head>
<body>
  <header>My Team</header>
  <div class="row">
  
  ${cardArray.join()}
  
  </div>
</body>  
  `;
};

module.exports = generateHTML;