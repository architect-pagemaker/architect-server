import * as path from 'path'
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576490188784_6151'

  // add your egg config in here
  config.middleware = []

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    __PUBLIC: path.resolve(__dirname, '../app/public/'),
  }

  // mysql configuration
  config.sequelize = {
    datasources: [
      {
        delegate: 'model',
        baseDir: 'model',
        dialect: 'mysql',
        host: 'localhost',
        port: process.env.MYSQL_PORT ? +process.env.MYSQL_PORT : 3306,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: 'architect',
        timezone: '+08:00',
        define: {
          freezeTableName: true,
          timestamps: false,
          underscored: true
        }
      }
    ],
  }

  // egg-security config
  config.security = {
    csrf: {
      enable: false,
    },
  }

  // logger
  config.logger = {
    disableConsoleAfterReady: false,
  }

  // egg-console

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  }
}
