import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all car_has_colours 
 */
const getCar_has_colours = async (req, res, next) => {
	try {
		// Get Car_has_colours from database
		const car_has_colours = await database.Car_has_colour.findAll();

		// Send response
		res.status(200).json(car_has_colours);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific car_has_colour by ID
 */
const getCar_has_colourById = async (req, res, next) => {
  try {
    // Get car_has_colourId parameter
    const { car_has_colourId } = req.params;

    // Get specific car_has_colour from database
    const car_has_colour = await database.Car_has_colour.findByPk(car_has_colourId);

    if (car_has_colour === null) {
			throw new HTTPError(`Could not found the car_has_colour with id ${car_has_colourId}!`, 404);
		}
		// Send response
		res.status(200).json(car_has_colour);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get list of car_has_colours by carID
 */
const getCar_has_coloursByCarId = async (req, res, next) => {
  try {
    // Get carId parameter
    const { carId } = req.params;

    // Get specific car_has_colours list from database
    const car_has_colour = await database.Car_has_colour.findAll({
      where: {
        CarId: carId
      }
    });

    if (car_has_colour === null) {
			throw new HTTPError(`Could not found the car_has_colour list for car with id ${carId}!`, 404);
		}
		// Send response
		res.status(200).json(car_has_colour);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new car_has_colour
 */
const createCar_has_colour = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a car_has_colour
    const createdModel = await database.Car_has_colour.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing car_has_colour with ID
 */
const updateCar_has_colour = async (req, res, next) => {
  try {
    // get car_has_colourId parameter
    const { car_has_colourId } = req.params;

    //get specific car_has_colour from database
    const car_has_colour = await database.Car_has_colour.findByPk(car_has_colourId);

    if (car_has_colour === null) {
      throw new HTTPError(`Could not find the car_has_colour with id ${car_has_colourId}!`, 404);
    }

    // Update a specific car_has_colour
    const model = req.body;
    const updatedUser = await database.Car_has_colour.update(model, {
      where: {
        id: car_has_colourId,
      },
    });

		// Send response
		res.status(201).json(updatedUser);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing car_has_colour with ID
 */
 const deleteCar_has_colour = async (req, res, next) => {
  try {
    // get car_has_colourId parameter
    const { car_has_colourId } = req.params;

    //get specific car_has_colour from database
    const car_has_colour = await database.Car_has_colour.findByPk(car_has_colourId);

    if (car_has_colour === null) {
      throw new HTTPError(`Could not find the car_has_colour with id ${car_has_colourId}!`, 404);
    }

    // Delete a car_has_colour with specified id
    const message = await database.Car_has_colour.destroy({
      where: {
        id: car_has_colourId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getCar_has_colours,
  getCar_has_colourById,
  getCar_has_coloursByCarId,
  createCar_has_colour,
  updateCar_has_colour,
  deleteCar_has_colour,
 };