import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Promotion extends Model {}

  Promotion.init(
    {
      promotionCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      promotionName: DataTypes.STRING,
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: 'Promotion',
    },
  );

  return Promotion;
}