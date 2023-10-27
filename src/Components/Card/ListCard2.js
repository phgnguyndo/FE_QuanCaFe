import { useEffect, useState } from "react";
import { getFoodAPI } from "../../api/Food";
import Card2 from "./Card2";
import { Box } from "@chakra-ui/react";

const ListCard2 = ({table}) => {
  // console.log(table)
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetchDataFood();
  }, []);
  const fetchDataFood = async () => {
    setFood(await getFoodAPI());
  };
  var i=0

  return (
    <Box>
      {food?.map((item) => (
        <Card2
          table={table}
          numberCard={i++}
          key={item.id}
          price={item.price}
          name={item.name}
          imageUrl={item.imageUrl}
        />
      ))}
    </Box>
  );
};
export default ListCard2;
