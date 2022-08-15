import { useState, useMemo, useEffect } from 'react';
import QuestionTabFilter from './QuestionTabFilter';
import { useRequest } from 'ahooks';
import { HandleCheckTag } from './type';
import { getQuestionList } from '@/state/question';
import { Pagination } from '@/typing/service/common';
import QuestionItem from './QuestionItem';
import { List, Spin } from '@arco-design/web-react';
import { QuestionListResponse } from '@/typing/service/question';
import { useNavigate } from 'react-router-dom';

const TopicList = () => {
  const navigate = useNavigate();
  const [checkedTagIds, setCheckedTagIds] = useState<number[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    hasMore: true,
  });

  useEffect(() => {
    setPagination({
      page: 1,
      limit: 20,
      total: 0,
      hasMore: true,
    });
  }, [checkedTagIds]);

  const { data, mutate } = useRequest(
    () =>
      getQuestionList({
        tagIds: checkedTagIds,
        ...pagination,
      }),
    {
      refreshDeps: [checkedTagIds, pagination.page],
      onSuccess: onFetchDataSuccess,
      ready: pagination.hasMore,
    }
  );

  function onFetchDataSuccess(newData: QuestionListResponse['data']) {
    setPagination((_data) => ({ ..._data, hasMore: newData.hasMore }));
    if (pagination.page === 1) {
      mutate(newData);
    } else {
      mutate({
        ...newData,
        list: [...(data?.list || []), ...newData.list],
      });
    }
  }

  const scrollLodaing = useMemo(() => {
    if (!pagination.hasMore) {
      return '没有更多数据了';
    } else {
      return <Spin loading={true} />;
    }
  }, [pagination.hasMore]);

  const handleCheckTag: HandleCheckTag = (checked, id) => {
    if (checked) {
      setCheckedTagIds((ids) => [...ids, id]);
    } else {
      setCheckedTagIds((ids) => ids.filter((i) => i !== id));
    }
  };

  const goQuestionDetail = (id: number) => {
    navigate(`/question/${id}`);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <QuestionTabFilter handleCheckTag={handleCheckTag} />
      <List
        className="mt-4 h-full overflow-y-auto"
        scrollLoading={scrollLodaing}
        onReachBottom={() =>
          setPagination((data) => ({ ...data, page: data.page + 1 }))
        }
      >
        {data?.list.map((i) => (
          <QuestionItem
            key={i.id}
            data={i}
            goQuestionDetail={() => goQuestionDetail(i.id)}
          />
        ))}
      </List>
    </div>
  );
};

export default TopicList;
