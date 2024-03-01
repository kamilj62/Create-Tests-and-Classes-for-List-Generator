const Component = require("./component");

class TaskListItem extends Component{
    constructor(children, priority) {
        super(children)
        this.priority = priority
    }
    render() {
        return `<li class="${this.priority ?"tasks-item-priority" : "tasks-item"}">${this.renderInnerHTML()}</li>`
    }
}

module.exports = TaskListItem