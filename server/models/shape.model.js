import sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Shape extends Model {
    static associate(models) {
      this.hasMany(models.Car, {
        foreignKey : {
          allowNull: false
        },
        onDelete: "cascade"
      });
    }
  }

  Shape.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Shape',
    },
  );

  return Shape;
}