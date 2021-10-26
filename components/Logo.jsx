import Link from "next/link"
import Image from "next/image"
import { Text, useColorModeValue } from "@chakura-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span `
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const footPrintImg = `/images/footpront${useColorModValue('','-dark')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt="logo"/>
                    <Text 
                        color={useColorModeValuye("gray.800", "whiteAlpha.900")}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}
                    >
                        Ko Tamaki
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Ko Tamaki - Homepage</title>
            </Head>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main