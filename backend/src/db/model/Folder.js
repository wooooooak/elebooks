import Sequelize from 'sequelize';
import { sequelize } from '..';
import User from './User';
import Work from './Work';

const Folder = sequelize.define('folder', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
});

Folder.associate = function associate () {
  Folder.belongsTo(User, {
    foreignKey: 'fk_user_id',
    onDelete: 'CASCADE',
    onUpdate: 'restrict'
  });
  Folder.hasMany(Work, {
    as: 'Workers',
    foreignKey: 'fk_folder_id'
  });
};

export default Folder;