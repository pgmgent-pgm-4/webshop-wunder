/**
 * Import packages 
 */
import express from 'express';

/**
 * Import custom packages
 */
import * as carColourController from '../controllers/carColour.controller';
import * as carReviewController from '../controllers/carReview.controller';
import * as userController from '../controllers/user.controller';
import * as carController from '../controllers/car.controller';
import * as profileController from '../controllers/profile.controller';
import * as brandController from '../controllers/brand.controller';
import * as shapeController from '../controllers/shape.controller';
import * as orderController from '../controllers/order.controller';
import * as car_has_optionController from '../controllers/car_has_option.controller';
import * as car_has_colourController from '../controllers/car_has_colour.controller';
import * as paymentController from '../controllers/payment.controller';
import * as promotionController from '../controllers/promotion.controller';
import * as orderItemController from '../controllers/orderItem.controller';
import * as carOptionController from '../controllers/carOption.controller';



/**
 * Make a router
 */
const router = express.Router();



/**
 * Routes
 */


/**
 * Shape routes
 */

/**
 * @swagger
 * /api/shapes:
 *  get:
 *    summary: Returns a list of shapes
 *    tags: [Shapes]
 *    description: Retrieve a list of shapes. Can be used to populate a list of shapes when prototyping or testing an API.*
 *    responses:
 *      200:
 *        description: The list of shapes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Shape'
 *        
 */
router.get('/shapes', shapeController.getShapes);


/**
 * @swagger
 * /api/shapes/{shapeId}:
 *  get:
 *    summary: Get the shape by id
 *    tags: [Shapes]
 *    parameters:
 *      - in: path
 *        name: shapeId
 *        schema:
 *          type: string
 *        required: true
 *        description: The shapeId
 *    responses:
 *      200:
 *        description: The shape description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Shape'
 *      404:
 *        description: The shape was not found
 */
router.get('/shapes/:shapeId', shapeController.getShapeById);


/**
 * @swagger
 *  /api/shapes:
 *    post:
 *      summary: Creates a new shape
 *      tags: [Shapes]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ShapeUpdate'
 *      responses:
 *        200:
 *          description: The shape was succesfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Shape'
 *        500:
 *          description: An error accured on the server
 */
router.post('/shapes', shapeController.createShape);


/**
 * @swagger
 * /api/shapes/{shapeId}:
 *  put:
 *    summary: Update the shape by id
 *    tags: [Shapes]
 *    parameters:
 *      - in: path
 *        name: shapeId
 *        schema:
 *          type: string
 *        required: true
 *        description: The shapeId
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ShapeUpdate'
 *    responses:
 *      200:
 *        description: The shape was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Shape'
 *      404:
 *        description: The shape was not found
 *      500:
 *        description: An error accured on the server    
 */
router.put('/shapes/:shapeId', shapeController.updateShape);


/**
 * @swagger
 *  /api/shapes/{shapeId}:
 *    delete:
 *      summary: Remove the shape by ID
 *      tags: [Shapes]
 *      parameters:
 *        - in: path
 *          name: shapeId
 *          schema: 
 *            type: string
 *          required: true
 *          description: ID of the shape
 *      responses:
 *        200:
 *          description: The shape was deleted
 *        404:
 *          description: The shape was not found
 */
router.delete('/shapes/:shapeId', shapeController.deleteShape);



/**
 * Brand routes
 */

/**
 * @swagger
 * /api/brands:
 *  get:
 *    summary: Returns a list of brands
 *    tags: [Brands]
 *    description: Retrieve a list of brands.
 *    responses:
 *      200:
 *        description: The list of brands
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Brand'
 */
router.get('/brands', brandController.getBrands);


/**
 * @swagger
 * /api/brands/{brandId}:
 *  get:
 *    summary: Get the brand by id
 *    tags: [Brands]
 *    parameters:
 *      - in: path
 *        name: brandId
 *        schema:
 *          type: string
 *        required: true
 *        description: The brandId
 *    responses:
 *      200:
 *        description: The brand description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Brand'
 *      404:
 *        description: The brand was not found
 */
router.get('/brands/:brandId', brandController.getBrandById);


/**
 * @swagger
 *  /api/brands:
 *    post:
 *      summary: Creates a new brand
 *      tags: [Brands]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BrandUpdate'
 *      responses:
 *        200:
 *          description: The brand was succesfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Brand'
 *        500:
 *          description: An error accured on the server
 */
router.post('/brands', brandController.createBrand);


/**
 * @swagger
 * /api/brands/{brandId}:
 *  put:
 *    summary: Update the brand by id
 *    tags: [Brands]
 *    parameters:
 *      - in: path
 *        name: brandId
 *        schema:
 *          type: string
 *        required: true
 *        description: The brandId
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/BrandUpdate'
 *    responses:
 *      200:
 *        description: The brand was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Brand'
 *      404:
 *        description: The brand was not found
 *      500:
 *        description: An error accured on the server    
 */
router.put('/brands/:brandId', brandController.updateBrand);


