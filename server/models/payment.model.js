import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Payment extends Model {
    static associate(models) {
      this.belongsTo(models.Order)
    }
  }

  Payment.init(
    {
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
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