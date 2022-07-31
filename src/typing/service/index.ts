import { CommonResponse } from './common';
import { Tag } from './tag';

class PascalPracticeServer {
    public getTags!: () => CommonResponse<Tag[]>;
}

export default PascalPracticeServer