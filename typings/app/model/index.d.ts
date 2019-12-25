// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArchSite from '../../../app/model/arch_site';

declare module 'egg' {
  interface IModel {
    ArchSite: ReturnType<typeof ExportArchSite>;
  }
}
