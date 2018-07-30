export function selectTask(task) {
    //selectBook is an ActionCreator, it needs to return an action,
    //an object with a type property
    return {
        type: 'TASK_SELECTED',
        payload: task
    }
}
