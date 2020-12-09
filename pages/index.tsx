import { GetStaticProps } from "next"

import Api from "../src/config/Api";
import endpoint from "../src/constants/endpoints"
import PokeList, { PokeListProps } from "../src/feature/pokeList"

const Index = (props: PokeListProps) => {
    return (
        <div>
            <PokeList pokeList={props.pokeList} count={props.count} />
        </div>
    )
}

export default Index;

export const getStaticProps: GetStaticProps<PokeListProps> = async () => {
    const data = await Api.get(endpoint.pokemonList).then(({ data }) => data)

    return {
        props: {
            pokeList: data.results,
            count: data.count
        }
    }
}