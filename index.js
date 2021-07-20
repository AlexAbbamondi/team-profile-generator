const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const generateHTML = require("./src/generateHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembersArr = [];

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
    .then((managerInfo) => {
      const { name, id, email, officeNum } = managerInfo;
      const manager = new Manager(name, id, email, officeNum);
      teamMembersArr.push(manager);
    });
};

const employeeQuestion = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        choices: ["Engineer", "Intern", "Finish building My Team"],
      }
    ])
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
    .then((engineerInfo) => {
      const { name, id, email, github } = engineerInfo;
      const engineer = new Engineer(name, id, email, github);
      teamMembersArr.push(engineer);
      console.log(teamMembersArr);
      employeeQuestion();
    });
};

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
    .then((internInfo) => {
      const { name, id, email, school } = internInfo;
      const intern = new Intern(name, id, email, school);
      teamMembersArr.push(intern);
      console.log(teamMembersArr);
      employeeQuestion();
    });
};

const getNamePrompt = (title) => {
  return {
      type: "input",
      name: "name",
      message: "What is the " + title +  "'s name?",
      ...validateStrings()
    }
}

const getIdPrompt = (title) => {
    return {
        type: "input",
        name: "id",
        message: "What is the " + title + "'s employee id number?",
        ...validateNumbers()
      }
}

const getEmailPrompt = (title) => {
    return {
        type: "input",
        name: "email",
        message: "What is " + title + "'s email address?",
        ...validateStrings()
    }
}

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

const writeToFile = (fileName, data) => {
  fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
    err ? console.log(err) : console.log("Created file successfully!");
  });
};

const init = () => {
  managerQuestions()
    .then(employeeQuestion)
    .catch((err) => {
      console.log(err);
    });
};

init();
