/**
 * Import packages 
 */
import express from 'express';

/**
 * Import custom packages
 */
import * as shapeController from '../controllers/shape.controller';
import * as brandController from '../controllers/brand.controller';
import * as carColourController from '../controllers/carColour.controller';
import * as carReviewController from '../controllers/carReview.controller';
import * as userController from '../controllers/user.controller';
import * as carController from '../controllers/car.controller';
import * as profileController from '../controllers/profile.controller';



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
router.get('/carColours', carColourController.getCarColours);
router.get('/carColours/:carColourId', carColourController.getCarColourById);
router.post('/carColours', carColourController.createCarColour);
router.put('/carColours/:carColourId', carColourController.updateCarColour);
router.delete('/carColours/:carColourId', carColourController.deleteCarColour);

/**
 * CarReview routes
 */
router.get('/carReviews', carReviewController.getCarReviews);
router.get('/carReviews/:carReviewId', carReviewController.getCarReviewById);
router.post('/carReviews', carReviewController.createCarReview);
router.put('/carReviews/:carReviewId', carReviewController.updateCarReview);
router.delete('/carReviews/:carReviewId', carReviewController.deleteCarReview);

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


export default router;