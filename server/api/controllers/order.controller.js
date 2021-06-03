import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all orders 
 */
const getOrders = async (req, res, next) => {
	try {
		// Get Orders from database
		const orders = await database.Order.findAll();

		// Send response
		res.status(200).json(orders);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific order by ID
 */
const getOrderById = async (req, res, next) => {
  try {
    // Get orderId parameter
    const { orderId } = req.params;

    // Get specific order from database
    const order = await database.Order.findByPk(orderId);

    if (order === null) {
			throw new HTTPError(`Could not found the order with id ${orderId}!`, 404);
		}
		// Send response
		res.status(200).json(order);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get orders by a specific UserID
 */
const getOrdersFromUserById = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;

    // Get list of orders from Database
    const orders = await database.Order.findAll({
      where: {
        UserId: userId
      }
    });

    if (orders === null) {
			throw new HTTPError(`Could not find the orders from user with id ${userId}!`, 404);
		}
		// Send response
		res.status(200).json(orders);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new order
 */
const createOrder = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a order
    const createdModel = await database.Order.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing order with ID
 */
const updateOrder = async (req, res, next) => {
  try {
    // get orderId parameter
    const { orderId } = req.params;

    //get specific order from database
    const order = await database.Order.findByPk(orderId);

    if (order === null) {
      throw new HTTPError(`Could not find the order with id ${orderId}!`, 404);
    }

    // Update a specific order
    const model = req.body;
    const updatedUser = await database.Order.update(model, {
      where: {
        id: orderId,
      },
    });

		// Send response
		res.status(201).json(updatedUser);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing order with ID
 */
 const deleteOrder = async (req, res, next) => {
  try {
    // get orderId parameter
    const { orderId } = req.params;

    //get specific order from database
    const order = await database.Order.findByPk(orderId);

    if (order === null) {
      throw new HTTPError(`Could not find the order with id ${orderId}!`, 404);
    }

    // Delete a order with specified id
    const message = await database.Order.destroy({
      where: {
        id: orderId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getOrders,
  getOrderById,
  getOrdersFromUserById,
  createOrder,
  updateOrder,
  deleteOrder,
 };