const inquirer = require("inquirer");
const mysql = require("mysql");
var connection = require("./connection");

//const cTable = require("console.table");


// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3000,
//     user: "root",
//     password: "james2923",
//     database: "companyDB"
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
//     mainAsk();
// });

function mainAsk(){
    inquirer.prompt({
        name: "task",
        type: "list",
        message: "What would you like to do?",
        choices: ["Add Departments", "Add Roles", "Add Employees", "View Departments", "View Roles", "View Employees", "Update Employee Roles"]
    }).then(function(answer){
        switch (answer.task) {
            case "Add Departments":
                addDepartments();
                break;
            
             case "View Departments":
                viewDepartments();
                break;
        
            default:
                break;
            
            case "Add Roles":
                addRoles();
                break;
            
            case "View Roles":
                viewRoles();
                break;

        }
    })
}

function addDepartments(){

    inquirer.prompt({
        name: "name",
        type: "input",
        message: "Name of the department?"
    }).then(function(answer){
        console.log(answer)
        connection.query("INSERT INTO departments SET ?",
        answer,
        function(err, res){
            if (err) throw err;
            console.log(res);
            mainAsk();
        })
    })

}

function viewDepartments(){
    connection.query("SELECT * FROM departments",
    function(err, res){
        if (err) throw err;
        console.table(res);
        mainAsk();
    })
}


function addRoles (){
    connection.query("SELECT * FROM roles", function(err,res){
        if(err) throw err;
        console.table(res);
        mainAsk();

    })
}





// function addEmployee() {
//     inquirer
//         .prompt([
//             {
//                 name: "first",
//                 type: "input",
//                 message: "What is your employees first name?"
//             },
//             {
//                 name: "last",
//                 type: "input",
//                 message: "What is your employees last name?"
//             },
//             {
//                 name: "title",
//                 type: "list",
//                 message: "What is your employees role?",
//                 choices:
//                     [
//                         "Fundraising Manager",
//                         "Fundraising Assistant",
//                         "Development Manager",
//                         "Associate Development Manager",
//                         "Lead Advisor",
//                         "Associate Advisor",
//                         "Marketing Manager",
//                         "Associate Marketing Manager"
//                     ]
//             },
//             {
//                 name: "salary",
//                 type: "input",
//                 message: "What is your employees salary?"
//             },
//             {
//                 name: "dept",
//                 type: "list",
//                 message: "What is your employees department?",
//                 choices: ["Fundraising", "Development", "Advising", "Marketing"]
//             },
//             {
//                 name: "manager",
//                 type: "list",
//                 message: "Who is your employees manager?",
//                 choices: ["Kathy", "Erin", "Paul", "Aubrey", "None"]
//             }
//         ])
//         .then(function (answer) {

//             var dept_id;
//             if (answer.dept === "Fundraising") {
//                 dept_id = 1;
//             }
//             else if (answer.dept === "Development") {
//                 dept_id = 2;
//             }
//             else if (answer.dept === "Advising") {
//                 dept_id = 3;
//             }
//             else if (answer.dept === "Marketing") {
//                 dept_id = 4;
//             }

//             connection.query("INSERT INTO roles SET ?",
//                 {
//                     title: answer.title,
//                     salary: answer.salary,
//                     department_id: dept_id
//                 },
//                 function (err, result) {
//                     if (err) throw err;
//                 }
//             );

            // var manager_id;
            // if (answer.manager === "Kathy") {
            //     manager_id = 1;
            // }
            // else if (answer.manager === "Erin") {
            //     manager_id = 2;
            // }
            // else if (answer.manager === "Paul") {
            //     manager_id = 3;
            // }
            // else if (answer.manager === "Aubrey") {
            //     manager_id = 4;
            // }
            // else if (answer.manager === "None") {
            //     manager_id = null;
            // }