import { handleHTTPError, HTTPError } from '../../utils';
import database from '../../database';

/**
 * Get all cars 
 */
const getCars = async (req, res, next) => {
	try {
		// Get Cars from database
		const cars = await database.Car.findAll();

		// Send response
		res.status(200).json(cars);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/**
 * Get a specific car by ID
 */
const getCarById = async (req, res, next) => {
  try {
    // Get carId parameter
    const { carId } = req.params;

    // Get specific car from database
    const car = await database.Car.findByPk(carId);

    if (car === null) {
			throw new HTTPError(`Could not found the car with id ${carId}!`, 404);
		}
		// Send response
		res.status(200).json(car);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Create a new car
 */
const createCar = async (req, res, next) => {
  try {
    // Get body from response
    const model = req.body;

    // Create a car
    const createdModel = await database.Car.create(model)

		// Send response
		res.status(201).json(createdModel);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update an existing car with ID
 */
const updateCar = async (req, res, next) => {
  try {
    // get carId parameter
    const { carId } = req.params;

    //get specific car from database
    const car = await database.Car.findByPk(carId);

    if (car === null) {
      throw new HTTPError(`Could not find the car with id ${carId}!`, 404);
    }

    // Update a specific car
    const model = req.body;
    const updatedCar = await database.Car.update(model, {
      where: {
        id: carId,
      },
    });

		// Send response
		res.status(201).json(updatedCar);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Delete an existing car with ID
 */
 const deleteCar = async (req, res, next) => {
  try {
    // get carId parameter
    const { carId } = req.params;

    //get specific car from database
    const car = await database.Car.findByPk(carId);

    if (car === null) {
      throw new HTTPError(`Could not find the car with id ${carId}!`, 404);
    }

    // Delete a car with specified id
    const message = await database.Car.destroy({
      where: {
        id: carId,
      },
    });

    // Send response
		res.status(200).json(message);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get all Cars by Specific Brand
 */
//!TODO do it with brand-name? with query in stead of endpount?
 const getCarsFromBrandById = async (req, res, next) => {
  try {
    // Get carId parameter
    const { brandId } = req.params;

    // Get all cars from specific Brand by BrandId
    const cars = await database.Car.findAll({
      where: {
        BrandId: brandId
      }
    });

    if (cars === null) {
			throw new HTTPError(`Could not find Cars from sepcific brand with the id ${brandId}!`, 404);
		}
		// Send response
		res.status(200).json(cars);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get all Cars by Specific BrandName
 */
//!TODO do it with brand-name? with query in stead of endpount?
//! include doenst work Brand is not associated to Car!

 const getCarsFromBrandByBrandName = async (req, res, next) => {
  try {
    // Get carId parameter
    const { brandName } = req.params;

    // Get all cars from specific Brand by BrandId
    const cars = await database.Car.findAll({
      include: [{
        model: database.Brand,
        as: 'BrandName',
        //where: { name: brandName}
      }],
      
    });

    if (cars === null) {
			throw new HTTPError(`Could not find Cars from sepcific brand with the id ${brandId}!`, 404);
		}
		// Send response
		res.status(200).json(cars);
  } catch(error) {
    handleHTTPError(error, next);
  }
}

export { 
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
  getCarsFromBrandById,
  getCarsFromBrandByBrandName,
 };