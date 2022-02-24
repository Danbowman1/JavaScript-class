// localStorage.setItem('name', 'John')
// localStorage.setItem('age', '30')

// sessionStorage.setItem('name', 'Beth')

// localStorage.removeItem('name')

// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')

// localStorage.clear()
// console.log(name, age)

document.querySelector('form').addEventListener('submit', 
function(e){
    const task = document.getElementById('task').value

    let tasks

    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))

    alert('Task saved')

    e.preventDefault()
})

const tasks = localStorage.getItem('tasks')

tasks.forEach(function(task) {
    
})