/**
 * @swagger
 *  /api/brands/{brandId}:
 *    delete:
 *      summary: Remove the brand by ID
 *      tags: [Brands]
 *      parameters:
 *        - in: path
 *          name: brandId
 *          schema: 
 *            type: string
 *          required: true
 *          description: ID of the brand
 *      responses:
 *        200:
 *          description: The brand was deleted
 *        404:
 *          description: The brand was not found
 */
router.delete('/brands/:brandId', brandController.deleteBrand);



/**
 * CarColour routes
 */
router.get('/carcolours', carColourController.getCarColours);
router.get('/carcolours/:carColourId', carColourController.getCarColourById);
router.post('/carcolours', carColourController.createCarColour);
router.put('/carcolours/:carColourId', carColourController.updateCarColour);
router.delete('/carcolours/:carColourId', carColourController.deleteCarColour);



/**
 * CarReview routes
 */

/**
 * @swagger
 * /api/carReviews:
 *  get:
 *    summary: Returns a list of carReviews
 *    tags: [CarReviews]
 *    description: Retrieve a list of Car Reviews. Each element contains the UserId and CarId with rating and description
 *    responses:
 *      200:
 *        description: The list of carReviews
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/CarReview'
 */
router.get('/carreviews', carReviewController.getCarReviews);


/**
 * @swagger
 * /api/carReviews/{carReviewId}:
 *  get:
 *    summary: Get the car Review by id
 *    tags: [CarReviews]
 *    parameters:
 *      - in: path
 *        name: carReviewId
 *        schema:
 *          type: string
 *        required: true
 *        description: The carReviewId
 *    responses:
 *      200:
 *        description: The car Review description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarReview'
 *      404:
 *        description: The shape was not found
 */
router.get('/carreviews/:carReviewId', carReviewController.getCarReviewById);


/**
 * @swagger
 *  /api/carReviews:
 *    post:
 *      summary: Creates a new carReview
 *      tags: [CarReviews]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarReviewUpdate'
 *      responses:
 *        200:
 *          description: The Car Review was succesfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CarReview'
 *        500:
 *          description: An error accured on the server 
 */
router.post('/carreviews', carReviewController.createCarReview);


/**
 * @swagger
 * /api/carReviews/{carReviewId}:
 *  put:
 *    summary: Update the carReview by id
 *    tags: [CarReviews]
 *    parameters:
 *      - in: path
 *        name: carReviewId
 *        schema:
 *          type: string
 *        required: true
 *        description: The carReviewId
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CarReviewUpdate'
 *    responses:
 *      200:
 *        description: The Car Revuew was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarReview'
 *      404:
 *        description: The Car Review was not found
 *      500:
 *        description: An error accured on the server    
 */
router.put('/carreviews/:carReviewId', carReviewController.updateCarReview);


/**
 * @swagger
 *  /api/carReviews/{carReviewId}:
 *    delete:
 *      summary: Remove the carReview by ID
 *      tags: [CarReviews]
 *      parameters:
 *        - in: path
 *          name: carReviewId
 *          schema: 
 *            type: string
 *          required: true
 *          description: ID of the carReview
 *      responses:
 *        200:
 *          description: The carReview was deleted
 *        404:
 *          description: The carReview was not found
 */
router.delete('/carreviews/:carReviewId', carReviewController.deleteCarReview);



/**
 * User routes
 */
router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUserById);
router.get('/users/:userId/orders', orderController.getOrdersFromUserById );
router.get('/users/:userId/profile', profileController.getProfileFromUserById);
router.get('/users/:userId/carreviews', carReviewController.getCarReviewsByUserId);
router.post('/users', userController.createUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);
// login page
router.post('/users/login', userController.loginUser);



/**
 * Car routes
 */

/**
 * @swagger
 * /api/cars:
 *  get:
 *    summary: Returns a list of cars
 *    tags: [Cars]
 *    description: Retrieve a list of cars.
 *    responses:
 *      200:
 *        description: The list of cars
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Car'
 */
router.get('/cars', carController.getCars);


/**
 * @swagger
 * /api/cars/{carId}:
 *  get:
 *    summary: Get the cars by id
 *    tags: [Cars]
 *    parameters:
 *      - in: path
 *        name: carId
 *        schema:
 *          type: string
 *        required: true
 *        description: The carId
 *    responses:
 *      200:
 *        description: The cars description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Car'
 *      404:
 *        description: The Car was not found
 */
router.get('/cars/:carId', carController.getCarById);


/**
 * @swagger
 * /api/cars/{carId}/caroptions:
 *  get:
 *    summary: Get the car option combination of a car by id
 *    tags: [Cars]
 *    parameters:
 *      - in: path
 *        name: carId
 *        schema:
 *          type: string
 *        required: true
 *        description: The carId
 *    responses:
 *      200:
 *        description: The car option combination of a car by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarHasOption'
 *      404:
 *        description: The Car options were not found
 */
router.get('/cars/:carId/caroptions', car_has_optionController.getCar_has_optionsByCarId);

