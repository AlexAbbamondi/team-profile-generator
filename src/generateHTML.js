//Classes to require
const ManagerView = require("./managerView");
const EngineerView = require("./engineerView");
const InternView = require("./internView");

//Creates a new instance of the ManagerView and returns the output of the draw function
const managerCard = (manager) => {
    const managerView = new ManagerView(manager);
    return managerView.draw();
}; 

//Creates a new instance of the EngineerView and returns the output of the draw function
const engineerCard = (engineer) => {
    const engineerView = new EngineerView(engineer);
    return engineerView.draw();
};

//Creates a new instance of the InternView and returns the output of the draw function
const internCard = (intern) => {
    const internView = new InternView(intern);
    return internView.draw();
};

//Loops through the teamMembersArr array and depending on their role adds them to the variable card ---  cards get returned within the the return statement which results in the finally html layout
const generateHTML = teamMembersArr => {
    let cards = "";
    for (let i = 0; i < teamMembersArr.length; i++) {
        switch (teamMembersArr[i].getRole()) {
            case "Manager":
                cards += managerCard(teamMembersArr[i]);
                break;
            case "Engineer":
                cards += engineerCard(teamMembersArr[i]);
                break;
            case "Intern":
                cards += internCard(teamMembersArr[i]);
                break;
            default:
                break;
        }
    }

    return `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="stylesheet" href="styles.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="bg-danger text-white text-center py-5">
            <h1>My Team</h1>
        </header>

        <div class="container mt-5">
            <div class="row h-50">
                ${cards}
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
    
    `
}


module.exports = generateHTML;
