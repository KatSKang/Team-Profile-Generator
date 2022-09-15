
// function generateHTML(data) {
//     var cardHTML = '';
//     for(let i = 0; i < teamData.length; i++)  {
//         if (team[i].getRole() === 'Manager'){
//             cardHTML += `
//                 <div class="card m-3" style="width: 18rem">
//                         <div class="card-header bg-primary text-white">
//                             <h3>${team[i].getName()}</h3>
//                             <span class="h5"><i class="bi bi-cup-hot-fill"></i> Manager</span>
//                         </div>
//                         <div class="card-body">
//                             <ul class ="list-group">
//                                 <li class="list-group-item">ID: ${team[i].getID()} </li>
//                                 <li class="list-group-item">Email: ${team[i].getEmail()} </li>
//                                 <li class="list-group-item">Office number: ${team[i].getOfficeNumber()}</li>
//                             </ul>
//                         </div>
//                     </div>`
//         } else if (team[i].getRole() === 'Engineer'){
//             cardHTML += `
//                 <div class="card m-3" style="width: 18rem">
//                         <div class="card-header bg-primary text-white">
//                             <h3>${team[i].getName()}</h3>
//                             <span class="h5"><i class="bi bi-wrench-adjustable-circle"></i> Engineer</span>
//                         </div>
//                         <div class="card-body">
//                             <ul class ="list-group">
//                                 <li class="list-group-item">ID: ${team[i].getID()}</li>
//                                 <li class="list-group-item">Email: ${team[i].getEmail()} </li>
//                                 <li class="list-group-item">GitHub: ${team[i].getGitHub()} </li>
//                             </ul>
//                         </div>
//                     </div>`
//         } else if (team[i].getRole() === 'Intern'){
//             cardHTML += `
//                 <div class="card m-3" style="width: 18rem">
//                         <div class="card-header bg-primary text-white">
//                             <h3>${team[i].getName()} </h3>
//                             <span class="h5"><i class="bi bi-wrench-adjustable-circle"></i> Engineer</span>
//                         </div>
//                         <div class="card-body">
//                             <ul class ="list-group">
//                                 <li class="list-group-item">ID: ${team[i].getID()} </li>
//                                 <li class="list-group-item">Email: ${team[i].getEmail()} </li>
//                                 <li class="list-group-item">School: ${team[i].getSchool()} </li>
//                             </ul>
//                         </div>
//                     </div>`
//         }
//     };

//    var indexHTML = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
//         <link rel="stylesheet" href="./style.css"">
//         <title>Team Members</title>
//     </head>
//     <body>
//         <div class="jumbotron jumbotron-fluid bg-danger text-white">
//             <div class="container">
//                 <h1 class="display-4 text-center  font-weight-bold">TEAM MEMBERS</h1>
//             </div>
//         </div>
//         <div class="container">
//             <div class="row justify-content-center" id="insert-cards">
//                ${cardHTML}
//         </div>
//     </body>
//     </html>
//     `
//     console.log(cardHTML);
//     return indexHTML;
// };


// module.exports = generateHTML;