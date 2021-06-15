import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all payments 
 */
const getPayments = async (req, res, next) => {
	try {
		// Get Payments from database
		const payments = await database.Payment.findAll();

		// Send response
		res.status(200).json(payments);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific payment by ID
 */
const getPaymentById = async (req, res, next) => {
  try {
    // Get paymentId parameter
    const { paymentId } = req.params;

    // Get specific payment from database
    const payment = await database.Payment.findByPk(paymentId);

    if (payment === null) {
			throw new HTTPError(`Could not found the payment with id ${paymentId}!`, 404);
		}
		// Send response
		res.status(200).json(payment);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get a specific payment by User-ID
 */
const getPaymentByUserId = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;

    // Get specific payment from database
    const payment = await database.Payment.findOne({
      where: {
        userId: userId
      }
    });

    if (payment === null) {
			throw new HTTPError(`Could not find the payment with UserId ${userId}!`, 404);
		}
		// Send response
		res.status(200).json(payment);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get a specific payment by Order-ID
 */
const getPaymentByOrderId = async (req, res, next) => {
  try {
    // Get userId parameter
    const { orderId } = req.params;

    // Get specific payment from database
    const payment = await database.Payment.findOne({
      where: {
        orderId: orderId
      }
    });

    if (payment === null) {
			throw new HTTPError(`Could not find the payment with OrderId ${orderId}!`, 404);
		}
		// Send response
		res.status(200).json(payment);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new payment
 */
const createPayment = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a payment
    const createdModel = await database.Payment.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing payment with ID
 */
const updatePayment = async (req, res, next) => {
  try {
    // get paymentId parameter
    const { paymentId } = req.params;

    //get specific payment from database
    const payment = await database.Payment.findByPk(paymentId);

    if (payment === null) {
      throw new HTTPError(`Could not find the payment with id ${paymentId}!`, 404);
    }

    // Update a specific payment
    const model = req.body;
    const updatedUser = await database.Payment.update(model, {
      where: {
        id: paymentId,
      },
    });

		// Send response
		res.status(201).json(updatedUser);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing payment with ID
 */
 const deletePayment = async (req, res, next) => {
  try {
    // get paymentId parameter
    const { paymentId } = req.params;

    //get specific payment from database
    const payment = await database.Payment.findByPk(paymentId);

    if (payment === null) {
      throw new HTTPError(`Could not find the payment with id ${paymentId}!`, 404);
    }

    // Delete a payment with specified id
    const message = await database.Payment.destroy({
      where: {
        id: paymentId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getPayments,
  getPaymentById,
  getPaymentByUserId,
  getPaymentByOrderId,
  createPayment,
  updatePayment,
  deletePayment,
 };