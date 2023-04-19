import { Dispatch, SetStateAction } from 'react';

export interface PropsButtonPie {
  name: string;
  index: number;
  setActive: Dispatch<SetStateAction<number>>;
  isActive: number;
}
