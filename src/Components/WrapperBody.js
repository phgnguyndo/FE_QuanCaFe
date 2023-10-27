import { Box, Text } from "@chakra-ui/react"
import ListCard from "./Card/ListCard"

const WrapperBody =()=>{
    return (
      <Box
        position={"relative"}
        top={"460px"}
        left={"5%"}
        width={"90%"}
        borderRadius={"5px"}
        minHeight={"2000px"}
        //   bgColor={"rgb(245,245,245)"}
      >
        <Text
          fontSize={"40px"}
          fontFamily={"cursive"}
          color={"brown"}
          textAlign={"center"}
        >
          Các sản phẩm của chúng tôi
        </Text>
        <br/>
        <ListCard></ListCard>
      </Box>
    );
}
export default WrapperBody