/**
 * @swagger
 * /api/cars/{carId}/carreviews:
 *  get:
 *    summary: Get the car reviews for a car by id
 *    tags: [Cars]
 *    parameters:
 *      - in: path
 *        name: carId
 *        schema:
 *          type: string
 *        required: true
 *        description: The carId
 *    responses:
 *      200:
 *        description: The list of reviews by car Id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarReview'
 *      404:
 *        description: The Car options were not found
 */
router.get('/cars/:carId/carreviews', carReviewController.getCarReviewsByCarId);


/**
 * @swagger
 * /api/cars/shapes/{shapeName}:
 *  get:
 *    summary: Get the shape(s) with cars included if 'all', else one specific shape with relevant cars
 *    tags: [Cars]
 *    parameters:
 *      - in: path
 *        name: shapeName
 *        schema:
 *          type: string
 *        required: true
 *        description: The name of the shape
 *    responses:
 *      200:
 *        description: The shape(s) with cars-array which are relevant
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ShapeWithCars'
 *      404:
 *        description: The Shape-name was not found
 */
router.get('/cars/shapes/:shapeName', carController.getCarsByShapeName);


/**
 * @swagger
 * /api/cars/brands/{brandName}:
 *  get:
 *    summary: Get the brands(s) with cars included if 'all', else one specific brand with relevant cars
 *    tags: [Cars]
 *    parameters:
 *      - in: path
 *        name: brandName
 *        schema:
 *          type: string
 *        required: true
 *        description: The name of the brand
 *    responses:
 *      200:
 *        description: The brand(s) with cars-array which are relevant
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BrandWithCars'
 *      404:
 *        description: The Brand-name was not found
 */
router.get('/cars/brands/:brandName', carController.getCarsByBrandName);


//TODO add Colours ??
//router.get('/cars/:carId/carcolours', car_has_colourController.getCar_has_carcoloursByCarId);


/**
 * @swagger
 *  /api/cars:
 *    post:
 *      summary: Creates a new car
 *      tags: [Cars]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarUpdate'
 *      responses:
 *        200:
 *          description: The Car was succesfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Car'
 *        500:
 *          description: An error accured on the server
 */
router.post('/cars', carController.createCar);


/**
 * @swagger
 * /api/cars/{carId}:
 *  put:
 *    summary: Update the car by id
 *    tags: [Cars]
 *    parameters:
 *      - in: path
 *        name: carId
 *        schema:
 *          type: string
 *        required: true
 *        description: The carId
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CarUpdate'
 *    responses:
 *      200:
 *        description: The car was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Car'
 *      404:
 *        description: The car was not found
 *      500:
 *        description: An error accured on the server
 */
router.put('/cars/:carId', carController.updateCar);


/**
 * @swagger
 *  /api/cars/{carId}:
 *    delete:
 *      summary: Remove the car by ID
 *      tags: [Cars]
 *      parameters:
 *        - in: path
 *          name: carId
 *          schema: 
 *            type: string
 *          required: true
 *          description: ID of the car
 *      responses:
 *        200:
 *          description: The car was deleted
 *        404:
 *          description: The car was not found
 */
router.delete('/cars/:carId', carController.deleteCar);



/**
 * Profile routes
 */
router.get('/profiles', profileController.getProfiles);
router.get('/profiles/:profileId', profileController.getProfileById);
router.post('/profiles', profileController.createProfile);
router.put('/profiles/:profileId', profileController.updateProfile);
router.delete('/profiles/:profileId', profileController.deleteProfile);



/**
 * Order routes
 */

/**
 * @swagger
 * /api/orders:
 *  get:
 *    summary: Returns a list of orders
 *    tags: [Orders]
 *    description: Retrieve a list of orders.
 *    responses:
 *      200:
 *        description: The list of orders
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Order'
 */
router.get('/orders', orderController.getOrders);


/**
 * @swagger
 * /api/orders/{orderId}:
 *  get:
 *    summary: Get the order by id
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: orderId
 *        schema:
 *          type: string
 *        required: true
 *        description: The orderId
 *    responses:
 *      200:
 *        description: The order description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Order'
 *      404:
 *        description: The Order was not found
 */
router.get('/orders/:orderId', orderController.getOrderById);


/**
 * @swagger
 * /api/orders/{orderId}/payment:
 *  get:
 *    summary: Get the payment for a specific order
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: orderId
 *        schema:
 *          type: string
 *        required: true
 *        description: The orderId
 *    responses:
 *      200:
 *        description: The payment for the order description by orderId
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Payment'
 *      404:
 *        description: The Order was not found
 */
router.get('/orders/:orderId/payment', paymentController.getPaymentByOrderId);


/**
 * @swagger
 * /api/orders/{orderId}/orderItems:
 *  get:
 *    summary: Get the orderItems for a specific order
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: orderId
 *        schema:
 *          type: string
 *        required: true
 *        description: The orderId
 *    responses:
 *      200:
 *        description: The orderItems for the order by orderId
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/OrderItem'
 *      404:
 *        description: The Order was not found
 */
