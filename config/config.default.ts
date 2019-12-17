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

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  }
}
