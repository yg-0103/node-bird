import { Button, Form, Input } from 'antd';
import { ChangeEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { MainPost } from '../../types/post';

interface CommentFormProps {
  post: MainPost;
}

const CommentForm = ({ post }: CommentFormProps) => {
  const [commentText, setCommentText] = useState('');
  const id = useSelector((state: RootState) => state.user.me?.id);

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  }, []);
  const handleSubmit = useCallback(() => {
    console.log(post.id, commentText);

    setCommentText('');
  }, [commentText]);

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea value={commentText} onChange={handleChange} rows={4} />
        <Button
          style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 10 }}
          type="primary"
          htmlType="submit"
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