router.get('/orders/:orderId/orderitems', orderItemController.getOrderItemsByOrderId);


/**
 * @swagger
 *  /api/orders:
 *    post:
 *      summary: Creates a new order
 *      tags: [Orders]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/OrderUpdate'
 *      responses:
 *        200:
 *          description: The order was succesfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Order'
 *        500:
 *          description: An error accured on the server
 */
router.post('/orders', orderController.createOrder);


/**
 * @swagger
 * /api/orders/{orderId}:
 *  put:
 *    summary: Update the order by id
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: orderId
 *        schema:
 *          type: string
 *        required: true
 *        description: The orderId
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/OrderUpdate'
 *    responses:
 *      200:
 *        description: The shape was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Order'
 *      404:
 *        description: The order was not found
 *      500:
 *        description: An error accured on the server
 */
router.put('/orders/:orderId', orderController.updateOrder);


/**
 * @swagger
 *  /api/orders/{orderId}:
 *    delete:
 *      summary: Remove the order by ID
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: orderId
 *          schema: 
 *            type: string
 *          required: true
 *          description: ID of the order
 *      responses:
 *        200:
 *          description: The order was deleted
 *        404:
 *          description: The order was not found
 */
router.delete('/orders/:orderId', orderController.deleteOrder);



/**
 * Car_has_option routes
 */

/**
 * @swagger
 * /api/car_has_options:
 *  get:
 *    summary: Returns a list of car has option combination
 *    tags: [CarHasOptions]
 *    description: Retrieve a list of car + car option combinations
 *    responses:
 *      200:
 *        description: The list of car + car option combinations
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/CarHasOption'
 *        
 */
router.get('/car_has_options', car_has_optionController.getCar_has_options);


/**
 * @swagger
 * /api/car_has_optuons/{car_has_optionId}:
 *  get:
 *    summary: Get a car + car option combination by id
 *    tags: [CarHasOptions]
 *    parameters:
 *      - in: path
 *        name: car_has_optionId
 *        schema:
 *          type: string
 *        required: true
 *        description: The car_has_optionId
 *    responses:
 *      200:
 *        description: The car + car option combination
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarHasOption'
 *      404:
 *        description: The CarHasOption was not found
 */
router.get('/car_has_options/:car_has_optionId', car_has_optionController.getCar_has_optionById);


/**
 * @swagger
 *  /api/car_has_options:
 *    post:
 *      summary: Creates a new car_has_options
 *      tags: [CarHasOptions]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarHasOptionUpdate'
 *      responses:
 *        200:
 *          description: The car_has_options was succesfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CarHasOption'
 *        500:
 *          description: An error accured on the server
 */
router.post('/car_has_options', car_has_optionController.createCar_has_option);


/**
 * @swagger
 * /api/car_has_options/{car_has_optionId}:
 *  put:
 *    summary: Update the car_has_option by id
 *    tags: [CarHasOptions]
 *    parameters:
 *      - in: path
 *        name: car_has_optionId
 *        schema:
 *          type: string
 *        required: true
 *        description: The car_has_optionId
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CarHasOptionUpdate'
 *    responses:
 *      200:
 *        description: The car_has_option was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarHasOption'
 *      404:
 *        description: The car_has_option was not found
 *      500:
 *        description: An error accured on the server    
 */
router.put('/car_has_options/:car_has_optionId', car_has_optionController.updateCar_has_option);


/**
 * @swagger
 *  /api/car_has_options/{car_has_optionId}:
 *    delete:
 *      summary: Remove the car_has_options by ID
 *      tags: [CarHasOptions]
 *      parameters:
 *        - in: path
 *          name: car_has_optionId
 *          schema: 
 *            type: string
 *          required: true
 *          description: ID of the car_has_options
 *      responses:
 *        200:
 *          description: The car_has_options was deleted
 *        404:
 *          description: The car_has_options was not found
 */
router.delete('/car_has_options/:car_has_optionId', car_has_optionController.deleteCar_has_option);



/**
 * Car_has_colour routes
 */
// router.get('/car_has_colours', car_has_colourController.getCar_has_colours);
// router.get('/car_has_colours/:car_has_colourId', car_has_colourController.getCar_has_colourById);
// router.post('/car_has_colours', car_has_colourController.createCar_has_colour);
// router.put('/car_has_colours/:car_has_colourId', car_has_colourController.updateCar_has_colour);
// router.delete('/car_has_colours/:car_has_colourId', car_has_colourController.deleteCar_has_colour);



/**
 * Payment routes
 */


/**
 * @swagger
 * /api/payments:
 *  get:
 *    summary: Returns a list of payments
 *    tags: [Payments]
 *    description: Retrieve a list of payments
 *    responses:
 *      200:
 *        description: The list of payments
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Payment'
 *        
 */
router.get('/payments', paymentController.getPayments);


