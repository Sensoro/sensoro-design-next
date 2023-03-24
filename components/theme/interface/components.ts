import type { ComponentToken as ButtonComponentToken } from '../../button/style';
import type { ComponentToken as SpaceComponentToken } from '../../space/style';
import type { ComponentToken as SwitchComponentToken } from '../../switch/style';
import type { ComponentToken as EmptyComponentToken } from '../../empty/style';
import type { ComponentToken as PlateComponentToken } from '../../plate/style';
import type { ComponentToken as CheckboxComponentToken } from '../../checkbox/style';
import type { ComponentToken as RadioComponentToken } from '../../radio/style';
import type { ComponentToken as SegmentedComponentToken } from '../../segmented/style';
import type { ComponentToken as ScrollbarComponentToken } from '../../scrollbar/style';

export interface ComponentTokenMap {
  Affix?: {};
  Button?: ButtonComponentToken;
  Empty?: EmptyComponentToken;
  Space?: SpaceComponentToken;
  Plate?: PlateComponentToken;
  Scrollbar?: ScrollbarComponentToken;
  Switch?: SwitchComponentToken;
  Radio?: RadioComponentToken;
  Checkbox?: CheckboxComponentToken;
  Segmented?: SegmentedComponentToken;
}
