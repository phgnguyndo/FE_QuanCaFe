import { Box, Button, Input, Tooltip } from "@chakra-ui/react";
import ListCard2 from "../Card/ListCard2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

const InfoProduct = (location) => {
  // const searchParams = new URLSearchParams(location.search);
  
  const [table,setTable]=useState(0)
  //  table = searchParams.get('table');
  const [post, setPost] = useState({
    name: 0,
    status: 0,
  });
  const handleInput = (e) => {
    setTable(e.target.value)
    var updatePost = {
      ...post,
      name: table,
      status: 0,
    };
    setPost(updatePost);
  };

  function handleClick(event) {
    event.preventDefault();
    if (table > 0){
      window.location.href = `/bill/${table}`;
      axios
        .post("https://localhost:7242/api/Table", post)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Vui lòng nhập bàn hợp lệ...");
    }
  }
  return (
    <Box
      width={"1150px"}
      height={"1000px"}
      position={"absolute"}
      left={"12.5%"}
      top={"8%"}
      borderRadius={"5px"}
    >
      <Box
        w={"100%"}
        h={"50px"}
        fontSize={"30px"}
        color={"brown"}
        fontStyle={""}
        textAlign={"center"}
        paddingTop={"10px"}
        fontFamily={"cursive"}
      >
        Các sản phẩm của chúng tôi
      </Box>
      <br />
      <Input
        placeholder="Bàn số..."
        borderRadius={"4px"}
        type={"number"}
        w={"200px"}
        h={"30px"}
        position={"relative"}
        left={"150px"}
        border={"1px solid brown"}
        outline={"none"}
        float={"left"}
        onChange={handleInput}
        fontFamily={"cursive"}
        boxShadow={"0.7px 0.7px 0.7px 0.7px gray"}
      ></Input>
      <Box
        borderRadius={"4px"}
        w={"231px"}
        h={"30px"}
        position={"relative"}
        left={"800px"}
        border={"1px solid brown"}
        outline={"none"}
        boxShadow={"0.7px 0.7px 0.7px 0.7px gray"}
      >
        <Input
          borderRadius={"4px"}
          placeholder="Search..."
          position={"absolute"}
          w={"87%"}
          h={"100%"}
          left={"0"}
          outline={"none"}
          border={"none"}
          float={"left"}
          fontFamily={"cursive"}
        ></Input>

        <Box
          float={"left"}
          w={"30px"}
          h={"30px"}
          //bg={'pink'}
          paddingTop={"3px"}
          fontSize={"20px"}
          fontFamily={"cursive"}
        >
          <Tooltip
            // fontSize="md"
            label="HoverMe"
            // bg={"black"}
            // w={"100px"}
            // height={"30px"}
            // color={"white"}
            // position={"relative"}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Tooltip>
        </Box>
      </Box>
      <br />
      <Button
        _hover={{
          bg: "rgb(249,62,62)",
          color: "white",
        }}
        fontFamily={"cursive"}
        borderRadius={"4px"}
        width={"100px"}
        border={"none"}
        bg={"rgb(45,153,174)"}
        height={"30px"}
        color={"white"}
        position={"relative"}
        left={"520px"}
        boxShadow={"1px 1px 1px 1px gray"}
        onClick={handleClick}
      >
        Xem hóa đơn
      </Button>
      <br /> <br />
      <ListCard2 table={table}/>
    </Box>
  );
};

export default InfoProduct;
