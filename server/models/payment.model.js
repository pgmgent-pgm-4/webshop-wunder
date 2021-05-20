import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Payment extends Model {
    static associate(models) {
      this.belongsTo(models.Order, {
        foreignKey : {
          allowNull: false
        }
      })
    }
  }

  Payment.init(
    {
      //id
      //orderId
      paymentOption: {
        type: DataTypes.STRING,
        allowNull: false
      },
      payed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: 'Payment',
    },
  );

  return Payment;
}