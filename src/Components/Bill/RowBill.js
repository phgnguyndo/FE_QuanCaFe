import { Td, Tr } from "@chakra-ui/react";

const RowBill = (props) => {
    
  return (
    <>
      <Tr>
        <Td fontFamily={"cursive"} position={"absolute"} w={"10%"}>
          {props.STT}
        </Td>
        <Td fontFamily={"cursive"} position={"absolute"} w={"35%"} left={"10%"}>
          {props.name}
        </Td>
        <Td fontFamily={"cursive"} position={"absolute"} w={"20%"} left={"45%"}>
          {props.price}
        </Td>
        <Td fontFamily={"cursive"} position={"absolute"} w={"15%"} left={"65%"}>
          {props.count/props.price}
        </Td>
        <Td fontFamily={"cursive"} position={"absolute"} w={"20%"} left={"80%"}>
          {props.count}
        </Td>
      </Tr>
      <br />
      <br />
      <hr />
    </>
  );
};
export default RowBill
