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
 *        
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
 *          
 *         
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
 *        description: The book was not found
 *      500:
 *        description: An error accured on the server
 *        
 */
//? add curent data in the input field?
//! TODO : define shapeId in BODY as well? how to link with it?
//! Cannot read property 'update' of undefined
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
router.get('/brands', brandController.getBrands);
router.get('/brands/:brandId', brandController.getBrandById);
router.post('/brands', brandController.createBrand);
router.put('/brands/:brandId', brandController.updateBrand);
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
router.get('/carreviews', carReviewController.getCarReviews);
router.get('/carreviews/:carReviewId', carReviewController.getCarReviewById);
router.post('/carreviews', carReviewController.createCarReview);
router.put('/carreviews/:carReviewId', carReviewController.updateCarReview);
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

/**
 * Car routes
 */
//router.get('/cars/category/:categoryName', carController.getCarsByCategory);
router.get('/cars', carController.getCars);
router.get('/cars/:carId', carController.getCarById);
router.get('/cars/:carId/caroptions', car_has_optionController.getCar_has_optionsByCarId);
router.get('/cars/shapes/:shapeName', carController.getCarsByShapeName);
router.get('/cars/brands/:brandName', carController.getCarsByBrandName);
//router.get('/cars/:carId/carcolours', car_has_colourController.getCar_has_carcoloursByCarId);
//router.get('/cars/brand/:brandId', carController.getCarsFromBrandById);
//test with brandName in stead of Id
//router.get('/cars/:category?', carController.getCars);
router.post('/cars', carController.createCar);
router.put('/cars/:carId', carController.updateCar);
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
router.get('/orders', orderController.getOrders);
router.get('/orders/:orderId', orderController.getOrderById);
router.get('/orders/:orderId/payment', paymentController.getPaymentByUserId);
router.get('/orders/:orderId/orderitems', orderItemController.getOrderItemsByOrderId);
router.post('/orders', orderController.createOrder);
router.put('/orders/:orderId', orderController.updateOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);

/**
 * Car_has_option routes
 */
router.get('/car_has_options', car_has_optionController.getCar_has_options);
router.get('/car_has_options/:car_has_optionId', car_has_optionController.getCar_has_optionById);
router.post('/car_has_options', car_has_optionController.createCar_has_option);
router.put('/car_has_options/:car_has_optionId', car_has_optionController.updateCar_has_option);
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
router.get('/payments', paymentController.getPayments);
router.get('/payments/:paymentId', paymentController.getPaymentById);
router.post('/payments', paymentController.createPayment);
router.put('/payments/:paymentId', paymentController.updatePayment);
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
router.get('/orderitems', orderItemController.getOrderItems);
router.get('/orderitems/:orderItemId', orderItemController.getOrderItemById);
router.post('/orderitems', orderItemController.createOrderItem);
router.put('/orderitems/:orderItemId', orderItemController.updateOrderItem);
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
 *      required:
 *        - name
 *        - imgUrl
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
 */


/**
 * Tags
 */

/**
 * @swagger
 * tags:
 *  name: Shapes
 *  description: Different car-shapes
 *  name: Brands
 *  description: Different brand
 *  name: CarColours
 *  description: Different car-Colour
 *  name: Users
 *  description: User
 *  name: Cars
 *  description: Different car
 *  name: CarReviews
 *  description: Different car-reviews
 *  name: Profiles
 *  description: Different profiles
 *  name: Orders
 *  description: Different orders
 *  name: CarOption
 *  description: Different car-options
 *  name: Car_has_options
 *  description: Different car_has_options
 *  name: OrderItems
 *  description: Different OrderItems
 *  name: Payments
 *  description: Different Payments
 *  name: Promotions
 *  description: Different promotions
 */