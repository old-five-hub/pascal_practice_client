import { CommonResponse } from './common';

export interface Tag {
  id: number;
  name: string;
  hot: number;
  icon: string;
  createAt: string;
  updateAt: string;
  count: number;
}

export type TagListResponse = CommonResponse<{
  lists: Tag[];
}>;

export interface CreateTagRequest {
  name: string;
  hot: number;
  icon: string;
}

export interface UpdateTagRequest extends CreateTagRequest {
  id: number;
}

export interface DeleteTagRequest {
  id: number;
}
