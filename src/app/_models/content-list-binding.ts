import { ContentData } from "./content-data";
import { ContentListData } from "./content-list-data";

export interface ContentListBinding
{
    contentlist: ContentListData;
    content: ContentData;
    order: number|null;
}