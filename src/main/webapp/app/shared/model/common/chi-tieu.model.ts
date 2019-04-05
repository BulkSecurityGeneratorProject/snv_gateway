export const enum Status {
  PUBLISH = 'PUBLISH',
  UNPUBLISH = 'UNPUBLISH',
  DELETED = 'DELETED'
}

export interface IChiTieu {
  id?: number;
  chiTieuCode?: string;
  name?: string;
  status?: Status;
  nhomchitieuId?: number;
}

export const defaultValue: Readonly<IChiTieu> = {};