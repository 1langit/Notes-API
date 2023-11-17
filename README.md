# Notes API
## API for Notes App
Sample API for note-taking app with CRUD operation. Made using Express.js

## Run on Local
1. Clone this repository
2. Import 'notes_db_api.sql' on phpmyadmin
3. Run 'nodemon npm start' command on the directory
4. Test the API using postman

## Routes 
- `GET` /notes
- `GET` /notes/{id}
- `POST` /notes/store
- `PATCH` /notes/update/{id}
- `DELETE` /notes/delete/{id}

## Base URL Example
http://localhost:3000/api/

## Example Usage
`GET` `http://localhost:3000/api/notes/1`

```
{
    "status": true,
    "message": "Detail Data Post",
    "data": {
        "id": 1,
        "title": "Hello World!",
        "tag": "Sample note",
        "content": "Today I want to eat a croissant",
        "last_edit": "2023-11-17T15:20:07.000Z"
    }
}
```
