import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all car_has_options 
 */
const getCar_has_options = async (req, res, next) => {
	try {
		// Get Car_has_options from database
		const car_has_options = await database.Car_has_option.findAll();

		// Send response
		res.status(200).json(car_has_options);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific car_has_option by ID
 */
const getCar_has_optionById = async (req, res, next) => {
  try {
    // Get car_has_optionId parameter
    const { car_has_optionId } = req.params;

    // Get specific car_has_option from database
    const car_has_option = await database.Car_has_option.findByPk(car_has_optionId);

    if (car_has_option === null) {
			throw new HTTPError(`Could not found the car_has_option with id ${car_has_optionId}!`, 404);
		}
		// Send response
		res.status(200).json(car_has_option);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get list of car_has_options by carID
 */
const getCar_has_optionsByCarId = async (req, res, next) => {
  try {
    // Get carId parameter
    const { carId } = req.params;

    // Get specific car_has_options list from database
    const car_has_option = await database.Car_has_option.findAll({
      where: {
        CarId: carId
      }
    });

    if (car_has_option === null) {
			throw new HTTPError(`Could not found the car_has_option list for car with id ${carId}!`, 404);
		}
		// Send response
		res.status(200).json(car_has_option);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new car_has_option
 */
const createCar_has_option = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a car_has_option
    const createdModel = await database.Car_has_option.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing car_has_option with ID
 */
const updateCar_has_option = async (req, res, next) => {
  try {
    // get car_has_optionId parameter
    const { car_has_optionId } = req.params;

    //get specific car_has_option from database
    const car_has_option = await database.Car_has_option.findByPk(car_has_optionId);

    if (car_has_option === null) {
      throw new HTTPError(`Could not find the car_has_option with id ${car_has_optionId}!`, 404);
    }

    // Update a specific car_has_option
    const model = req.body;
    const updatedUser = await database.Car_has_option.update(model, {
      where: {
        id: car_has_optionId,
      },
    });

		// Send response
		res.status(201).json(updatedUser);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing car_has_option with ID
 */
 const deleteCar_has_option = async (req, res, next) => {
  try {
    // get car_has_optionId parameter
    const { car_has_optionId } = req.params;

    //get specific car_has_option from database
    const car_has_option = await database.Car_has_option.findByPk(car_has_optionId);

    if (car_has_option === null) {
      throw new HTTPError(`Could not find the car_has_option with id ${car_has_optionId}!`, 404);
    }

    // Delete a car_has_option with specified id
    const message = await database.Car_has_option.destroy({
      where: {
        id: car_has_optionId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getCar_has_options,
  getCar_has_optionById,
  getCar_has_optionsByCarId,
  createCar_has_option,
  updateCar_has_option,
  deleteCar_has_option,
 };