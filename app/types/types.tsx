import { Dispatch, SetStateAction } from 'react';

export interface ViewProps {
  view: number;
  setView: Dispatch<SetStateAction<number>>;
}
