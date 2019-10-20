# Challenge 01 - BootCamp
This project  is from challange of the bootcamp from _[Rocket Seat](https://rocketseat.com.br/)_.
It is being used as a study project to improve my skils.

### Features:
  - Show projects;
  - Create projects;
  - Create task to projects;
  - Update project (only title);
  - Delete project (by id);

### Routes:
| Method | Action          | Header | Body      | Query     | Path                |
| ------ | ------          | ------ | ------    | ------    | ------              |
| GET    | get-projects    | [ ]    | -         | -         | /projects           |
| POST   | create-project  | [ ]    | [B1](#b2) | -         | /projects           |
| POST   | create-tasks    | [ ]    | [B2](#b3) | -         | /project/:id/taks   |
| PUT    | update-project  | [ ]    | [B3](#b3) | -         | /project/:id        |
| DELETE | remove-project  | [ ]    | -         | -         | /project/:id        |

###### B1
> Request body for `creat-project`
```json
{
	"id": "1",
	"title": "New project"
}
```

###### B2
> Request body for `create-tasks`
```json
{
	"title": "Create login route"
}
```

###### B3
> Request body for `update-project`
```json
{
	"title": "Gympoint"
}
```
