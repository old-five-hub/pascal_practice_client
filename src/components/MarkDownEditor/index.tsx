import { FC } from 'react';
import MilkDown from './MilkDown';
import './index.scss';

type Props = {
  markdown: string;
  editable?: boolean;
};

const MarkDownEditor: FC<Props> = ({ markdown, editable = true }) => {
  return <MilkDown value={markdown} editable={editable} />;
};

export default MarkDownEditor;
