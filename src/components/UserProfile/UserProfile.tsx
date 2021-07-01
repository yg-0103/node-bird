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


  if(!me) return null;
  
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹 <br/> 
          {me.posts.length}
        </div>,
        <div key="followings">
          팔로잉 <br />
          {me.followings.length}
        </div>,
        <div key="followings">
          팔로워 <br />
          {me.followers.length}
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
