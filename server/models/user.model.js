import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.Profile, {
        onDelete: "cascade"
      });
      
      this.hasMany(models.CarReview, {
        onDelete: "cascade"
      });
    }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );

  return User;
}