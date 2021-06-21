import { Avatar, Button, Card } from 'antd';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { logoutAction } from '../../modules/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, loading } = useSelector((state: RootState) => state.user);
  const handleLogOut = useCallback(() => {
    dispatch(logoutAction());
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
      <Card.Meta
        title={me.nickname}
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
      />
      <Button onClick={handleLogOut} loading={loading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
