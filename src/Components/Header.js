import { Box, Link } from "@chakra-ui/react"

const Header=()=>{
    return(
        <Box
        position={"absolute"}
        top={"0"}
        left={"0"}
        width={"100%"}
        height={"50px"}
        backgroundColor={"rgb(134,90,52)"}
        >
            <Link
            position={"relative"}
             top={"26%"}
             left={"10%"}
             fontSize={"18px"}
             color={"WhiteSmoke"}
             cursor={"pointer"}
             textDecoration={"none"}
             href="/" fontFamily={'cursive'}
            >Trang chủ</Link>
            <Link
            position={"relative"}
             top={"25%"}
             left={"74.7%"}
             fontSize={"16px"}
             color={"WhiteSmoke"}
             cursor={"pointer"}
             textDecoration={"none"}
             href="/register" fontFamily={'cursive'}
            >Đăng kí -</Link>
            <Link
            position={"relative"}
             top={"25%"}
             right={"-75%"}
             fontSize={"16px"}
             color={"WhiteSmoke"}
             cursor={"pointer"}
             textDecoration={"none"} fontFamily={'cursive'}
             href="/logon"
            >Đăng nhập</Link>

        </Box>
    )
}
export default Header