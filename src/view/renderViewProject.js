import askForProjectInput from '../logic/createProjectObject'
import { addEventListenerProjectDeleteButton } from '../logic/deleteElements'
import { addEventListenerTodoAddToProjectFromProject } from '../logic/insertElements'
const renderViewProject = () => {
    let dynamicElementsContainer = document.getElementById('dynamic-content')

    // Create container div(row), checkmark div (column), project div (column)
    const container = document.createElement('div')
    const buttons = document.createElement('div')
    const deleteButton = document.createElement('button')
    const addTodoToProjectButton = document.createElement('button')
    const project = document.createElement('div')

    // Create divs within project div
    const title = document.createElement('div')
    const todoListContainer = document.createElement('div')
    const todoList = document.createElement('ol') // Will try using <ol> and <li>

    // Append container div > checkmark div, todo div
    container.appendChild(buttons)
    container.appendChild(project)
    project.appendChild(title)
    project.appendChild(todoListContainer)
    todoListContainer.appendChild(todoList)

    // Appends buttons to buttons container
    buttons.appendChild(addTodoToProjectButton)
    buttons.appendChild(deleteButton)

    // Change div id/class
    container.classList.add('project-container')
    container.classList.add('faded-out')
    buttons.classList.add('buttons')
    project.classList.add('project')
    title.classList.add('project')
    title.classList.add('title')
    todoListContainer.classList.add('todo-list-container')
    todoList.classList.add('todo-list')

    // Add fading animation on project creation
    requestAnimationFrame(() => {
        container.classList.remove('faded-out')
    })
  
    // Call for askForProjectInput and store the object returned
    const projectObject = askForProjectInput()
    if(projectObject === null) return null

    // Change text content of divs depending on the property values from the object
    addTodoToProjectButton.textContent = '>'
    deleteButton.textContent = 'X'
    title.textContent = projectObject.title

    // Change title bg depending on property value 'priority'
    title.style.backgroundColor = 'rgb(241, 214, 181)'


    // Add event listeners to buttons within the todo di
    addEventListenerProjectDeleteButton(deleteButton, projectObject)
    addEventListenerTodoAddToProjectFromProject(addTodoToProjectButton,projectObject)  

    // Container is appended last to avoid returning an empty container if the object is null..
    dynamicElementsContainer.appendChild(container)

    // Return container to be appended in index.js
    return dynamicElementsContainer
}

export default renderViewProject