import { Button, Form, Input } from 'antd';
import { ChangeEvent, useCallback, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { addPost } from '../../modules/post';

const PostForm = () => {
  const { imagePath } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(() => {
    dispatch(addPost);
    setText('')
  }, []);
  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }, []);
  const handleClickImageUpload = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.click();
  }, [inputRef.current]);
  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType="multipart/form-data"
      onFinish={handleSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={handleChange}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={inputRef} />
        <Button onClick={handleClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePath.map(image => (
          <div key={image} style={{ display: 'inline-block' }}>
            <img src={image} alt={image} style={{ width: 200 }} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
