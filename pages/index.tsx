import { useSelector } from 'react-redux';
import AppLayout from '../src/components/AppLayout/AppLayout';
import { RootState } from '../src/modules';
import PostForm from '../src/components/PostForm/PostForm';
import PostCard from '../src/components/PostCard/PostCard';

const Home = () => {
  const { isLogin } = useSelector((state: RootState) => state.user)
  const { mainPosts } = useSelector((state: RootState) => state.post)
  return (
    <AppLayout>
      {isLogin && <PostForm />}
      {mainPosts.map(post => <PostCard key={post.id} post={post}/>)}
    </AppLayout>
  );
};

export default Home;
