var tasks = [{
        or: 0,
        title: "Task 1",
        description: "Prepare responsive stylesheet.",
        more: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        done: false
    },
    {
        or: 1,
        title: "Task 2",
        description: "Add friendly urls.",
        more: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
        done: false
    },
    {
        or: 2,
        title: "Task 3",
        description: "Make new react component.",
        more: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
        done: false
    }
];

export default function (state = null, action) {

    switch(action.type){
        case 'TASK_DELETED':
            console.log(tasks[action.payload.or].done = true);
            return tasks.filter(e => !e.done);
        default:
            return tasks.filter(e => !e.done);
    }

    
}