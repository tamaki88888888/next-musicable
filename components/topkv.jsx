
import Image from "next/image"
import { Text, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"

const TopkvBox = styled.span `
    height: 50vh;
    display: block;
`

const ImageBox = styled.span `
    position: absolute;
    top: 5%;
    left: 50%;
    margin-right: -50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, 0%);
`

const Margin = styled.span `
    height: 50vh;
`

//Logo.jsxに変更
const Topkv = () => {
    const topkv = `/images/topkv${useColorModeValue('','-dark')}.png`

    return (
        <TopkvBox>
            <ImageBox>
                <Image src={topkv} width={500} height={500} alt="topkv" />
            </ImageBox>
        </TopkvBox>
    )
}

export default Topkv