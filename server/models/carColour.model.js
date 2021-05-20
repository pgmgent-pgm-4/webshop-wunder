import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class CarColour extends Model {
    static associate(models) {
      this.hasMany(models.Car);
    }
  }

  CarColour.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'CarColour',
    },
  );

  return CarColour;
}