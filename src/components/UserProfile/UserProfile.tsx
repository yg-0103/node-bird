import { Avatar, Button, Card } from 'antd';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../modules/user';

const UserProfile = () => {
  const dispatch = useDispatch()
  const handleLogOut = useCallback(() => {
    dispatch(logoutAction())
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">짹짹</div>,
        <div key="followings">
          팔로잉 <br />0
        </div>,
        <div key="followings">
          팔로워 <br />0
        </div>,
      ]}
    >
      <Card.Meta title="yg" avatar={<Avatar>YG</Avatar>} />
      <Button onClick={handleLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
