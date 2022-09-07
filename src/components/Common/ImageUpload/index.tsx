import { useState } from 'react';
import { Upload } from '@arco-design/web-react';
import { uploadFile } from '@/state/file/effect';
import { CosType } from '@/constant/File';

import { UploadItem } from '@arco-design/web-react/es/Upload';

const ImageUpload = () => {
  const [fileList, setFileList] = useState<UploadItem[]>([]);

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
    } catch (e) {
      onError(e);
    }
    return true;
  };

  return (
    <Upload
      customRequest={customRequest}
      listType="picture-card"
      fileList={fileList}
      onChange={setFileList}
      limit={1}
      accept="image/png, image/jpeg"
    />
  );
};

export default ImageUpload;
