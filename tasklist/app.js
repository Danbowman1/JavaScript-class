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
    // Remove task event
    taskList.addEventListener('click', removeTask)
    // Clear task event
    clearBtn.addEventListener('click', clearTask)
    // Filter task
    filter.addEventListener('keyup', filterTask)
}

// Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task')
    }

    // Create li element
    const li = document.createElement('li')
    // Add class
    li.className = 'collection-item'
    // Text node and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    // New link element
    const link = document.createElement('a')
    // Add class
    link.className = 'delete-item secondary-content'
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append the link to li
    li.appendChild(link)

    // Append li to ul
    taskList.appendChild(li)

    // Clear input
    taskInput.value = ''

    e.preventDefault()
}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are You Sure?')) {
        e.target.parentElement.parentElement.remove()
        }
    }
}

// Clear task
function clearTask() {
    // taskList.innerHTML = ''

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }

}

// Filter Tasks
function filterTask(e) {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}