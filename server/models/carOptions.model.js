import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class CarOption extends Model {
    static associate(models) {
      this.hasMany(models.Car_has_option, {
        foreignKey : {
          allowNull: false
        },
        onDelete: "cascade"
      });
    }
  }

  CarOption.init(
    {
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