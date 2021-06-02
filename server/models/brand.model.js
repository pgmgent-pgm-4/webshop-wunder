import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Brand extends Model {
    static associate(models) {
      this.hasMany(models.Car, {
        foreignKey : {
          allowNull: false
        },
        onDelete: "cascade"
      });
    }
  }

  Brand.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Brand',
    },
  );

  return Brand;
}