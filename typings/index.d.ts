import 'egg';
import 'egg-sequelize'

declare module 'egg' {
  interface Application {
    archModel: IModel
  }

  interface Context {
    archModel: IModel
  }
}