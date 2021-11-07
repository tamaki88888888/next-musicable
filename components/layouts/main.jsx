import Head from "next/head"
import Navbar from "../navbar.jsx"
import NoSsr from '../no-ssr'
import { Box , Container} from "@chakra-ui/react"
// import Topkv from "../topkv"

// three表示うまくいかなかったので、いったん削除
import VoxelDog from '../voxel-dog'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Ko Tamaki - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    {/* <Topkv /> */}
                    <VoxelDog />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main