/**
 * @swagger
 * /api/payments/{shapeId}:
 *  get:
 *    summary: Get the payment by id
 *    tags: [Payments]
 *    parameters:
 *      - in: path
 *        name: paymentId
 *        schema:
 *          type: string
 *        required: true
 *        description: The paymentId
 *    responses:
 *      200:
 *        description: The payment description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Payment'
 *      404:
 *        description: The payment was not found
 */
router.get('/payments/:paymentId', paymentController.getPaymentById);


/**
 * @swagger
 *  /api/payments:
 *    post:
 *      summary: Creates a new payment
 *      tags: [Payments]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PaymentUpdate'
 *      responses:
 *        200:
 *          description: The payment was succesfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Payment'
 *        500:
 *          description: An error accured on the server
 */
router.post('/payments', paymentController.createPayment);


/**
 * @swagger
 * /api/payments/{paymentId}:
 *  put:
 *    summary: Update the payment by id
 *    tags: [Payments]
 *    parameters:
 *      - in: path
 *        name: paymentId
 *        schema:
 *          type: string
 *        required: true
 *        description: The paymentId
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/PaymentUpdate'
 *    responses:
 *      200:
 *        description: The payment was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Payment'
 *      404:
 *        description: The payment was not found
 *      500:
 *        description: An error accured on the server    
 */
router.put('/payments/:paymentId', paymentController.updatePayment);


/**
 * @swagger
 *  /api/payments/{paymentId}:
 *    delete:
 *      summary: Remove the payment by ID
 *      tags: [Payments]
 *      parameters:
 *        - in: path
 *          name: paymentId
 *          schema: 
 *            type: string
 *          required: true
 *          description: ID of the paymentId
 *      responses:
 *        200:
 *          description: The payment was deleted
 *        404:
 *          description: The payment was not found
 */
router.delete('/payments/:paymentId', paymentController.deletePayment);



/**
 * Promotion routes
 */
router.get('/promotions', promotionController.getPromotions);
router.get('/promotions/:promotionId', promotionController.getPromotionById);
router.post('/promotions', promotionController.createPromotion);
router.put('/promotions/:promotionId', promotionController.updatePromotion);
router.delete('/promotions/:promotionId', promotionController.deletePromotion);



/**
 * OrderItem routes
 */
 //OrderItem


/**
 * @swagger
 * /api/orderitems:
 *  get:
 *    summary: Returns a list of orderitems
 *    tags: [OrderItems]
 *    description: Retrieve a list of order items
 *    responses:
 *      200:
 *        description: The list of orderitems
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/OrderItem'
 *        
 */
router.get('/orderitems', orderItemController.getOrderItems);


/**
 * @swagger
 * /api/orderitems/{shapeId}:
 *  get:
 *    summary: Get the order item by id
 *    tags: [OrderItems]
 *    parameters:
 *      - in: path
 *        name: orderItemId
 *        schema:
 *          type: string
 *        required: true
 *        description: The orderItemId
 *    responses:
 *      200:
 *        description: The order item description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/OrderItem'
 *      404:
 *        description: The order item was not found
 */
router.get('/orderitems/:orderItemId', orderItemController.getOrderItemById);


/**
 * @swagger
 *  /api/orderitems:
 *    post:
 *      summary: Creates a new order item
 *      tags: [OrderItems]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ShapeUpdate'
 *      responses:
 *        200:
 *          description: The order item was succesfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/OrderItem'
 *        500:
 *          description: An error accured on the server
 */
router.post('/orderitems', orderItemController.createOrderItem);


/**
 * @swagger
 * /api/orderitems/{orderItemId}:
 *  put:
 *    summary: Update the order item by id
 *    tags: [OrderItems]
 *    parameters:
 *      - in: path
 *        name: orderItemId
 *        schema:
 *          type: string
 *        required: true
 *        description: The orderItemId
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ShapeUpdate'
 *    responses:
 *      200:
 *        description: The order item was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/OrderItem'
 *      404:
 *        description: The order item was not found
 *      500:
 *        description: An error accured on the server    
 */
router.put('/orderitems/:orderItemId', orderItemController.updateOrderItem);


/**
 * @swagger
 *  /api/orderitems/{orderItemId}:
 *    delete:
 *      summary: Remove the order item by ID
 *      tags: [OrderItems]
 *      parameters:
 *        - in: path
 *          name: orderItemId
 *          schema: 
 *            type: string
 *          required: true
 *          description: ID of the order item
 *      responses:
 *        200:
 *          description: The order item was deleted
 *        404:
 *          description: The order item was not found
 */
router.delete('/orderitems/:orderItemId', orderItemController.deleteOrderItem);



/**
 * CarOption routes
 */
router.get('/caroptions', carOptionController.getCarOptions);
router.get('/caroptions/:carOptionId', carOptionController.getCarOptionById);
router.post('/caroptions', carOptionController.createCarOption);
router.put('/caroptions/:carOptionId', carOptionController.updateCarOption);
router.delete('/caroptions/:carOptionId', carOptionController.deleteCarOption);


export default router;

/**
 * Swagger Components
 */

