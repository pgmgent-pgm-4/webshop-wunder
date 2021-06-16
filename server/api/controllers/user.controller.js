import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all users 
 */
const getUsers = async (req, res, next) => {
	try {
		// Get Users from database
		const users = await database.User.findAll();

		// Send response
		res.status(200).json(users);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific user by ID
 */
const getUserById = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;

    // Get specific user from database
    const user = await database.User.findByPk(userId);

    if (user === null) {
			throw new HTTPError(`Could not found the user with id ${userId}!`, 404);
		}
		// Send response
		res.status(200).json(user);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new user
 */
const createUser = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a user
    const createdModel = await database.User.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing user with ID
 */
const updateUser = async (req, res, next) => {
  try {
    // get userId parameter
    const { userId } = req.params;

    //get specific user from database
    const user = await database.User.findByPk(userId);

    if (user === null) {
      throw new HTTPError(`Could not find the user with id ${userId}!`, 404);
    }

    // Update a specific user
    const model = req.body;
    const updatedUser = await database.User.update(model, {
      where: {
        id: userId,
      },
    });

		// Send response
		res.status(201).json(updatedUser);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing user with ID
 */
 const deleteUser = async (req, res, next) => {
  try {
    // get userId parameter
    const { userId } = req.params;

    //get specific user from database
    const user = await database.User.findByPk(userId);

    if (user === null) {
      throw new HTTPError(`Could not find the user with id ${userId}!`, 404);
    }

    // Delete a user with specified id
    const message = await database.User.destroy({
      where: {
        id: userId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get all carReviews by UserId
 */
 const getCarReviewsFromUserById = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;

    // Get carReviews from user by id
    const carReviews = await database.CarReview.findAll({
      where: {
        UserId: userId
      },
    });

    if (carReviews === null) {
			throw new HTTPError(`Could not find carReviews from the user with id ${userId}!`, 404);
		}
		// Send response
		res.status(200).json(carReviews);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get profile of User by UserId
 */
 const getProfileFromUserById = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;

    // Get carReviews from user by id
    const userProfile = await database.Profile.findOne({
      where: {
        UserId: userId
      }
    });

    if (userProfile === null) {
			throw new HTTPError(`Could not find the userProfile from the user with id ${userId}!`, 404);
		}
		// Send response
		res.status(200).json(userProfile);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Login a new user
 */
 const loginUser = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;
    console.log('body conteroller', model);

    // Create a user
    const userInDb = await database.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })

    //console.log('userInDb',userInDb);

		// Send response, if null, user is not correct, else user is returned
		res.status(201).json(userInDb);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getCarReviewsFromUserById,
  getProfileFromUserById,
  loginUser
 };