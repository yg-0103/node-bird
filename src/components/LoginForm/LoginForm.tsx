import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import styled from 'styled-components';

interface LoginFormProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginForm = ({ setIsLogin }: LoginFormProps) => {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });
  const { id, password } = input;

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInput(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    console.log(id, password);
    setIsLogin(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={handleSubmit}>
      <div>
        <label htmlFor="id">아이디</label>
        <br />
        <Input name="id" value={id} onChange={handleOnChange} required />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <br />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleOnChange}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

export default LoginForm;
