import { Input } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);

const Searcher = () => (
  <Search placeholder="Look for a pokemon" onSearch={onSearch} enterButton />
);

export default Searcher;