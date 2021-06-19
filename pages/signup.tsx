import AppLayout from '../src/components/AppLayout/AppLayout';
import Head from 'next/head';
import { Button, Checkbox, Form, Input } from 'antd';
import { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../src/components/LoginForm/LoginForm';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const SignUp = () => {
  const [input, setInput] = useState({
    id: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const { id, nickname, password, passwordCheck } = input;

  const handleSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      setPasswordError(true);
    }
    if (!term) {
      setTermError(true);
    }
  }, [password, passwordCheck, term]);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInput(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);
  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setTerm(e.target.checked);
    setTermError(false);
  };

  return (
    <>
      <Head>
        <title>회원가입 | Node Bird</title>
      </Head>
      <AppLayout>
        <Form onFinish={handleSubmit}>
          <div>
            <label htmlFor="id">아이디</label>
            <br />
            <Input name="id" value={id} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="nickname">닉네임</label>
            <br />
            <Input
              name="nickname"
              value={nickname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <br />
            <Input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <br />
            <Input
              name="passwordCheck"
              type="password"
              value={passwordCheck}
              onChange={e => {
                handleChange(e);
                setPasswordError(password !== e.target.value);
              }}
              required
            />
            {passwordError && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </div>
          <div>
            <Checkbox
              name="term"
              checked={term}
              onChange={handleCheckboxChange}
            >
              동의 하십니까?
            </Checkbox>
            {termError && <ErrorMessage>약관에 동의해야 합니다.</ErrorMessage>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

const ErrorMessage = styled.div`
  color: red;
`;

export default SignUp;
