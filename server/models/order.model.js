import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Order extends Model {
    static associate(models) {
      this.hasOne(models.Payment, {
        foreignKey : {
          allowNull: false
        },
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
      orderDate: {
        type: DataTypes.DATE,
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