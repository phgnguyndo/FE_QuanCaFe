import { Box, Image, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
const Card = (props) => {
  const handleClick = () => {
    window.location.href = "/order";
  };

  return (
    <Box
      cursor={"pointer"}
      key={props.key}
      onClick={handleClick}
      position={"relative"}
      top={"-30px"}
      left={"-12px"}
      marginLeft={"50px"}
      marginTop={"20px"}
      float={"left"}
      width={"280px"}
      height={"340px"}
      bgColor={"rgb(245,245,245)"}
      borderRadius={"4px"}
      boxShadow={"1px 1px 1px 0.5px rgb(248,218,208)"}
    >
      <Image
        key={props.key}
        _hover={{
          transform: "scale(1.01,1.02)",
        }}
        backgroundSize={"contain"}
        src={"https://localhost:7242/api/Foods/" + props.imageUrl}
        position={"relative"}
        marginTop={"10px"}
        left={"10px"}
        width={"93%"}
        height={"60%"}
        borderRadius={"4px"}
      ></Image>
      <Text
        position={"relative"}
        left={"10px"}
        color={"brown"}
        fontWeight={"1000"}
        fontFamily={"cursive"}
      >
        {props.name}
      </Text>
      <Text
        display={"block"}
        position={"relative"}
        left={"10px"}
        width={"90%"}
        height={"30px"}
        color={"brown"}
        fontFamily={"cursive"}
      >
        Giá: {props.price}đ
      </Text>
    </Box>
  );
};
export default Card;
