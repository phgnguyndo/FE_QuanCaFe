import { Box, FormControl, Input, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { login } from "../../api/Auth"
import axios from "axios";
const FormLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const valueInputUsername = (e) => {
    setUsername(e.target.value);
  };
  const valueInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    axios
      .post("https://localhost:7242/api/Auth/Login", data)
      .then(function (response) {
          navigate("/");
      })
      .catch(function (error) {
        var display = document.getElementById("noticed");
        display.style.display="block"
      });
  };
  return (
    <>
      <Box
        width={"400px"}
        height={"200px"}
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
              Đăng nhập
            </Text>
          </Box>
          <Box
            width={"100%"}
            height={"40px"}
            //   bg={"red"}
            float={"left"}
            textAlign={"center"}
          >
            <Input
              borderRadius={"5px"}
              onChange={valueInputUsername}
              float={"left"}
              position={"relative"}
              width={"99%"}
              border={"none"}
              placeholder="username"
              left={"0.5%"}
              outline={"none"}
              height={"100%"}
              fontSize={"15px"}
              bg={"rgb(253,235,223)"}
              fontFamily={"cursive"}
            ></Input>
            <Input
              borderRadius={"5px"}
              onChange={valueInputPassword}
              placeholder="password"
              left={"0.5%"}
              float={"left"}
              position={"relative"}
              top={"5px"}
              width={"99%"}
              border={"none"}
              fontFamily={"cursive"}
              outline={"none"}
              height={"100%"}
              fontSize={"15px"}
              bg={"rgb(253,235,223)"}
            ></Input>
          </Box>

          <Button
            fontFamily={"cursive"}
            _hover={{ bg: "rgb(42,52,92)", color: " white" }}
            width={"80px"}
            height={"30px"}
            borderRadius={"5px"}
            bg={"rgb(45,153,174)"}
            onClick={handleLogin}
            display={"flex"}
            left={"315px"}
            position={"absolute"}
            top={"160px"}
            border={"none"}
            outline={"none"}
            color={"white"}
          >
            Login
          </Button>
        </FormControl>
      </Box>
      <Box
        id={"noticed"}
        width={"300px"}
        height={"40px"}
        bg={"beige"}
        position={"absolute"}
        left={"38%"}
        top={"60%"}
        borderRadius={"5px"}
        padding={"9px"}
        color={"red"}
        display={"none"}
        fontFamily={"cursive"}
      >
        username or password fail !
      </Box>
    </>
  );
};
export default FormLogin;
