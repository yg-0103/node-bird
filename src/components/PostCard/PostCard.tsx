import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from '@ant-design/icons';
import { Button, Card, Comment, List, Popover } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import ButtonGroup from 'antd/lib/button/button-group';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { MainPost } from '../../types/post';
import CommentForm from '../CommentForm/CommentForm';
import PostCardContent from '../PostCardContent/PostCardContent';
import PostImages from '../PostImages/PostImages';

interface PostCardProps {
  post: MainPost;
}

const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpen, setCommentFormOpen] = useState(false);
  const { me } = useSelector((state: RootState) => state.user);

  const handleToggle = useCallback(
    (callback: Dispatch<SetStateAction<boolean>>) => () => {
      callback(prevState => !prevState);
    },
    []
  );
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.images[0] && <PostImages images={post.images} />}
        actions={[
          <RetweetOutlined key="tweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="twotone"
              onClick={handleToggle(setLiked)}
            />
          ) : (
            <HeartOutlined key="heart" onClick={handleToggle(setLiked)} />
          ),
          <MessageOutlined
            key="comment"
            onClick={handleToggle(setCommentFormOpen)}
          />,
          <Popover
            key="more"
            content={
              <ButtonGroup>
                {me?.id && post.user.id === me.id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="ghost">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </ButtonGroup>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
          title={post.user.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpen && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.comments.length} 개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.comments}
            renderItem={item => (
              <li>
                <Comment
                  author={item.user.nickname}
                  avatar={<Avatar>{item.user.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  );
};

export default PostCard;
