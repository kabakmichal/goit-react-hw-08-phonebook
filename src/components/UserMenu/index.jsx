import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { UserPopover } from 'components/UserPopover';
import { useAuth } from 'hooks/useAuth';

const popoverId = nanoid(5);

const popover = (
  <Popover id={popoverId}>
    <Popover.Header>User Menu</Popover.Header>
    <Popover.Body>
      <UserPopover />
    </Popover.Body>
  </Popover>
);

export const UserMenu = () => {
  const { user } = useAuth();

  if (!user) return;

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="secondary">Welcome '{user.name}'</Button>
    </OverlayTrigger>
  );
};
