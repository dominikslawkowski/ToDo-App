export function deleteTask(task){
    return {
        type: 'TASK_DELETED',
        payload: task
    }
}