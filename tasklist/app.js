// UI Vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-task')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
LoadEventListeners()

// Load all event listeners
function LoadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask)

}

// Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task')
    }

    e.preventDefault()
}