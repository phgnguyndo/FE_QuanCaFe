import { Box, Button, FormControl, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const UpFood = () => 
{
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState(0);
  const [typeProduct, setTypeProduct] = useState(0);
  const [imageProduct, setImageProduct] = useState("");

  const handleUpload = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", nameProduct);
    formdata.append("price", priceProduct);
    formdata.append("foodCategoryId", typeProduct);
    formdata.append("file", imageProduct);
    if (nameProduct !== "" && priceProduct >= 0 && typeProduct > 0) {
      axios
        .post("https://localhost:7242/api/Foods", formdata)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Vui lòng nhập đầy đủ thông tin...!");
    }
  };
  return (
    <FormControl 
      id={"myForm"}
      // onChange={handleChange}
      position={"absolute"}
      left={"15%"}
      top={"10%"}
      borderRadius={"10px"}
      w={"70%"}
      h={"500px"}
      bg={"rgb(255,211,182)"}
      overflow={"hidden"}
    >
      <Box
        w={"100%"}
        height={"12%"}
        textAlign={"center"}
        paddingTop={"10px"}
        fontSize={"30px"}
        fontFamily={"cursive"}
        color={"brown"}
      >
        Thêm sản phẩm
      </Box>
      <Box w={"50%"} h={"70%"} float={"left"}>
        <Input
          onChange={(e) => {
            setNameProduct(e.target.value);
          }}
          name={"name"}
          paddingLeft={"10px"}
          color={"brown"}
          fontFamily={"cursive"}
          width={"80%"}
          position={"relative"}
          left={"10%"}
          top={"16%"}
          height={"35px"}
          borderRadius={"5px"}
          border={"none"}
          placeholder="Tên sản phẩm "
          outline={"none"}
          boxShadow={"1px 1px 1px 1px gray"}
        ></Input>
        <Input
          onChange={(e) => {
            setPriceProduct(parseInt(e.target.value));
          }}
          name="price"
          paddingLeft={"10px"}
          color={"brown"}
          fontFamily={"cursive"}
          width={"80%"}
          position={"relative"}
          left={"10%"}
          top={"32%"}
          height={"35px"}
          borderRadius={"5px"}
          border={"none"}
          placeholder="Giá... "
          outline={"none"}
          boxShadow={"1px 1px 1px 1px gray"}
        ></Input>
        <Select
          onChange={(e) => {
            setTypeProduct(e.target.value);
          }}
          name="typeProduct"
          fontFamily={"cursive"}
          width={"80%"}
          position={"relative"}
          left={"10%"}
          top={"48%"}
          height={"35px"}
          color={"brown"}
          borderRadius={"5px"}
          border={"none"}
          placeholder="Loại sản phẩm... "
          outline={"none"}
          boxShadow={"1px 1px 1px 1px gray"}
        >
          <option value="1">Capuchino</option>
          <option value="2">Latte</option>
          <option value="3">Mocha</option>
        </Select>
      </Box>
      <Box w={"50%"} h={"70%"} float={"left"}>
        <Input
          onChange={(e) => {
            setImageProduct(e.target.files[0]);
          }}
          name="file"
          fontFamily={"cursive"}
          width={"60%"}
          h={"60%"}
          bg={"whiteSmoke"}
          position={"relative"}
          left={"20%"}
          top={"17.2%"}
          padding={"16% 10%"}
          color={"brown"}
          borderRadius={"5px"}
          type="file"
          border={"none"}
          outline={"none"}
          boxShadow={"1px 1px 1px 1px gray"}
        ></Input>
      </Box>
      <br />
      <Button
        _hover={{
          bg: "rgb(45,153,174)",
          color: "white",
        }}
        w={"100px"}
        borderRadius={"5px"}
        h={"35px"}
        border={"none"}
        bg={"rgb(249,62,62)"}
        outline={"none"}
        left={"45%"}
        color={"whitesmoke"}
        fontFamily={"cursive"}
        fontWeight={"800"}
        onClick={handleUpload}
      >
        Upload
      </Button>
    </FormControl>
  );
};
export default UpFood;
