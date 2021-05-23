import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all brands 
 */
const getBrands = async (req, res, next) => {
	try {
		// Get Brands from database
		const brands = await database.Brand.findAll();

		// Send response
		res.status(200).json(brands);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific brand by ID
 */
const getBrandById = async (req, res, next) => {
  try {
    // Get brandId parameter
    const { brandId } = req.params;

    // Get specific brand from database
    const brand = await database.Brand.findByPk(brandId);

    if (brand === null) {
			throw new HTTPError(`Could not found the brand with id ${brandId}!`, 404);
		}
		// Send response
		res.status(200).json(brand);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new brand
 */
const createBrand = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a brand
    const createdModel = await database.Brand.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing brand with ID
 */
const updateBrand = async (req, res, next) => {
  try {
    // get brandId parameter
    const { brandId } = req.params;

    //get specific brand from database
    const brand = await database.Brand.findByPk(brandId);

    if (brand === null) {
      throw new HTTPError(`Could not find the brand with id ${brandId}!`, 404);
    }

    // Update a specific brand
    const model = req.body;
    const updatedBrand = await database.Brand.update(model, {
      where: {
        id: brandId,
      },
    });

		// Send response
		res.status(201).json(updatedBrand);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing brand with ID
 */
 const deleteBrand = async (req, res, next) => {
  try {
    // get brandId parameter
    const { brandId } = req.params;

    //get specific brand from database
    const shape = await database.Brand.findByPk(brandId);

    if (shape === null) {
      throw new HTTPError(`Could not find the brand with id ${brandId}!`, 404);
    }

    // Delete a brand with specified id
    const message = await database.Brand.destroy({
      where: {
        id: brandId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
 };