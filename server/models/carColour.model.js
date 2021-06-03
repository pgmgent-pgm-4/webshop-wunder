import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class CarColour extends Model {
    static associate(models) {
      // this.hasMany(models.Car, {
      //   foreignKey : {
      //     allowNull: false
      //   },
      //   onDelete: "cascade"
      // });
      this.belongsToMany(models.Car, {
        through : "Car_has_colours",
        as: "cars",
        foreignKey: "CarColourId",
        //constraints: false 
        unique: false
      });
    }
  }

  CarColour.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rgb: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'CarColour',
    },
  );

  return CarColour;
}