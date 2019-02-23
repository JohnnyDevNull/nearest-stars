import { Application } from 'express';

export interface RouterIface {
  attach(app: Application): void;
}
