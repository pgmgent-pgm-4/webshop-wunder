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
 *  /api/shapes:
 *    get:
 *      summary: Returns a list of shapes
 *      description: Retrieve a list of shapes. Can be used to populate a list of shapes when prototyping or testing an API.*
 *      responses:
 *        200:
 *          description: A JSON array of shapes
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          description: The category ID.
 *                          example: 1
 *                        name:
 *                          type: string
 *                          description: The shape name.
 *                          example: Coupé
 *                        imgUrl:
 *                          type: string
 *                          description: The url to the shape svg
 *                          example: ./data/coupé.svg
 *                        createdAt:
 *                          type: Date
 *                          description: The created date of the shape
 *                          example: FILL IN
 *                        updatedAt:
 *                          type: Date
 *                          description: The updated date of the shape
 *                          example: FILL IN
 */
router.get('/shapes', shapeController.getShapes);
/**
 * @swagger
 *  /api/shapes/{shapeId}:
 *    get:
 *      summary: Returns a shape by ID
 *      parameters:
 *        - name: shapeId
 *          in: path
 *          required: true
 *          description: Numeric ID of the shape to get
 *          schema:
 *            type: integer
 *            minimum: 1
 *            default: 1
 *      responses:
 *        200:
 *          description: A JSON object of a single shape
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                        description: The category ID.
 *                        example: 1
 *                      name:
 *                        type: string
 *                        description: The shape name.
 *                        example: Coupé
 *                      imgUrl:
 *                        type: string
 *                        description: The url to the shape svg
 *                        example: ./data/coupé.svg
 *                      createdAt:
 *                        type: Date
 *                        description: The created date of the shape
 *                        example: FILL IN
 *                      updatedAt:
 *                        type: Date
 *                        description: The updated date of the shape
 *                        example: FILL IN
 */
router.get('/shapes/:shapeId', shapeController.getShapeById);
/**
 * @swagger
 *  /api/shapes:
 *    post:
 *      summary: Creates a shape
 *      requestBody:
 *        description: Create a new shape with the given name and imgUrl
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: The shape name.
 *                  example: ShapeName
 *                imgUrl:
 *                  type: string
 *                  description: The url to the shape svg
 *                  example: ./data/image-for-shape.svg
 *      responses:
 *        '201':
 *          description: Created a new shape
 *         
 */
router.post('/shapes', shapeController.createShape);
/**
 * @swagger
 *  /api/shapes/{shapeId}:
 *    put:
 *      summary: Edit a shape by ID
 *      parameters:
 *        - name: shapeId
 *          in: path
 *          description: ID of the shape to delete
 *          required: true
 *          type: integer
 *      requestBody:
 *        description: Update an existing shape
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: The shape name.
 *                  example: editedShapeName
 *                imgUrl:
 *                  type: string
 *                  description: The url to the shape svg
 *                  example: ./data/image-for-shape.svg
 *      responses:
 *        204:
 *          description: Shape deleted
 */
//? add curent data in the input field?
//! TODO : define shapeId in BODY as well? how to link with it?
//! Cannot read property 'update' of undefined
router.put('/shapes/:shapeId', shapeController.updateShape);
/**
 * @swagger
 *  /api/shapes/{shapeId}:
 *    delete:
 *      summary: Delete a shape by ID
 *      parameters:
 *        - name: shapeId
 *          in: path
 *          description: ID of the shape to delete
 *          required: true
 *          type: integer
 *      responses:
 *        204:
 *          description: Shape deleted
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
router.get('/users/:userId/carReviews', userController.getCarReviewsFromUserById);
router.get('/users/:userId/profile', userController.getProfileFromUserById);
router.post('/users', userController.createUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

/**
 * Car routes
 */
router.get('/cars/:category', carController.getCars);
//router.get('/cars/:carId', carController.getCarById);
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