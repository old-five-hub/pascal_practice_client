import { FC } from 'react';
import { Modal, Form, Input, Switch } from '@arco-design/web-react';
import ImageUpload from '@/components/Common/ImageUpload';
import './index.scss';

const FormItem = Form.Item;

type Props = {
  visible: boolean;
};

const EditTagModal: FC<Props> = ({ visible }) => {
  return (
    <Modal visible={visible} title="新建标签">
      <Form className="edit-tag-modal-form">
        <FormItem label="标签名称" field="name" required>
          <Input placeholder="请输入标签名称" />
        </FormItem>
        <FormItem label="图标" field="icon" required>
          <ImageUpload />
        </FormItem>
        <FormItem label="是否热门" field="hot" required>
          <Switch />
        </FormItem>
      </Form>
    </Modal>
  );
};

export default EditTagModal;
