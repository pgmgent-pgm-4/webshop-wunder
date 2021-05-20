import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class CarOption extends Model {
    static associate(models) {
      this.hasMany(models.Car_has_option, {
        onDelete: "cascade"
      });
    }
  }

  CarOption.init(
    {
      //id
      //userId
      //car_has_optionId
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: 'CarOption',
    },
  );

  return CarOption;
}