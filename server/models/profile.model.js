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
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Profile',
    },
  );

  return Profile;
}