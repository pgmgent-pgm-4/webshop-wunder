# Final Project: Webshop

## Development (in progress)
### Front-End
Use parcel to convert scss to css, creates 'dist'-folder which is going to run on server http://localhost:1234,  
**with command:**
> npm run parcel-dev

Connection to some endpoints are made in './client/scripts/services.js', which is imported in './client/scripts/main.js'  

**TODO:**  
Nunjucks still needs to be implemented to allow component-based html/njk-files

### Back-end
Run back-end in new terminal window, which will run from http://localhost:8080,  
**with command:**
> npm run dev

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

