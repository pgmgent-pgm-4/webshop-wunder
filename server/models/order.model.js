import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Order extends Model {
    static associate(models) {
      this.hasOne(models.Payment, {
        onDelete: "cascade"
      });
      this.belongsTo(models.User, {
        foreignKey : {
          allowNull: false
        }
      });
      this.hasMany(models.OrderItem, {
        onDelete: "cascade"
      });
    }
  }

  Order.init(
    {
      //id
      //userId
      orderDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );

  return Order;
}