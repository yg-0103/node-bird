import AppLayout from '../src/components/AppLayout/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../src/components/NicknameEditForm/NicknameEditForm';
import FollowList from '../src/components/FollowList/FollowList';

export interface FollowListData {
  nickname: string;
}

const Profile = () => {
  const followerList = [
    { nickname: 'yg' },
    { nickname: 'sr' },
    { nickname: 'ed' },
  ];
  const followingList = [
    { nickname: 'yg' },
    { nickname: 'sr' },
    { nickname: 'ed' },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | Node Bird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
