import { Dispatch, SetStateAction } from 'react';

export interface PropsBuger {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
