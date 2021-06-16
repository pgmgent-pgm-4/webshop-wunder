import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all profiles 
 */
const getProfiles = async (req, res, next) => {
	try {
		// Get Profiles from database
		const profiles = await database.Profile.findAll();

		// Send response
		res.status(200).json(profiles);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific profile by ID
 */
const getProfileById = async (req, res, next) => {
  try {
    // Get profileId parameter
    const { profileId } = req.params;

    // Get specific profile from database
    const profile = await database.Profile.findByPk(profileId);

    if (profile === null) {
			throw new HTTPError(`Could not found the profile with id ${profileId}!`, 404);
		}
		// Send response
		res.status(200).json(profile);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get a specific profile by UserID
 */
const getProfileFromUserById = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;

    // Get specific profile from database by UserId
    const profile = await database.Profile.findOne({
      where: {
        UserId: userId
      },
      include : [
        {
          model: database.User
        }
      ]
    });

    if (profile === null) {
			throw new HTTPError(`Could not find the profile from user with user id ${userId}!`, 404);
		}
		// Send response
		res.status(200).json(profile);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new profile
 */
const createProfile = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a profile
    const createdModel = await database.Profile.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing profile with ID
 */
const updateProfile = async (req, res, next) => {
  try {
    // get profileId parameter
    const { profileId } = req.params;

    //get specific profile from database
    const profile = await database.Profile.findByPk(profileId);

    if (profile === null) {
      throw new HTTPError(`Could not find the profile with id ${profileId}!`, 404);
    }

    // Update a specific profile
    const model = req.body;
    const updatedProfile = await database.Profile.update(model, {
      where: {
        id: profileId,
      },
    });

		// Send response
		res.status(201).json(updatedProfile);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing profile with ID
 */
 const deleteProfile = async (req, res, next) => {
  try {
    // get profileId parameter
    const { profileId } = req.params;

    //get specific profile from database
    const profile = await database.Profile.findByPk(profileId);

    if (profile === null) {
      throw new HTTPError(`Could not find the profile with id ${profileId}!`, 404);
    }

    // Delete a profile with specified id
    const message = await database.Profile.destroy({
      where: {
        id: profileId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getProfiles,
  getProfileById,
  getProfileFromUserById,
  createProfile,
  updateProfile,
  deleteProfile,
 };