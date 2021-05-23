import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all car Colours 
 */
const getCarColours = async (req, res, next) => {
	try {
		// Get CarColours from database
		const carColours = await database.CarColour.findAll();

		// Send response
		res.status(200).json(carColours);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific carColour by ID
 */
const getCarColourById = async (req, res, next) => {
  try {
    // Get carColourId parameter
    const { carColourId } = req.params;

    // Get specific carColour from database
    const carColour = await database.CarColour.findByPk(carColourId);

    if (carColour === null) {
			throw new HTTPError(`Could not found the carColour with id ${carColourId}!`, 404);
		}
		// Send response
		res.status(200).json(carColour);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new carColour
 */
const createCarColour = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a carColour
    const createdModel = await database.CarColour.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing carColour with ID
 */
const updateCarColour = async (req, res, next) => {
  try {
    // get carColourId parameter
    const { carColourId } = req.params;

    //get specific carColour from database
    const carColour = await database.CarColour.findByPk(carColourId);

    if (carColour === null) {
      throw new HTTPError(`Could not find the carColour with id ${carColourId}!`, 404);
    }

    // Update a specific carColour
    const model = req.body;
    const updatedCarColour = await database.CarColour.update(model, {
      where: {
        id: carColourId,
      },
    });

		// Send response
		res.status(201).json(updatedCarColour);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing carColour with ID
 */
 const deleteCarColour = async (req, res, next) => {
  try {
    // get carColourId parameter
    const { carColourId } = req.params;

    //get specific carColour from database
    const shape = await database.CarColour.findByPk(carColourId);

    if (shape === null) {
      throw new HTTPError(`Could not find the carColour with id ${carColourId}!`, 404);
    }

    // Delete a carColour with specified id
    const message = await database.CarColour.destroy({
      where: {
        id: carColourId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getCarColours,
  getCarColourById,
  createCarColour,
  updateCarColour,
  deleteCarColour,
 };