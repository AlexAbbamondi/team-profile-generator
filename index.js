//Required modules to be imported
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

//Required js file to be imported
const generateHTML = require("./src/generateHTML");

//Required Class constructors to be imported
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Empty array to store all of the users input about the manager, engineer(s), and intern(s)
const teamMembersArr = [];

//First the user is prompted with the manager questions
const managerQuestions = () => {
  return inquirer
    .prompt([
      getNamePrompt("manager"),
      getIdPrompt("manager"),
      getEmailPrompt("manager"),
      {
        type: "input",
        name: "officeNum",
        message: "What is the manager's office number?",
        ...validateNumbers()
      }
    ])
    //Manager info is pushed and stored in the teamMemebersArr array
    .then((managerInfo) => {
      const { name, id, email, officeNum } = managerInfo;
      const manager = new Manager(name, id, email, officeNum);
      teamMembersArr.push(manager);
    });
};

//Next the User selects whether they want to choose an engineer, intern, of finish building the team
const employeeQuestion = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        choices: ["Engineer", "Intern", "Finish building My Team"],
      }
    ])
    //based on the user's selection, either the engineer or intern questions will be asked, or the file will be generated
    .then((employeeRole) => {
      const { role } = employeeRole;
      switch (role) {
        case "Engineer":
            return engineerQuestions();
        case "Intern":
            return internQuestions();
        case "Finish building My Team":
            return writeToFile("index.html", generateHTML(teamMembersArr));
          default:
              break;
      }
    });
};

//Engineer Questions qill appear if they are selected
const engineerQuestions = () => {
  return inquirer
    .prompt([
      getNamePrompt("engineer"),
      getIdPrompt("engineer"),
      getEmailPrompt("engineer"),
      {
        type: "input",
        name: "github",
        message: "What is the engineer's Github username?",
        validate: input => {
          if(input === "") {
            return "Please enter a Github username."
          } else {
            return true;
          }
        }
      },
    ])
    //Engineer info is pushed and stored in the teamMembersArr array
    .then((engineerInfo) => {
      const { name, id, email, github } = engineerInfo;
      const engineer = new Engineer(name, id, email, github);
      teamMembersArr.push(engineer);
      console.log(teamMembersArr);
      employeeQuestion();
    });
};

//Intern Questions qill appear if they are selected
const internQuestions = () => {
  return inquirer
    .prompt([
        getNamePrompt("intern"),
        getIdPrompt("intern"),
        getEmailPrompt("intern"),
      {
        type: "input",
        name: "school",
        message: "What school does the intern go to?",
        ...validateStrings()
      },
    ])
    //Intern info is pushed and stored in the teamMembersArr array
    .then((internInfo) => {
      const { name, id, email, school } = internInfo;
      const intern = new Intern(name, id, email, school);
      teamMembersArr.push(intern);
      console.log(teamMembersArr);
      employeeQuestion();
    });
};

//Function to pass to the inquirer prompt to get the name for that specific role
const getNamePrompt = (title) => {
  return {
      type: "input",
      name: "name",
      message: "What is the " + title +  "'s name?",
      ...validateStrings()
    }
}

//Function to pass to the inquirer prompt to get the id for that specific role
const getIdPrompt = (title) => {
    return {
        type: "input",
        name: "id",
        message: "What is the " + title + "'s employee id number?",
        ...validateNumbers()
      }
}

//Function to pass to the inquirer prompt to get the email for that specific role
const getEmailPrompt = (title) => {
    return {
        type: "input",
        name: "email",
        message: "What is " + title + "'s email address?",
        ...validateStrings()
    }
}

//Function to validate that the input is getting a number and that it is not blank --- also clears the incorrect answers if applicable
const validateNumbers = () => ({
  validate: input => {
      if (input === "" || input <= 0 || isNaN(input)) {
          return 'Please provide a valid number greater then 0';
      } else {
        return true;
      }
  },
  filter: input => {
      // clear the invalid input
      return isNaN(input) || Number(input) <= 0 ? '' : input;
  },
})

//Function to validate that the input is getting a string and that it is not blank --- also clears the incorrect answers if applicable
const validateStrings = () => ({
  validate: input => {
    if(input === "" || !isNaN(input)) {
      return 'Please enter a valid word';
    } else {
      return true;
    }
  },
  filter: input => {
      return input === "" || !isNaN(input) ? "" : input;
  }
})

//Function to take the file name and data and write it out to a file with a console log for an err or success
const writeToFile = (fileName, data) => {
  fs.writeFile(path.join("./dist", fileName), data, (err) => {
    console.log(process.cwd());
    err ? console.log(err) : console.log("Created file successfully!");
  });
};

//Initializes the program with the manager questioins first then the question to select what type of employee to provide infor for next
const init = () => {
  managerQuestions()
    .then(employeeQuestion)
    .catch((err) => {
      console.log(err);
    });
};

init();
