
import styled from 'styled-components'
import LineGraphic from '../Graficos/LineGraphic'

export default function MapaRendimentos() {
    return(
        <ContainerMapaRendimentos>
            <HeaderMapaRendimentos>
                Mapa de Rendimentos
            </HeaderMapaRendimentos>
           <div className="bg-white"> 
            <LineGraphic /> 
            </div>
        </ContainerMapaRendimentos>
    )
}

const ContainerMapaRendimentos = styled.div.attrs({
    className: `
        flex
        flex-col
        w-[70%]
        h-[32.18rem]
        md:w-full
        md:h-[25rem]
        md:h-[23rem]
    `
})``

const HeaderMapaRendimentos = styled.span.attrs({
    className: `
        h-[4.68rem]
        w-full
        flex
        bg-bggray
        text-letter
        items-center
        pl-[2rem]
    `
})``
