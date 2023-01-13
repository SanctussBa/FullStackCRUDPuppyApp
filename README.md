# Puppies-React-Typeschript App (full-stack)

## Demo of this app:
![alt text](https://github.com/SanctussBa/FullStackCRUDPuppyApp/blob/master/demo.gif?raw=true)

## Screenshots of this app:
![alt text](https://github.com/SanctussBa/FullStackCRUDPuppyApp/blob/master/screenshot1.png?raw=true)
![alt text](https://github.com/SanctussBa/FullStackCRUDPuppyApp/blob/master/screenshot2.png?raw=true)

## What is this project about?

* This Application simulates Puppy adoption administration app. User can add new Puppy, fill up form providing
new puppy name, breed and birth date. All basic `CRUD` (Create, Read, Update, Delete) operations are functional.
* This project serves as React, Typescript learning project.

## What technologies were used?

Full Stack Web Application 
* This is full stack application. Back-end is `.net web api`
* Store products are saved in `SQL database`. 
* `React` with `TypeScript`
* 3rd party API for images - Unsplash API

# Main features of this app:
Simple application where user can add puppy by filling form (name, breed and birth date). It adds it to List of puppyies.
By clicking on the name of the puppy, more detailed information shows up with random puppy photo from Unsplash API.
User can edit and delete puppy.

## How you can clone and run this project?

From your command line, first clone this repo:

```
# Clone this repo
>>> git clone https://github.com/SanctussBa/e-commerce-React-TS

# Go into the repository
>>> cd .\e-commerce-React-TS\

# Remove current origin repository
>>> git remote remove origin

```

## Configure .NET Web API:

1. If you don't have it yet. Download [Microsoft SQL Server Management Studio](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16#download-ssms)
2. Set up your SQL Server and Create new database.
3. Open API folder with your IDE
4. Go into appsettings.json file and change `ConnectionStrings`
```json
"DataContext": "Server=localhost;Database=[your DB name];User Id=sa;Password=[your password];TrustServerCertificate=True"
```
5. Create your first migration
```
>>> dotnet ef migrations add InitialCreate
```
6. Create your database and schema
```
>>> dotnet ef database update
```
7. Run API
```
>>> dotnet watch run
```
If there are no errors it means you are connected to database successfully. Double check if you have new Table in your database. 


## Configure React App

1. Go into `puppiesReact/puppies-app/` directory
2. Install all packages and dependancies
```
>>> npm i
```
3. Start application
```
>>> npm start
```

App should be running by its own. If it is not running Open http://localhost:3000 to view it in the browser.
