import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Car extends Model {
    static associate(models) {
      this.belongsTo(models.Brand, {
        foreignKey : {
          allowNull: false
        }
      })

      this.belongsTo(models.Shape, {
        foreignKey : {
          allowNull: false
        }
      })

      this.hasMany(models.CarReview, {
        foreignKey : {
          allowNull: false
        },
        onDelete: "cascade"
      }),

      this.hasMany(models.Car_has_option, {
        foreignKey : {
          allowNull: true
        },
        onDelete: "cascade"
      }),

      this.hasMany(models.Promotion, {
        foreignKey : {
          allowNull: false
        },
        onDelete: "cascade"
      }),

      this.hasMany(models.OrderItem, {
        foreignKey: 'orderItemTableId',
        constraints: false,
        scope: {
          orderItemTableType: 'car'
        },
      });

      this.belongsToMany(models.CarColour, {
        through : "Car_has_colours",
        as: "carColours",
        foreignKey: "CarId",
        unique: false
      });
    }
  }

  Car.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      teaserImgUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
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
      breakTime: {
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