import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from '../UserProfile/UserProfile';
import LoginForm from '../LoginForm/LoginForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SerachInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLogin ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/yg-0103"
            target="_blank"
            rel="noreferrer noopener"
          >
            YG
          </a>
        </Col>
      </Row>
    </div>
  );
};

const SerachInput = styled(Input.Search)`
  vertical-align: middle;
`;

export default AppLayout;
