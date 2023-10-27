import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate=useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const handleRegister = () => {
    const data = {
      username: username,
      password: password,
      roles: ["Reader"]
    };
    axios
      .post("https://localhost:7242/api/Auth/Register", data)
      .then(function (response) {
         console.log(response)
         navigate("/logon");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box
      width={"400px"}
      height={"230px"}
      border={"1px solid black"}
      borderRadius={"5px"}
      position={"absolute"}
      top={"30%"}
      left={"38%"}
      boxShadow={"2px 2px 2px 2px gray"}
    >
      <FormControl>
        <Box
          position={"relative"}
          top={"-20px"}
          width={"100%"}
          height={"45px"}
          bg={"rgb(13,87,119)"}
        >
          <Text
            textAlign={"center"}
            position={"relative"}
            top={"10px"}
            fontFamily={"cursive"}
            width={"100%"}
            height={"100%"}
            color={"whiteSmoke"}
            fontSize={"20px"}
          >
            Đăng kí
          </Text>
        </Box>
        <Box
          position={"relative"}
          top={"-10px"}
          width={"100%"}
          height={"120px"}
          //   bg={"red"}
          float={"left"}
          textAlign={"center"}
        >
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            float={"left"}
            borderRadius={"5px"}
            position={"relative"}
            width={"99%"}
            border={"none"}
            placeholder="username"
            left={"0.5%"}
            outline={"none"}
            height={"33%"}
            fontSize={"15px"}
            bg={"rgb(253,235,223)"}
            fontFamily={"cursive"}
          ></Input>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            left={"0.5%"}
            borderRadius={"5px"}
            float={"left"}
            position={"relative"}
            top={"5px"}
            width={"99%"}
            border={"none"}
            outline={"none"}
            height={"33%"}
            fontSize={"15px"}
            bg={"rgb(253,235,223)"}
            fontFamily={"cursive"}
          ></Input>
          <Input
            onChange={(e) => {
              setPwConfirm(e.target.value);
            }}
            placeholder="confirm password"
            left={"0.5%"}
            borderRadius={"5px"}
            float={"left"}
            position={"relative"}
            top={"10px"}
            width={"99%"}
            border={"none"}
            outline={"none"}
            height={"33%"}
            fontSize={"15px"}
            bg={"rgb(253,235,223)"}
            fontFamily={"cursive"}
          ></Input>
        </Box>
        <Button
          onClick={handleRegister}
          fontFamily={"cursive"}
          _hover={{ bg: "rgb(42,52,92)", color: " white" }}
          w={"80px"}
          h={"30px"}
          bg={"rgb(45,153,174)"}
          borderRadius={"5px"}
          top={"10px"}
          border={"none"}
          outline={"none"}
          color={"white"}
          left={"315px"}
        >
          Register
        </Button>
      </FormControl>
    </Box>
  );
};
export default FormRegister;
