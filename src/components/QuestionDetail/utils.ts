import { Comment } from '@/typing/service/comment';

export type CommentListItem = Comment & {
  children: CommentListItem[];
};

const getChild = (id: number, lists: Comment[]): CommentListItem[] => {
  return lists
    .filter((i) => i.parentId === id)
    .map((i) => ({
      ...i,
      children: getChild(i.id, lists),
    }));
};

export const CoverntCommentList = (lists: Comment[]): CommentListItem[] => {
  const result = [];

  for (let i = 0; i < lists.length; i++) {
    if (!lists[i].parentId) {
      result.push({
        ...lists[i],
        children: getChild(lists[i].id, lists),
      });
    }
  }

  return result;
};
