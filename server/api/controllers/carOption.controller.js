import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all carOptions 
 */
const getCarOptions = async (req, res, next) => {
	try {
		// Get CarOptions from database
		const carOptions = await database.CarOption.findAll();

		// Send response
		res.status(200).json(carOptions);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific carOption by ID
 */
const getCarOptionById = async (req, res, next) => {
  try {
    // Get carOptionId parameter
    const { carOptionId } = req.params;

    // Get specific carOption from database
    const carOption = await database.CarOption.findByPk(carOptionId);

    if (carOption === null) {
			throw new HTTPError(`Could not found the carOption with id ${carOptionId}!`, 404);
		}
		// Send response
		res.status(200).json(carOption);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new carOption
 */
const createCarOption = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a carOption
    const createdModel = await database.CarOption.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing carOption with ID
 */
const updateCarOption = async (req, res, next) => {
  try {
    // get carOptionId parameter
    const { carOptionId } = req.params;

    //get specific carOption from database
    const carOption = await database.CarOption.findByPk(carOptionId);

    if (carOption === null) {
      throw new HTTPError(`Could not find the carOption with id ${carOptionId}!`, 404);
    }

    // Update a specific carOption
    const model = req.body;
    const updatedUser = await database.CarOption.update(model, {
      where: {
        id: carOptionId,
      },
    });

		// Send response
		res.status(201).json(updatedUser);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing carOption with ID
 */
 const deleteCarOption = async (req, res, next) => {
  try {
    // get carOptionId parameter
    const { carOptionId } = req.params;

    //get specific carOption from database
    const carOption = await database.CarOption.findByPk(carOptionId);

    if (carOption === null) {
      throw new HTTPError(`Could not find the carOption with id ${carOptionId}!`, 404);
    }

    // Delete a carOption with specified id
    const message = await database.CarOption.destroy({
      where: {
        id: carOptionId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getCarOptions,
  getCarOptionById,
  createCarOption,
  updateCarOption,
  deleteCarOption,
 };