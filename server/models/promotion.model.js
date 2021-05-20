import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Promotion extends Model {
    // static associate(models) {
    // }
  }

  Promotion.init(
    {
      //id
      //carId
      //promotionCode
      //(forWhichItem)
      //promotionName
      //discount
      //endDate
      //(active)

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
        type: DataTypes.DATEONLY,
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