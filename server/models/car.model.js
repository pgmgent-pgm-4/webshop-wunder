import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Car extends Model {
    static associate(models) {
      this.hasMany(models.CarReview, {
        onDelete: "cascade"
      });
      this.hasMany(models.Car_has_option, {
        onDelete: "cascade"
      });
      this.hasMany(models.Promotion, {
        onDelete: "cascade"
      });

      this.hasMany(models.OrderItem, {
        foreignKey: 'orderItemTableId',
        constraints: false,
        scope: {
          orderItemTableType: 'car'
        },
      });
    }
  }

  Car.init(
    {
      //id
      //brandId
      //shapeId
      //colourId
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      isAutomatic: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      fuelType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      engineCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      horsePower: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      doors: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      seats: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gears: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fuelConsumption: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      topSpeed: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      acceleration: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: 'Car',
    },
  );

  return Car;
}