import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all shapes 
 */
const getShapes = async (req, res, next) => {
	try {
		// Get Shapes from database
		const shapes = await database.Shape.findAll();

		// Send response
		res.status(200).json(shapes);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific shape by ID
 */
const getShapeById = async (req, res, next) => {
  try {
    // Get shapeId parameter
    const { shapeId } = req.params;

    // Get specific shape from database
    const shape = await database.Shape.findByPk(shapeId);

    if (shape === null) {
			throw new HTTPError(`Could not found the shape with id ${shapeId}!`, 404);
		}
		// Send response
		res.status(200).json(shape);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new shape
 */
const createShape = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a shape
    const createdModel = await database.Shape.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing shape with ID
 */
const updateShape = async (req, res, next) => {
  try {
    // get shapeId parameter
    const { shapeId } = req.params;
    console.log(shapeId);

    //get specific shape from database
    const shape = await database.Shape.findByPk(shapeId);
    console.log('shape from db:',shape);

    if (shape === null) {
      throw new HTTPError(`Could not find the shape with id ${shapeId}!`, 404);
    }

    // Update a specific shape
    const model = req.body;
    const updatedUser = await database.Shape.update(model, {
      where: {
        id: shapeId,
      },
    });

		// Send response
		res.status(201).json(updatedUser);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing shape with ID
 */
 const deleteShape = async (req, res, next) => {
  try {
    // get shapeId parameter
    const { shapeId } = req.params;

    //get specific shape from database
    const shape = await database.Shape.findByPk(shapeId);

    if (shape === null) {
      throw new HTTPError(`Could not find the shape with id ${shapeId}!`, 404);
    }

    // Delete a shape with specified id
    const message = await database.Shape.destroy({
      where: {
        id: shapeId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getShapes,
  getShapeById,
  createShape,
  updateShape,
  deleteShape,
 };