import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Brand extends Model {
    static associate(models) {
      this.hasMany(models.Car, {
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
      type: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Brand',
    },
  );

  return Brand;
}