export enum LikeType {
  Question = 0,
  Comment = 1,
}

export enum LikeStatus {
  Liked = 1,
  UnLike = 0,
}

export interface UpdateLikeRequest {
  typeId: number;
  likeType: LikeType;
  likeStatus: LikeStatus;
}
