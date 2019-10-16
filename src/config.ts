export interface IStyleConfig {
  background?: string;
  color?: string;
  font_size?: string;
  font_family?: string;
  font_weight?: FontWeight;
}

export enum FontWeight {
  BOLD = 'bold',
  BOLDER = 'bolder',
  NORMAL = 'normal',
}
