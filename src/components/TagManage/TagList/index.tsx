import { useState } from 'react';
import { getTagList, deleteTag } from '@/state/question/effect';
import { useRequest, useToggle } from 'ahooks';
import {
  Table,
  TableColumnProps,
  Button,
  Popconfirm,
} from '@arco-design/web-react';
import { time2NormalTimeStr } from '@/utils/time';
import EditTagModal from './EditTagModal';
import { Tag } from '@/typing/service/tag';

const TagList = () => {
  const { data, loading, refresh: refreshList } = useRequest(getTagList);
  const { runAsync: runDeleteTag } = useRequest(deleteTag, {
    manual: true,
    onSuccess() {
      refreshList();
    },
  });
  const [modalVisible, { toggle: toggleVisible }] = useToggle(false);
  const [currTag, setCurrTag] = useState<Tag | null>(null);

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
      render(_, tag) {
        return (
          <div>
            <Button
              className="mr-4"
              type="text"
              onClick={() => openEditModal(tag)}
            >
              编辑
            </Button>
            <Popconfirm
              title="确定要删除标签吗?"
              onOk={() => runDeleteTag({ id: tag.id })}
            >
              <Button status="danger" type="text">
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const openEditModal = (tag: Tag) => {
    setCurrTag(tag);
    toggleVisible();
  };

  const openCreateModal = () => {
    setCurrTag(null);
    toggleVisible();
  };

  return (
    <div>
      <EditTagModal
        visible={modalVisible}
        currTag={currTag}
        toggleVisible={toggleVisible}
        handleSaveSuccess={refreshList}
      />
      <div className="mb-8">
        <Button type="primary" onClick={openCreateModal}>
          新建标签
        </Button>
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
