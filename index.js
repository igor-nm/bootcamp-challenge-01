const express = require("express");

const server = express();
server.use(express.json());

let projects = [];
let requestQuantity = 0;

// Global middleware
server.use((request, response, next) => {
    console.log(++requestQuantity);
    return next();    
});

// Local middleware
function checkHasProjects(request, response, next) {
    if(projects.length === 0) {
        return response.status(204).json({"message": "Don't has any project yet!"});
    }

    return next();
}

function checkProjectExists(request, response, next) {
    const { id } = request.params;

    if(!projects.find(project => project.id === id)) {
        return response.status(400).json({"error": "Project doesn't exists!"});
    }

    return next();
}

// Routes
server.get("/projects", checkHasProjects, (request, response) => {
    return response.json(projects);
});

server.post("/projects", (request, response) => {
    const project = request.body;
    project.tasks = [];
    projects.push(project);

    return response.status(201).json({"message": `Project ${project.title} was created!`});
});

server.post("/projects/:id/tasks", checkProjectExists, (request, response) => {
    const { id } = request.params;
    const { title } = request.body;
    
    const project = projects.find(it => it.id === id);
    project.tasks.push(title);

    return response.status(201).json({"message": `Task ${title} was added!`});
});

server.put("/projects/:id", checkProjectExists, (request, response) => {
    const { id } = request.params;
    const { title } = request.body;

    const project = projects.find(project => project.id === id);
    project.title = title;

    return response.json({"message": `Projec with ${id} id was updated!`});
});

server.delete("/projects/:id", checkProjectExists, (request, response) => {
    const { id } = request.params;

    const newList = projects.filter(project => project.id !== id);
    projects = newList;

    return response.json({"message": `Projec with ${id} id was deleted!`});
});

server.listen(3000);
