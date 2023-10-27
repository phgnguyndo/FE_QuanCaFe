import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { getFoodAPI } from "../../api/Food";
import { useEffect, useState } from "react";
import { getTableByNameAPI } from "../../api/Table";
import { getBillByTableIdAPI } from "../../api/Bill";
import axios from "axios";

const Card2 = (props) => {
  const [sl,setSL]=useState(0)
  const [food, setFood] = useState([]);
  const numberTable=props.table
  const [bill, setBill] = useState([]);
  useEffect(() => {
    fetchDataFood();
  }, []);
  const fetchDataFood = async () => {
    setFood(await getFoodAPI());
  };
  useEffect(()=>{
    fetchDataTableAndBill()
  },[numberTable])
  
  const fetchDataTableAndBill = async ()=>{
    const getTable = await getTableByNameAPI(numberTable)
    const bill = await getBillByTableIdAPI(getTable.id)
    setBill(bill)
    console.log(numberTable)
  }
  const handleOrder = () => {
  var updatepostForBillInfo = {
    count: food[props.numberCard]?.price * sl,
    billId: bill?.id,
    foodId: food[props.numberCard]?.id
  };
    var checked = document.getElementById("check");   
    if (sl > 0 && numberTable>0) {
      checked.style.display = "block";     
      axios
        .post("https://localhost:7242/api/BillInfo", updatepostForBillInfo)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
        else {
      alert("Nhập bàn, nhập số lượng hợp lệ...")
      }
  };

  return (
    <Box
      float={"left"}
      marginLeft={"10px"}
      marginTop={"20px"}
      position={"relative"}
      w={"500px"}
      h={"220px"}
      left={"5%"}
      borderRadius={"5px"}
      overflow={"hidden"}
      boxShadow={" 1px 1px 1px 0.5px rgb(248,218,208)"}
    >
      <Box
        w={"300px"}
        h={"250px"}
        display={"flex"}
        //bg={"whiteSmoke"}
        float={"left"}
      >
        <Image
          _hover={{
            transform: "scale(1.01,1.02)",
          }}
          position={"relative"}
          left={"10px"}
          top={"10px"}
          w={"280px"}
          h={"200px"}
          borderRadius={"5px"}
          src={"https://localhost:7242/api/Foods/" + props.imageUrl}
        ></Image>
      </Box>
      <Box
        float={"left"}
        w={"200px"}
        h={"250px"} //bg={'pink'}
      >
        <Text
          display={"flex"}
          float={"left"}
          fontWeight={"1000"}
          color={"brown"}
          fontFamily={"cursive"}
        >
          {props.name}
        </Text>
        <Text
          display={"flex"}
          float={"left"}
          fontWeight={"1000"}
          color={"brown"}
          fontFamily={"cursive"}
        >
          {props.price}đ
        </Text>

        <Input
          w={"100px"}
          h={"25px"}
          borderRadius={"4px"}
          border={"1px solid brown"}
          display={"flex"}
          id={props.numberCard}
          outline={"none"}
          onChange={(e)=>{
            setSL(e.target.value)
            
          }}
          placeholder="Số lượng..,"
          fontFamily={"cursive"}
        ></Input>
        <Button
          _hover={{
            bg: "rgb(45,153,174)",
            color: "white",
          }}
          fontFamily={"cursive"}
          w={"100px"}
          h={"30px"}
          borderRadius={"4px"}
          border={"none"}
          display={"flex"}
          outline={"none"}
          top={"15px"}
          bg={"rgb(13,87,119)"}
          color={"whiteSmoke"}
          boxShadow={"0.7px 0.7px 0px 0.7px gray"}
          onClick={handleOrder}
        >
          Gọi món
        </Button>

        <Box
          position={"relative"}
          left={"130px"}
          top={"-10px"}
          w={"25px"}
          h={"25px"}
          color={"green"}
          fontSize={"20px"}
          display={"none"}
          id="check"
        >
          <FontAwesomeIcon icon={faCheck} />
        </Box>
      </Box>
    </Box>
  );
};
export default Card2;
