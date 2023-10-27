import { useEffect, useState } from "react";
import { getFoodAPI } from "../../api/Food";
import Card from "./Card"
import { Box } from "@chakra-ui/react";

const ListCard = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetchDataFood();
  }, []);

  const fetchDataFood = async () => {
    setFood(await getFoodAPI());
  };

  // const fetchData = async () => {
  //   const data=getFoodAPI();
  //   console.log(data)
  // };  

  return (
    <Box borderRadius={'5px'}>
    {food?.map((item) => (
  <Card price={item.price} name={item.name} imageUrl={item.imageUrl} key={item.key} phong={"123r234"}/>
    ))}</Box>
  )
};
export default ListCard;
