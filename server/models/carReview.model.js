import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class CarReview extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey : {
          allowNull: false
        }
      })

      this.belongsTo(models.Car, {
        foreignKey : {
          allowNull: false
        }
      })
    }
  }

  CarReview.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: 'CarReview',
    },
  );

  return CarReview;
}