/**
 * Schema's
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Shape:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: ID of the shape
 *        name:
 *          type: string
 *          description: The name of the shape
 *        imgUrl:
 *          type: string
 *          description: The url to the shape svg
 *        createdAt:
 *          type: Date
 *          description: The created date of the shape
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the shape
 *      example:
 *        id: 1
 *        name: NameOfShape
 *        imgUrl: ./data/NameOfShape.svg
 *    ShapeWithCars:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: ID of the shape
 *        name:
 *          type: string
 *          description: The name of the shape
 *        imgUrl:
 *          type: string
 *          description: The url to the shape svg
 *        createdAt:
 *          type: Date
 *          description: The created date of the shape
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the shape
 *        Cars:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Car'
 *      example:
 *        id: 1
 *        name: NameOfShape
 *        imgUrl: ./data/NameOfShape.svg
 *        Cars:
 *          - id: 1
 *            name: A1 Sportback
 *            teaserImgUrl: /static/images/cars/audi/Audi__A1 Sportback.png
 *            price: 113300,
 *            isAutomatic: false
 *            fuelType: liquified Petroleum
 *            engineCapacity: 1400
 *            horsePower: 400
 *            doors: 3
 *            seats: 8
 *            gears: 11
 *            fuelConsumption: 7.9
 *            topSpeed: 190
 *            acceleration: 8.3
 *            breakTIme: 3.9
 *            BrandId: 1
 *            ShapeId: 4
 *          - id: 101
 *            name: X1 sDrive28i
 *            teaserImgUrl: /static/images/cars/bmw/BMW__X1 sDrive28i.png
 *            price: 48500
 *            isAutomatic: true
 *            fuelType: Ethanol
 *            engineCapacity: 800
 *            horsePower: 210
 *            doors: 3
 *            seats: 5
 *            gears: 13
 *            fuelConsumption: 4
 *            topSpeed: 410
 *            acceleration: 5.6
 *            breakTIme: 5.4
 *            BrandId: 2
 *            ShapeId: 1
 *    ShapeUpdate:
 *      type: object
 *      required:
 *        - name
 *        - imgUrl
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the shape
 *        imgUrl:
 *          type: string
 *          description: The url to the shape svg
 *      example:
 *        name: NameOfShape
 *        imgUrl: ./data/NameOfShape.svg
 *    Brand:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: ID of the brand
 *        name:
 *          type: string
 *          description: The name of the brand
 *        url:
 *          type: string
 *          description: The url to the official page of the specific brand
 *        imgUrl:
 *          type: string
 *          description: The url to the brand image
 *        createdAt:
 *          type: Date
 *          description: The created date of the shape
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the shape
 *      example:
 *        id: 1
 *        name: audi
 *        url: 
 *        imgUrl: 
 *    BrandWithCars:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: ID of the brand
 *        name:
 *          type: string
 *          description: The name of the brand
 *        url:
 *          type: string
 *          description: The url to the official page of the specific brand
 *        imgUrl:
 *          type: string
 *          description: The url to the brand image
 *        createdAt:
 *          type: Date
 *          description: The created date of the shape
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the shape
 *        Cars:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Car'
 *      example:
 *        id: 1
 *        name: audi
 *        url: 
 *        imgUrl: 
 *        Cars:
 *          - id: 1
 *            name: A1 Sportback
 *            teaserImgUrl: /static/images/cars/audi/Audi__A1 Sportback.png
 *            price: 113300,
 *            isAutomatic: false
 *            fuelType: liquified Petroleum
 *            engineCapacity: 1400
 *            horsePower: 400
 *            doors: 3
 *            seats: 8
 *            gears: 11
 *            fuelConsumption: 7.9
 *            topSpeed: 190
 *            acceleration: 8.3
 *            breakTIme: 3.9
 *            BrandId: 1
 *            ShapeId: 4
 *          - id: 101
 *            name: X1 sDrive28i
 *            teaserImgUrl: /static/images/cars/bmw/BMW__X1 sDrive28i.png
 *            price: 48500
 *            isAutomatic: true
 *            fuelType: Ethanol
 *            engineCapacity: 800
 *            horsePower: 210
 *            doors: 3
 *            seats: 5
 *            gears: 13
 *            fuelConsumption: 4
 *            topSpeed: 410
 *            acceleration: 5.6
 *            breakTIme: 5.4
 *            BrandId: 2
 *            ShapeId: 1
 *    BrandUpdate:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the brand
 *        url:
 *          type: string
 *          description: The url to the official page of the specific brand
 *        imgUrl:
 *          type: string
 *          description: The url to the brand image
 *      example:
 *        name: audi
 *        url: 
 *        imgUrl: 
 *    CarHasOption:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: ID of the car + option combination
 *        price:
 *          type: integer
 *          description: the price for the caroption combinaton
 *        CarId:
 *          type: id
 *          description: The id of the Car which has this caroption-combination (FK)
 *        CarOptionId:
 *          type: id
 *          description: The id of the option this combination reffers to (FK)
 *        createdAt:
 *          type: Date
 *          description: The created date of the car has option combination
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the car has option combination
 *      example:
 *        id: 1
 *        price: 800
 *        CarId: 1
 *        CarOptionId: 13
 *    CarHasOptionUpdate:
 *      type: object
 *      required:
 *        - price
 *        - CarId
 *        - CarOptionId
 *      properties:
 *        price:
 *          type: integer
 *          description: the price for the caroption combinaton
 *        CarId:
 *          type: id
 *          description: The id of the Car which has this caroption-combination (FK)
 *        CarOptionId:
 *          type: id
 *          description: The id of the option this combination reffers to (FK)
 *      example:
 *        price: 800
 *        CarId: 1
 *        CarOptionId: 13
 *    CarReview:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: ID of the order
 *        description:
 *          type: string
 *          description: full review for the car
 *        rating:
 *          type: integer
 *          description: Rating for the car going from 0 - 5
 *        CarId:
 *          type: id
 *          description: The id of the Car which the review reffers to (FK)
 *        UserId:
 *          type: id
 *          description: The id of the User who made the review (FK)
 *        createdAt:
 *          type: Date
 *          description: The created date of the shape
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the shape
 *      example:
 *        id: 1
 *        description: The van is gorgeous, 4 stars!
 *        rating: 4
 *        CarId: 67
 *        UserId: 18
 *    CarReviewUpdate:
 *      type: object
 *      required:
 *        - CarId
 *        - UserId
 *        - desription
 *        - rating
 *      properties:
 *        description:
 *          type: string
 *          description: full review for the car
 *        rating:
 *          type: integer
 *          description: Rating for the car going from 0 - 5
 *        CarId:
 *          type: id
 *          description: The id of the Car which the review reffers to (FK)
 *        UserId:
 *          type: id
 *          description: The id of the User who made the review (FK)
 *      example:
 *        description: The van is gorgeous, 4 stars!
 *        rating: 4
 *        CarId: 67
 *        UserId: 18
 *    Order:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: ID of the order
 *        orderDate:
 *          type: Date
 *          description: The date of the order
 *        state:
 *          type: string
 *          description: The state of the order
 *        UserId:
 *          type: id
 *          description: The id of the User who orderd it (FK)
 *        createdAt:
 *          type: Date
 *          description: The created date of the shape
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the shape
 *      example:
 *        id: 1
 *        orderDate: 2021-02-08T17:45:38.941Z
 *        state: shipped
 *        UserId: 15
 *    OrderUpdate:
 *      type: object
 *      required:
 *        - UserId
 *        - state
 *      properties:
 *        state:
 *          type: string
 *          description: The state of the order
 *        UserId:
 *          type: id
 *          description: The id of the User who orderd it (FK)
 *      example:
 *        id: 1
 *        orderDate: 2021-02-08T17:45:38.941Z
 *        state: shipped
 *        UserId: 15
 *    OrderItem:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: ID of the orderItem
 *        quantity:
 *          type: integer
 *          description: amount of that specified orderItems
 *        orderItemTableId:
 *          type: integer
 *          description: ID of the linked item, can be from cars or car_has_options, items is polymorphic (FK)
 *        orderItemTableType:
 *          type: string
 *          description: The name of the linked type, either car or car_has_option
 *        OrderId:
 *          type: id
 *          description: The id of the linked order (FK)
 *        createdAt:
 *          type: Date
 *          description: The created date of the shape
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the shape
 *      example:
 *        id: 1
 *        quantity: 5
 *        orderItemTableId: 67
 *        orderItemTableType: car
 *        OrderId: 15
 *    OrderItemUpdate:
 *      type: object
 *      required:
 *        - quantity
 *        - OrderId
 *      properties:
 *        quantity:
 *          type: integer
 *          description: amount of that specified orderItems
 *        orderItemTableId:
 *          type: integer
 *          description: ID of the linked item, can be from cars or car_has_options, items is polymorphic (FK)
 *        orderItemTableType:
 *          type: string
 *          description: The name of the linked type, either car or car_has_option
 *        OrderId:
 *          type: id
 *          description: The id of the linked order (FK)
 *      example:
 *        quantity: 5
 *        orderItemTableId: 67
 *        orderItemTableType: car
 *        OrderId: 15
 *    Payment:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: ID of the payment
 *        paymentMethod:
 *          type: string
 *          description: The payment used for the order
 *        status:
 *          type: string
 *          description: The status of the payment
 *        OrderId:
 *          type: id
 *          description: The id of the order which it refers to (FK)
 *        createdAt:
 *          type: Date
 *          description: The created date of the shape
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the shape
 *      example:
 *        id: 1
 *        paymentMethod: american express
 *        status: payed
 *        OrderId: 1
 *    PaymentUpdate:
 *      type: object
 *      required: 
 *        - paymentMethod
 *        - status
 *        - OrderId
 *      properties:
 *        paymentMethod:
 *          type: string
 *          description: The payment used for the order
 *        status:
 *          type: string
 *          description: The status of the payment
 *        OrderId:
 *          type: id
 *          description: The id of the order which it refers to (FK)
 *      example:
 *        paymentMethod: visa
 *        status: declined
 *        OrderId: 7
 *    Car:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: ID of the car
 *        name:
 *          type: string
 *          description: The name of the Car
 *        teaserImgUrl:
 *          type: string
 *          description: Path to the Img of the car
 *        price:
 *          type: integer
 *          description: The Base price of the car
 *        isAutomatic:
 *          type: boolean
 *          description: Defines if car is automatic or not
 *        fuelType:
 *          type: string
 *          description: Defines the fuel the car consumes
 *        engineCapacity:
 *          type: integer
 *          description: Amount of cc the engine has
 *        horsePower:
 *          type: integer
 *          description: Amount of HP for the car
 *        doors:
 *          type: integer
 *          description: Amount of doors the car has
 *        seats:
 *          type: integer
 *          description: Amount of seats the car has
 *        gears:
 *          type: integer
 *          description: Amount of gears the car can switch between
 *        fuelConsumption:
 *          type: decimal
 *          description: Amount of fuel which is consumed /100km
 *        topSpeed:
 *          type: integer
 *          description: MAx amount of the car in km/h
 *        acceleration:
 *          type: decimal
 *          description: Time it takes for the car to reach 100m in seconds
 *        breakTIme:
 *          type: integer
 *          description: Time it takes for the car to get to a full stop in seconds
 *        BrandId:
 *          type: id
 *          description: The id of the Brand for this car (FK)
 *        ShapeId:
 *          type: id
 *          description: The id of the Shape for this car (FK)
 *        createdAt:
 *          type: Date
 *          description: The created date of the shape
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the shape
 *      example:
 *        id: 1
 *        name: A1 Sportback
 *        teaserImgUrl: /static/images/cars/audi/Audi__A1 Sportback.png
 *        price: 113300,
 *        isAutomatic: false
 *        fuelType: liquified Petroleum
 *        engineCapacity: 1400
 *        horsePower: 400
 *        doors: 3
 *        seats: 8
 *        gears: 11
 *        fuelConsumption: 7.9
 *        topSpeed: 190
 *        acceleration: 8.3
 *        breakTIme: 3.9
 *        BrandId: 1
 *        ShapeId: 4
 *    CarUpdate:
 *      type: object
 *      required: 
 *        - paymentMethod
 *        - status
 *        - OrderId
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the Car
 *        teaserImgUrl:
 *          type: string
 *          description: Path to the Img of the car
 *        price:
 *          type: integer
 *          description: The Base price of the car
 *        isAutomatic:
 *          type: boolean
 *          description: Defines if car is automatic or not
 *        fuelType:
 *          type: string
 *          description: Defines the fuel the car consumes
 *        engineCapacity:
 *          type: integer
 *          description: Amount of cc the engine has
 *        horsePower:
 *          type: integer
 *          description: Amount of HP for the car
 *        doors:
 *          type: integer
 *          description: Amount of doors the car has
 *        seats:
 *          type: integer
 *          description: Amount of seats the car has
 *        gears:
 *          type: integer
 *          description: Amount of gears the car can switch between
 *        fuelConsumption:
 *          type: decimal
 *          description: Amount of fuel which is consumed /100km
 *        topSpeed:
 *          type: integer
 *          description: MAx amount of the car in km/h
 *        acceleration:
 *          type: decimal
 *          description: Time it takes for the car to reach 100m in seconds
 *        breakTIme:
 *          type: integer
 *          description: Time it takes for the car to get to a full stop in seconds
 *        BrandId:
 *          type: id
 *          description: The id of the Brand for this car (FK)
 *        ShapeId:
 *          type: id
 *          description: The id of the Shape for this car (FK)
 *      example:
 *        name: A1 Sportback
 *        teaserImgUrl: /static/images/cars/audi/Audi__A1 Sportback.png
 *        price: 113300,
 *        isAutomatic: false
 *        fuelType: liquified Petroleum
 *        engineCapacity: 1400
 *        horsePower: 400
 *        doors: 3
 *        seats: 8
 *        gears: 11
 *        fuelConsumption: 7.9
 *        topSpeed: 190
 *        acceleration: 8.3
 *        breakTIme: 3.9
 *        BrandId: 1
 *        ShapeId: 4
 */


/**
 * Tags
 */

/**
 * @swagger
 * tags:
 *  - name: Cars
 *    description: Different car
 *  - name: Shapes
 *    description: Different car-shapes
 *  - name: Brands
 *    description: Different brand
 *  - name: CarColours
 *    description: Different car-Colour
 *  - name: Users
 *    description: User
 *  - name: CarReviews
 *    description: Different car-reviews
 *  - name: Profiles
 *    description: Different profiles
 *  - name: Orders
 *    description: Different orders
 *  - name: CarOption
 *    description: Different car-options
 *  - name: CarHasOptions
 *    description: Different car_has_options
 *  - name: OrderItems
 *    description: Different OrderItems
 *  - name: Payments
 *    description: Different Payments
 *  - name: Promotions
 *    description: Different promotions
 */