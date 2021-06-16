# @Work2 : Final Project: Webshop Enjine

## Assignment
As our final assignment for @Work 2, we created an original self-made deisgn for a webshop. This webshop needed to have products and categories for a self chosen audience.

## Approach
We chose to sell cars in our own webshop **Enjine**. The overview page would have 2 categories, 'Bodywork' and 'Brands'. going to the cars-overview would group them by this category. 'Car' being our main product while still having a lot of properties. All examples can be found in the API documentation.

## Start up server
If you would wan to re-seed the database, remove the database file at: **/server/data/database.sqlite3**.  
Re-building the database can be done with following command:
> npm run dev

After the database is build again, you can seed all the tables with following command:
> npm run seed-database

Either after re-seeding or not, this project uses server-side rendering. starting up this project can be done with following command:
> npm run start  


## API 
8 out of 13 endpoints are defined and can be tested at :  
[localhost:8081/api/docs](localhost:8081/api/docs)


## Folder-structure
```
├── README.md  
└── server  
    ├── api
    │   ├── controllers 
    │   │   ( handles the request and operates the CRUD on the Database for each Table in a different file
    │   │   
    │   └── routes
    │       └── index.js (all routes for the API with swagger js-doc documentation)
    ├── app.js
    ├── controllers
    │   └── publicController.js ( controller is being called from /routes, 
    │                             decides what data to render to which page from the '/views'-folder )
    │
    ├── data
    │   └── database.sqlite3 ( database file, can be erased and re-generated, see above )
    │                             
    ├── database
    │   └── seeders
    │       ├── 20210523142206-shape-seeder.js
    │       └── .....        
    │            (all file in this folder are run with the 'seed-database' script to populate database.sqlite3 file)
    ├── middleware
    │   └── getData.middleware.js
    │       (this middleware is being called from the publicroutes, to save the data in the response, so the publicController can render it )
    │
    ├── models
    │   ├── brand.model.js
    │   ├── car.model.js
    │   └──  .....
    │       ( All defined models to use in Sequelize with relations )
    │
    ├── routes
    │   └── index.js
    │       ( All public routes )
    │
    ├── static ( all files are accesible from the client )
    │   ├── css
    │   │   └── main.css ( file is being generated from node-sass)
    │   ├── images ( images can be added here, refer to './static/images/...' )
    │   └── js ( add script is necesarry, refer to './static/js/...' )
    │
    └── views
        ├── base.njk ( base-file with header and footer, other pages can be rendered inside this page)
        ├── index.njk
        ├── partials
        │   └── header.njk ( partials can be loaded with {% include "partials/header.njk" %}  )
        └── style ( folders to seperate scss )
            ├── abstracts
            ├── base
            ├── components
            ├── layout
            ├── main.scss ( bundle of 7-1 scss structure )
            ├── pages
            ├── themes
            └── vendors
```

## Front-end
Nunjucks-files are being rendered from the **/views**-folder.  
Scss is being converted from **/views/style/main.scss** to **/public/css/main.css**  
images, scripts, ..can be added to the **/public/images** and **/public/css**-folders.  


