import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = ({ name }) => (
  <Card title={name} cover={<img src='' alt='ditto' />} extra={<StarOutlined />}>
    <Meta description='fire, magic' />
  </Card>
);

export default PokemonCard;