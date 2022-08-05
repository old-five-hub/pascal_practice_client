import { useRef } from 'react';
import { Modal, Form, Input, Button, Checkbox, FormInstance } from '@arco-design/web-react';
import { IconUser, IconLock } from '@arco-design/web-react/icon';
import { useMachine } from '@xstate/react';
import { accountMachine, loginAccount } from '@/machine/account';
import { AccountLoginRequest } from '@/typing/service/account';

const FormItem = Form.Item;


const commonFormItemProps = {
    wrapperCol: {span: 24}
}

const LoginModal = () => {
    const formRef = useRef<FormInstance>(null);

    const [current, send] = useMachine(accountMachine)
    const { account } = current.context;

    const validForm = async () => {
        if (!formRef.current) {
            return
        }
        try {
            await formRef.current?.validate();
            const payload = formRef.current.getFields();
            send(loginAccount(payload as AccountLoginRequest))
        } catch (_) {
        }
    }

    return <Modal visible={true} footer={null} closeIcon={null}>
        <div className="text-center text-2xl">
            登录
        </div>
        <Form ref={formRef} className="mt-16">
            <div className="flex flex-col justify-center">
                <FormItem field="username" {...commonFormItemProps}
                    rules={[{ required: true, message: '请输入用户昵称' }, {match: /^[a-zA-Z0-9_-]{4,16}$/, message: '用户昵称为4-16位字母,数字，下划线组成'}]}
                >
                    <Input placeholder="用户昵称"  prefix={<IconUser />}/>
                </FormItem>
                <FormItem field="password" {...commonFormItemProps}
                    rules={[{ required: true, message: '请输入用户密码' }, {match: /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/, message: '至少包含 数字和英文，长度6-24'}]}
                >
                    <Input placeholder="密码" type="password"  prefix={<IconLock />}/>
                </FormItem>
                <FormItem field="check"
                     rules={[{ type: 'boolean', true: true, message: '请勾选' }]}
                >
                    <Checkbox>请同意xxxx</Checkbox>
                </FormItem>
                <div className='flex justify-center'>
                    <Button type="primary" className="w-5/6 mt-8" onClick={() => validForm()}>
                        登录
                    </Button>
                </div>
            </div>
        </Form>
    </Modal>
}

export default LoginModal