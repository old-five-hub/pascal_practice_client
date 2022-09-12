import { FC, useRef, useEffect } from 'react';
import { Modal, Form, Input, Switch, Message } from '@arco-design/web-react';
import ImageUpload from '@/components/Common/ImageUpload';
import { FormInstance } from '@arco-design/web-react/lib/Form';
import { Tag } from '@/typing/service/tag';
import { useRequest } from 'ahooks';
import { createTag, updateTag } from '@/state/question/effect';
import './index.scss';

const FormItem = Form.Item;

type Props = {
  visible: boolean;
  currTag: Tag | null;
  toggleVisible: () => void;
  handleSaveSuccess: () => void;
};

const EditTagModal: FC<Props> = ({
  visible,
  currTag,
  toggleVisible,
  handleSaveSuccess,
}) => {
  const formRef = useRef<FormInstance>(null);
  const { loading: createloading, run: runCreateTag } = useRequest(createTag, {
    manual: true,
    onSuccess() {
      Message.success('创建标签成功');
      toggleVisible();
      handleSaveSuccess();
    },
  });

  const { loading: updateloading, run: runUpdateTag } = useRequest(updateTag, {
    manual: true,
    onSuccess() {
      Message.success('更新标签成功');
      toggleVisible();
      handleSaveSuccess();
    },
  });

  useEffect(() => {
    if (visible) {
      if (currTag) {
        console.log(currTag);
        formRef.current?.setFieldsValue({
          ...currTag,
          hot: Boolean(currTag.hot),
        });
      } else {
        formRef.current?.clearFields();
      }
    }
  }, [visible, currTag]);

  const handleConfirm = async () => {
    const values = await formRef.current?.validate();

    if (values) {
      const { hot, icon, name } = values;
      const params = {
        icon,
        name,
        hot: hot ? 1 : 0,
      };
      if (!currTag) {
        runCreateTag(params);
      } else {
        runUpdateTag({
          ...params,
          id: currTag?.id,
        });
      }
    }
  };

  return (
    <Modal
      visible={visible}
      title="新建标签"
      closable={false}
      mountOnEnter={false}
      cancelButtonProps={{
        onClick: toggleVisible,
      }}
      okButtonProps={{
        onClick: handleConfirm,
        loading: createloading || updateloading,
      }}
    >
      <Form className="edit-tag-modal-form" ref={formRef as any}>
        <FormItem
          label="标签名称"
          field="name"
          required
          rules={[{ required: true, message: '请输入标签名称' }]}
        >
          <Input placeholder="请输入标签名称" />
        </FormItem>
        <FormItem
          label="图标"
          field="icon"
          required
          triggerPropName="uri"
          rules={[{ required: true, message: '请上传标签图标' }]}
        >
          <ImageUpload />
        </FormItem>
        <FormItem
          label="是否热门"
          field="hot"
          required
          triggerPropName="checked"
          rules={[{ type: 'boolean' }]}
        >
          <Switch />
        </FormItem>
      </Form>
    </Modal>
  );
};

export default EditTagModal;
