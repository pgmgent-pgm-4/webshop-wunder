# Final Project: Webshop

## Development (in progress)
### Start up server
You can run the server with the command :  
> npm run start

This Code will start the server, create database if not present, start up API, render views.

## Folder-structure
```
├── README.md  
└── server  
    ├── api
    │   ├── controllers 
    │   └── routes
    │       └── index.js (all routes for the API)
    ├── app.js
    ├── controllers
    │   └── publicController.js ( controller is being called from /routes, decides what to output )
    ├── public
    │   ├── css
    │   │   └── main.css ( file is being generated from node-sass)
    │   ├── images ( images can be added here, refer to './static/images/...' )
    │   └── js ( add script is necesarry, refer to './static/js/...' )
    ├── routes
    │   └── index.js ( defined routes ex. /contact will call publicController "getContact" )
    ├── services
    │   └── dataService.js ( bundles calls for API )
    └── views
        ├── base.njk ( base-file as example, use include in other files)
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


## Back-end
**public controller**
Endpoints are created in the publicController and refers to that specific page in the **/views**-folder

**accesing API:**  
API documentation is available at [http://localhost:8080/api/docs](http://localhost:8080/api/docs).  
For now only 'shapes' is defined, below is a list of finished models, controllers, endpoints

**Finished Models:**  
- [x] Brands
- [x] Shapes
- [x] CarColours
- [x] CarReviews
- [x] Users
- [x] Profiles
- [x] Cars
- [ ] Car_has_options
- [ ] CarOptions
- [ ] Orders
- [ ] OrderItems
- [ ] Payments
- [ ] Promotions  

**Finished Controllers:**  
- [x] Brands
- [x] Shapes
- [x] CarColours
- [x] CarReviews
- [x] Users
- [x] Profiles
- [x] Cars
- [ ] Car_has_options
- [ ] CarOptions
- [ ] Orders
- [ ] OrderItems
- [ ] Payments
- [ ] Promotions  
  
**Finished Endpoints:**  
- [x] Brands
- [x] Shapes
- [x] CarColours
- [x] CarReviews
- [x] Users
- [x] Profiles
- [x] Cars
- [ ] Car_has_options
- [ ] CarOptions
- [ ] Orders
- [ ] OrderItems
- [ ] Payments
- [ ] Promotions  
  
**Finished Swagger Documentation:**  
- [ ] Brands
- [x] Shapes
- [ ] CarColours
- [ ] CarReviews
- [ ] Users
- [ ] Profiles
- [ ] Cars
- [ ] Car_has_options
- [ ] CarOptions
- [ ] Orders
- [ ] OrderItems
- [ ] Payments
- [ ] Promotions




## Introductie
Voor het finale project van @work2 maakten we  een webshop waarin we auto's aanbieden van verschillende merken en in verschillende vormen. 
De naam van de webshop is "Enjin".

## Verschillende Pagina's
* Home
* Contact
* About us
* (Optional: News)
* (Optional: Services)
    * (Optional: Detailpage service)
* Overview Cars
    * Ordered by Brand
    * Ordered by Shape
    * Filtered by ..
* Register-page
* Login-page
* User-page
    * User Dashboard
    * Overview Orders
    * Personal Settings
    * Preferences
    * Wishlist
    * Shopping Basket
* Checkout Process
    * Confirm order
    * Choose delivery adress, options
    * Choose payment
    * Order confirmed (Thank you)
* Shopping Basket (Overlay)
* Cookie-info (Pop-up)




## API

### /api/

