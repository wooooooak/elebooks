import Sequelize from 'sequelize';
import { sequelize } from '..';
import User from './User';
import Work from './Work';
import Category from './Category';

const Folder = sequelize.define(
  'folder',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    folderName: {
      type: Sequelize.STRING
    },
    folderCoverImage: {
      type: Sequelize.STRING
    }

    // fk_category_id: Sequelize.UUID
  },
  {
    timestamps: true,
    charset: 'utf8'
  }
);

Folder.associate = function associate () {
  Folder.belongsTo(User, {
    foreignKey: 'fk_user_id',
    onDelete: 'CASCADE',
    onUpdate: 'restrict'
  });
  Folder.hasMany(Work, {
    as: 'Work',
    foreignKey: 'fk_folder_id',
    onDelete: 'CASCADE',
    onUpdate: 'restrict'
  });
  Folder.belongsTo(Category, {
    as: 'Category',
    foreignKey: 'fk_category_id'
  });
};

export default Folder;
