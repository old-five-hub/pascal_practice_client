import { CommonResponse } from "./common";

export interface Tag {
    id: number;
    name: string;
    hot: number;
    icon: string;
    createAt: string;
    updateAt: string;
}

export type TagListResponse = CommonResponse<{
    lists: Tag[]
}>