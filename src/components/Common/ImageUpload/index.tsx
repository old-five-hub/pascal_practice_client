import { useState, useEffect } from 'react';
import { Upload } from '@arco-design/web-react';
import { uploadFile } from '@/state/file/effect';
import { CosType } from '@/constant/File';
import { v4 as uuid } from 'uuid';
import { uri2Url } from '@/utils/cdn';

import { UploadItem } from '@arco-design/web-react/es/Upload';

const ImageUpload = (props: any) => {
  const { uri, onChange } = props;

  const [fileList, setFileList] = useState<UploadItem[]>([]);

  useEffect(() => {
    if (uri) {
      setFileList([
        {
          uid: uuid(),
          url: uri,
        },
      ]);
    } else {
      setFileList([]);
    }
  }, [uri]);

  const customRequest = async (option: any) => {
    const { onProgress, onError, onSuccess, file } = option;
    try {
      const res = await uploadFile({
        cosType: CosType.IMAGE,
        file,
        options: {
          onUploadProgress(event: ProgressEvent) {
            let percent = 0;

            if (event.total > 0) {
              percent = (event.loaded / event.total) * 100;
            }

            onProgress(parseInt(String(percent), 10), event);
          },
        },
      });
      onSuccess(res);
      onChange(uri2Url(res.uri));
    } catch (e) {
      onError(e);
    }
    return true;
  };

  const onRemove = () => {
    onChange('');
  };

  return (
    <Upload
      customRequest={customRequest}
      listType="picture-card"
      fileList={fileList}
      onChange={setFileList}
      onRemove={onRemove}
      limit={1}
      accept="image/png, image/jpeg"
    />
  );
};

export default ImageUpload;
