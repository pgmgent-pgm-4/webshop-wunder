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
      deliveryAddress_Street: DataTypes.STRING,
      deliveryAddress_HouseNumber: DataTypes.STRING,
      deliveryAddress_City: DataTypes.STRING,
      deliveryAddress_PostalCode: DataTypes.INTEGER,
      deliveryAddress_Country: DataTypes.STRING,
      billingAddress_Street: DataTypes.STRING,
      billingAddress_HouseNumber: DataTypes.STRING,
      billingAddress_City: DataTypes.STRING,
      billingAddress_PostalCode: DataTypes.INTEGER,
      billingAddress_Country: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Profile',
    },
  );

  return Profile;
}