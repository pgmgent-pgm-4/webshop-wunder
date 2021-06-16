import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all car reviews 
 */
const getCarReviews = async (req, res, next) => {
	try {
		// Get CarReviews from database
		const CarReviews = await database.CarReview.findAll();

		// Send response
		res.status(200).json(CarReviews);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific carReview by ID
 */
const getCarReviewById = async (req, res, next) => {
  try {
    // Get carReviewId parameter
    const { carReviewId } = req.params;

    // Get specific carReview from database
    const carReview = await database.CarReview.findByPk(carReviewId);

    if (carReview === null) {
			throw new HTTPError(`Could not found the carReview with id ${carReviewId}!`, 404);
		}
		// Send response
		res.status(200).json(carReview);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get carReviews from user by UserID
 */
const getCarReviewsByUserId = async (req, res, next) => {
  try {
    // Get carReviewId parameter
    const { userId } = req.params;

    // Get carReviews from database
    const carReviews = await database.CarReview.findAll({
      where: {
        UserId: userId
      }
    });

    if (carReviews === null) {
			throw new HTTPError(`Could not find carReviews from user with id ${userId}!`, 404);
		}
		// Send response
		res.status(200).json(carReviews);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get carReviews for cars by CarId
 */
const getCarReviewsByCarId = async (req, res, next) => {
  try {
    // Get carReviewId parameter
    const { carId } = req.params;

    // Get carReviews from database
    const carReviews = await database.CarReview.findAll({
      where: {
        CarId: carId
      }
    });

    if (carReviews === null) {
			throw new HTTPError(`Could not find carReviews for car with id ${carId}!`, 404);
		}
		// Send response
		res.status(200).json(carReviews);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new carReview
 */
const createCarReview = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a carReview
    const createdModel = await database.CarReview.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing carReview with ID
 */
const updateCarReview = async (req, res, next) => {
  try {
    // get carReviewId parameter
    const { carReviewId } = req.params;

    //get specific carReview from database
    const carReview = await database.CarReview.findByPk(carReviewId);

    if (carReview === null) {
      throw new HTTPError(`Could not find the carReview with id ${carReviewId}!`, 404);
    }

    // Update a specific carReview
    const model = req.body;
    const updatedCarReview = await database.CarReview.update(model, {
      where: {
        id: carReviewId,
      },
    });

		// Send response
		res.status(201).json(updatedCarReview);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing carReview with ID
 */
 const deleteCarReview = async (req, res, next) => {
  try {
    // get carReviewId parameter
    const { carReviewId } = req.params;

    //get specific carReview from database
    const shape = await database.CarReview.findByPk(carReviewId);

    if (shape === null) {
      throw new HTTPError(`Could not find the carReview with id ${carReviewId}!`, 404);
    }

    // Delete a carReview with specified id
    const message = await database.CarReview.destroy({
      where: {
        id: carReviewId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getCarReviews,
  getCarReviewById,
  getCarReviewsByUserId,
  getCarReviewsByCarId,
  createCarReview,
  updateCarReview,
  deleteCarReview,
 };