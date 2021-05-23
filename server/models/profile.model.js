import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Profile extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey : {
          allowNull: false
        }
      })
    }
  }

  Profile.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      dob: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'Profile',
    },
  );

  return Profile;
}