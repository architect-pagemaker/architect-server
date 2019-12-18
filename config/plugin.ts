import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  console: {
    enable: true,
    package: 'egg-console',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
}

export default plugin
