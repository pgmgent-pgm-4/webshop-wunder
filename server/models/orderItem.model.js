import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class OrderItem extends Model {
    static associate(models) {
      this.belongsTo(models.Car, { 
        foreignKey : 'orderItemTableId', 
        constraints: false 
      });

      this.belongsTo(models.Car_has_option, { 
        foreignKey : 'orderItemTableId', 
        constraints: false 
      });

      this.belongsTo(models.Order, {
        foreignKey : {
          allowNull: false
        }
      });

    }
  }

  OrderItem.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      orderItemTableId: {
        type: DataTypes.INTEGER
      },
      orderItemTableType: {
        type: DataTypes.STRING
      },
    },
    {
      sequelize,
      modelName: 'OrderItem',
    },
  );

  // Define polymorphism, because Foreign Key can be NULL
  OrderItem.addHook("afterFind", findResult => {
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
      if (instance.commentableType === "car" && instance.Car !== undefined) {
        instance.commentable = instance.image;
      } else if (instance.commentableType === "car_has_option" && instance.Car_has_option !== undefined) {
        instance.commentable = instance.video;
      }

      // To prevent mistakes:
      delete instance.Car;
      delete instance.dataValues.Car;
      delete instance.Car_has_option;
      delete instance.dataValues.Car_has_option;
    }
  });

  return OrderItem;
}