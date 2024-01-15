import { PNotification } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <PNotification>{message}</PNotification>
    </>
  );
};
