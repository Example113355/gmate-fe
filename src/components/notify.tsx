import { notification } from 'antd';

type NotifyType = 'success' | 'info' | 'warning' | 'error';

const openNotification = (type: NotifyType, message: string, description: string) => {
  notification[type]({
    message,
    description,
  });
}

export default openNotification;