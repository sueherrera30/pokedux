
import { Row, Col } from 'antd';

import PokemonCard from './PokemonCard';


const PokemonsList = ({ pokemons }) => (
   <Row gutter={[16, 16]}>
      {
         pokemons.map((pokemon) => {
            return (
               <Col span={6}><PokemonCard/></Col>
            )
         })      
      }
   </Row>
);

PokemonsList.defaultProps = {
   pokemons: Array(10).fill('hello')
}

export default PokemonsList;