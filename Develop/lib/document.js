// TODO: Import your Header, TaskList, and TaskListItem

const TaskList = require("./TaskList");
const TaskListItem = require("./TaskListItem");
const Header = require("./header");

function createDocument(title, tasks = []) {
	// TODO: Create a new Header
  const header = new Header().render();
	// TODO: Create new TaskListItems from the provided tasks
  const tasksArr = tasks.map(task => {
    return new TaskListItem([task.text], task.proirity)
  }) 
  

	// TODO: Add TaskListItems to a new TaskList
const taskList = new TaskList(tasksArr).render()
	// TODO: Modify the template below to include your title, Header, and TaskList
	return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>YOUR TITLE HERE</title>
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <div class="card">
        ${header}
        ${taskList}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
