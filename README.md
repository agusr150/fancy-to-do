# fancy-to-do

The fancy-todo application is developed using express, posgresql, sequelize, and some npm's as shown in package.json.
This application is SPA which shows login page at the beginning of application when no token in local storage.
CRUD is applied in this application.
The example is created in localhost

This application is deployed in heroku for backend and firebase for frontend as following link:
...will be updated later

------------
Method & URL 
GET | POST | DELETE | PUT
Example of method and url can be found in link: 
''''
https://documenter.getpostman.com/view/10571187/SzYXWKEt
''''


-----------
Data Params

User table
id : auto increase integer
username : string
email: string
password : string


Todo table
id : auto increase integer
title : string
description : string
status : boolean
due_date : date

Association between those tables is one to many.

-----------
Success Response:
Code: 200 
Code: 201 

Error Response:
Code: 400
Code: 401
Code: 500

----------

API Open Weather:

This application using weather forecast which is taken from API.
url for this API can be found :
''''
https://openweathermap.org/forecast5
''''

