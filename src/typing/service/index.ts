import { CommonResponse } from './common';
import { Tag } from './tag';

class PascalPracticeService {
    public getTags!: () => CommonResponse<{lists: Tag[]}>;
}

export default PascalPracticeService