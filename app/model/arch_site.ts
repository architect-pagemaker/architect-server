// import { Application } from 'egg'

// export default function(app: Application) {
//   const { INTEGER, TEXT, DATE } = app.Sequelize

//   class ArchSite extends app.Sequelize.Model {}
//   ArchSite.init({
//     id: {
//       type: INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: TEXT,
//       allowNull: false
//     },
//     createTime: {
//       type: DATE,
//       allowNull: false
//     },
//   }, { sequelize: app.model })

//   return ArchSite
// }
import { Application } from 'egg'

export default function(app: Application) {
  const { INTEGER, DATE } = app.Sequelize
  const ArchSite = app.model.define('arch_site', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createTime: {
      type: DATE,
    },
    updateTime: {
      type: DATE,
    }
  })

  return class extends ArchSite {}
}
