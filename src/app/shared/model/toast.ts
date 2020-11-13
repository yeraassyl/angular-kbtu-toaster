import {ToastType} from './type';

export interface Toast{
  type: ToastType;
  title: string;
  content: string;
  delay: number;
  displayDelay: boolean;
  vertical: number;
  horizontal: number;
}
