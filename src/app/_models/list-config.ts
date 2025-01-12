import { GenericConfig } from "./generic-config";
import { MediaCaptionCardConfig } from "./media-caption-card-config";

export interface ListConfig extends GenericConfig
{
  visible: boolean;
  content_containers: MediaCaptionCardConfig | MediaCaptionCardConfig[];
}

