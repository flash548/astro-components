import React, {HTMLAttributes, useEffect, useState} from 'react';
import './Notification.scss';

export enum NotificationLevel {
  STANDBY = 'standby',
  NORMAL = 'normal',
  CAUTION = 'caution',
  CRITICAL = 'critical',
}

export interface NotificationProps {
  message: string;
  level: NotificationLevel;
  show: boolean;
  autoHideAfter?: number;
  onClose?: () => void;
}

export default function Notification(
  props: NotificationProps & HTMLAttributes<HTMLInputElement>
) {

  const [show, setShow] = useState(false);
  let timer: any;

  function closeNotification() {
    clearTimeout(timer);
    setShow(false);
    props.onClose && props.onClose();
  }

  useEffect(() => {

    if (props.autoHideAfter && props.autoHideAfter > 0) {
      timer = setTimeout(closeNotification, props.autoHideAfter);
    }
    setShow(props.show);
  }, [props.show]);

  return (
    <div className={`rux-notification rux-notification--${props.level} notification__${show ? 'show' : 'hide'}`}>
      <div className={`rux-notification--${props.level}`}>{props.message}</div>
      <div className="rux-notification_close-button" onClick={() => props.onClose && props.onClose()}/>
    </div>
  );
}
