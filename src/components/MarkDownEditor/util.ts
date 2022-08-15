import { Uploader } from '@milkdown/plugin-upload';
import { Schema, Node } from '@milkdown/prose/model';
import { request } from '@/api/request';

export const uploader: Uploader = async (files: FileList, schema: Schema) => {
  const images: File[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files.item(i);
    if (!file) {
      continue;
    }

    // You can handle whatever the file type you want, we handle image here.
    if (!file.type.includes('image')) {
      continue;
    }

    images.push(file);
  }

  const nodes: Node[] = await Promise.all(
    images.map(async (image) => {
      const formData = new FormData();
      formData.append('file', image);
      // const src = await request({
      //   method: '',
      // });
      const alt = image.name;
      return schema.nodes.image.createAndFill({
        src: '',
        alt,
      }) as Node;
    })
  );

  return nodes;
};
