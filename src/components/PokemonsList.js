
import { Row, Col } from 'antd';
import PokemonCard from './PokemonCard';

const PokemonsList = ({pokemons }) => {

   return (<Row gutter={[16, 16]}>
      {
         pokemons.map((pokemon) => {
            return (
               <Col key={pokemon.name} span={6} ><PokemonCard name={pokemon.name} /></Col>
            )
         })      
      }
   </Row>
)};

PokemonsList.defaultProps = {
   pokemons: Array(10).fill('hello')
}

export default PokemonsList;