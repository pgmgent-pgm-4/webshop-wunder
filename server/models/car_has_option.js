import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Car_has_option extends Model {
    static associate(models) {
      this.hasMany(models.OrderItem, {
        foreignKey: 'orderItemTableId',
        constraints: false,
        scope: {
          orderItemTableType: 'car_has_option'
        },
      });
    }
  }

  Car_has_option.init(
    {
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      
    },
    {
      sequelize,
      modelName: 'Car_has_option',
    },
  );

  return Car_has_option;
}