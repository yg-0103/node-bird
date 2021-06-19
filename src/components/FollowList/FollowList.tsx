import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { FollowListData } from '../../../pages/profile';

interface FollowListProps {
  header: string;
  data: FollowListData[];
}

const FollowList = ({ header, data }: FollowListProps) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      size="small"
      loadMore={
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>더보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      header={<div>{header}</div>}
    ></List>
  );
};

export default FollowList;
