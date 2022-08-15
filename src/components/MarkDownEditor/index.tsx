import MilkDown from './MilkDown';

const markdown = `
# Milkdown React Test
> [Milkdown](https://milkdown.dev/) is an editor.
![cat](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png)
\`\`\`javascript [Sample]
const milkdown = new Milkdown();
milkdown.create();
\`\`\`
---
Now you can play!
`;

const MarkDownEditor = () => {
  return <MilkDown value={markdown} editable={true} />;
};

export default MarkDownEditor;
