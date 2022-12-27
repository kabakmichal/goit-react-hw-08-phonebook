import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

export const UserPopover = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <p className="mb-2">Email: {user.email}</p>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </>
  );
};
