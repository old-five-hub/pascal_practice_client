import { getTagList } from '@/state/question/effect';
import { useRequest } from 'ahooks';
import { Table, TableColumnProps, Button } from '@arco-design/web-react';
import { time2NormalTimeStr } from '@/utils/time';
import EditTagModal from './EditTagModal';

const TagList = () => {
  const { data, loading } = useRequest(getTagList);

  const columns: TableColumnProps[] = [
    {
      title: '标签名称',
      dataIndex: 'name',
    },
    {
      title: '问题关联数量',
      dataIndex: 'count',
    },
    {
      title: '图标',
      dataIndex: 'icon',
      render(_, { icon }) {
        return <img className="h-24" src={icon} alt="" />;
      },
    },
    {
      title: '更新时间',
      dataIndex: 'updateAt',
      render(_, { updateAt }) {
        return time2NormalTimeStr(updateAt);
      },
    },
    {
      title: '是否热门',
      dataIndex: 'hot',
      render(_, { hot }) {
        return hot ? '是' : '否';
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render(_) {
        return (
          <div>
            <Button className="mr-4" type="text">
              编辑
            </Button>
            <Button status="danger" type="text">
              删除
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <EditTagModal visible={true} />
      <div className="mb-8">
        <Button type="primary">新建标签</Button>
      </div>
      <Table
        loading={loading}
        columns={columns}
        data={data?.lists || []}
      ></Table>
    </div>
  );
};

export default TagList;
