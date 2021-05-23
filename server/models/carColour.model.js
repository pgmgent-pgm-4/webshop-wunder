import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class CarColour extends Model {
    static associate(models) {
      this.hasMany(models.Car, {
        foreignKey : {
          allowNull: false
        },
        onDelete: "cascade"
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