const TaskList = require('../lib/TaskList');
const TaskListItem = require('../lib/TaskListItem');

describe('TaskList', () => {
	it('should render html <ul></ul> with task list items', () => {
		const taskListItemsArr = [
			new TaskListItem(['task one']),
			new TaskListItem(['task two']),
			new TaskListItem(['task three'], true),
		];
		const expectedHtml = `<ul class="tasks"><li class="tasks-item">task one</li><li class="tasks-item">task two</li><li class="tasks-item tasks-item-priority">task three</li></ul>`;
		const taskList = new TaskList(taskListItemsArr);
		const generatedHtml = taskList.render();
		expect(generatedHtml).toEqual(expectedHtml);
	});
});