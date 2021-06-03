import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all orderItems 
 */
const getOrderItems = async (req, res, next) => {
	try {
		// Get OrderItems from database
		const orderItems = await database.OrderItem.findAll();

		// Send response
		res.status(200).json(orderItems);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific orderItem by ID
 */
const getOrderItemById = async (req, res, next) => {
  try {
    // Get orderItemId parameter
    const { orderItemId } = req.params;

    // Get specific orderItem from database
    const orderItem = await database.OrderItem.findByPk(orderItemId);

    if (orderItem === null) {
			throw new HTTPError(`Could not found the orderItem with id ${orderItemId}!`, 404);
		}
		// Send response
		res.status(200).json(orderItem);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get a orderItems by orderId
 */
const getOrderItemsByOrderId = async (req, res, next) => {
  try {
    // Get orderId parameter
    const { orderId } = req.params;

    // Get specific orderItem from database
    const orderItem = await database.OrderItem.findAll({
      where:
      {
        OrderId: orderId
      }
    });

    if (orderItem === null) {
			throw new HTTPError(`Could not find the orderItems with orderid ${orderId}!`, 404);
		}
		// Send response
		res.status(200).json(orderItem);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new orderItem
 */
const createOrderItem = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a orderItem
    const createdModel = await database.OrderItem.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing orderItem with ID
 */
const updateOrderItem = async (req, res, next) => {
  try {
    // get orderItemId parameter
    const { orderItemId } = req.params;

    //get specific orderItem from database
    const orderItem = await database.OrderItem.findByPk(orderItemId);

    if (orderItem === null) {
      throw new HTTPError(`Could not find the orderItem with id ${orderItemId}!`, 404);
    }

    // Update a specific orderItem
    const model = req.body;
    const updatedUser = await database.OrderItem.update(model, {
      where: {
        id: orderItemId,
      },
    });

		// Send response
		res.status(201).json(updatedUser);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing orderItem with ID
 */
 const deleteOrderItem = async (req, res, next) => {
  try {
    // get orderItemId parameter
    const { orderItemId } = req.params;

    //get specific orderItem from database
    const orderItem = await database.OrderItem.findByPk(orderItemId);

    if (orderItem === null) {
      throw new HTTPError(`Could not find the orderItem with id ${orderItemId}!`, 404);
    }

    // Delete a orderItem with specified id
    const message = await database.OrderItem.destroy({
      where: {
        id: orderItemId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getOrderItems,
  getOrderItemById,
  getOrderItemsByOrderId,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
 };