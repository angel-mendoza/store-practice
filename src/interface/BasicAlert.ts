import { Color } from '@/interface/Styles';

export interface BasicAlertProps {
  show: boolean;
  message: string;
  variant?: Color
}

export interface showAlertProps {
  message: string,
  variant?: Color
}