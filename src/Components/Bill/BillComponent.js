import { Box, Button, ModalBody, Table, Text, Th, Tr } from "@chakra-ui/react";
import { getTableByNameAPI } from "../../api/Table";
import { useEffect, useState } from "react";
import { getFoodByIdAPI } from "../../api/Food";
import { getBillByTableIdAPI } from "../../api/Bill";
import { getBillInfoByBillIdAPI } from "../../api/BillInfo";
import RowBill from "./RowBill";
import { useParams } from "react-router-dom";
import MoneyFormatter from "../FormatMoney/FormatMoney";
import Modal from "react-modal";
import "./modal.css";

const BillComponent = () => {
  const params = useParams();
  const numberTable = params.numberTable;
  var i = 0;
  var j = -1;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isPay, setIsPay] = useState(false);
  const [food, setFood] = useState([]);
  const [table, setTable] = useState([]);
  const [bill, setBill] = useState([]);
  const [billInfo, setBillInfo] = useState([]);

  const handlePaymentClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePasswordSubmit = () => {
    // Kiểm tra mật khẩu tại đây. Nếu đúng, bạn có thể thay đổi trạng thái thành đã thanh toán.
    if (password === "phuong_@123") {
      setIsPay(true);
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const table = await getTableByNameAPI(numberTable);
    setTable(table);
    const bill = await getBillByTableIdAPI(table.id);
    setBill(bill);
    const billInfo = await getBillInfoByBillIdAPI(bill.id);
    setBillInfo(billInfo);
    // Lấy danh sách id của food từ các billInfo
    const foodIds = billInfo.map((billInfoItem) => billInfoItem.foodId);

    // Lấy thông tin food từ danh sách id food
    const foodPromises = foodIds.map((foodId) => getFoodByIdAPI(foodId));

    // Sử dụng Promise.all để gọi tất cả các API call cùng một lúc
    const foodData = await Promise.all(foodPromises);

    // foodData là mảng chứa thông tin của tất cả các food
    setFood(foodData);
  };
  const totalPrice = billInfo?.reduce(
    (accumulator, item) => accumulator + item.count,
    0
  );

  return (
    <Box
      borderRadius={"10px"}
      border={"2px solid gray"}
      position={"absolute"}
      left={"24%"}
      top={"10%"}
      w={"800px"}
      minH={"1000px"}
      bg={"whiteSmoke"}
      textAlign={"center"}
    >
      <Box
        w={"100%"}
        h={"60px"}
        display={"block"}
        fontSize={"40px"}
        color={"brown"}
      >
        𝓖𝓲𝓰𝓲 𝓒𝓸𝓯𝓯𝓮𝓮
      </Box>
      <Text fontWeight={"800"} fontFamily={"cursive"}>
        236 Hoàng Quốc Việt, Bắc Từ Liêm, Hà Nội
      </Text>
      <Text fontWeight={"800"}>---------------------------------</Text>
      <Text fontWeight={"800"} fontFamily={"cursive"}>
        PHIẾU THANH TOÁN
      </Text>

      <Text fontWeight={"800"} fontFamily={"cursive"}>
        Bàn số {table.name}
      </Text>
      <Button
        w={"200px"}
        height={"40px"}
        bg={"bisque"}
        border={"none"}
        borderRadius={"5px"}
        onClick={handlePaymentClick}
        color={"red"}
        fontSize={"18px"}
        fontFamily={"cursive"}
      >
        {" "}
        {isPay ? "Đã thanh toán" : "Chưa thanh toán"}
      </Button>
      <br />
      <br />
      <Modal className={"modal-payment"} isOpen={isModalOpen}>
        <h2 className={"titlePayment"}>Nhập mật khẩu</h2>
        <input
          className={"passPayment"}
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={"authPayment"} onClick={handlePasswordSubmit}>Xác nhận</button>
        <button className={"closePayment"} onClick={handleModalClose}>Đóng</button>
      </Modal>
      <Table w={"60%"} position={"relative"} left={"20%"}>
        <Tr>
          <Th fontFamily={"cursive"} position={"absolute"} w={"10%"}>
            Stt
          </Th>
          <Th
            fontFamily={"cursive"}
            position={"absolute"}
            w={"35%"}
            left={"10%"}
          >
            Tên món
          </Th>
          <Th
            fontFamily={"cursive"}
            position={"absolute"}
            w={"20%"}
            left={"45%"}
          >
            Đơn giá
          </Th>
          <Th
            fontFamily={"cursive"}
            position={"absolute"}
            w={"15%"}
            left={"65%"}
          >
            Số lượng
          </Th>
          <Th
            fontFamily={"cursive"}
            position={"absolute"}
            w={"20%"}
            left={"80%"}
          >
            Thành tiền
          </Th>
        </Tr>
        <br />
        <hr />
        {food?.map((item) => (
          <>
            <RowBill
              STT={++i}
              name={item.name}
              price={item.price}
              count={billInfo[++j]?.count}
            ></RowBill>
          </>
        ))}
      </Table>
      <Text fontFamily={"cursive"} position={"absolute"} w={"15%"} left={"55%"}>
        Tổng tiền:
      </Text>
      <Text
        fontFamily={"cursive"}
        position={"absolute"}
        w={"15%"}
        left={"67%"}
        color={"red"}
      >
        <MoneyFormatter amount={totalPrice} />
      </Text>
      <br />
      <Text fontFamily={"cursive"} position={"absolute"} w={"15%"} left={"55%"}>
        Giảm giá:
      </Text>
      <Text
        fontFamily={"cursive"}
        position={"absolute"}
        w={"15%"}
        left={"67%"}
        color={"red"}
      >
        0đ
      </Text>
      <br />
      <Text fontFamily={"cursive"} position={"absolute"} w={"30%"} left={"54%"}>
        ----------------------------
      </Text>
      <br />
      <Text fontFamily={"cursive"} position={"absolute"} w={"15%"} left={"55%"}>
        Thanh toán:
      </Text>
      <Text
        fontFamily={"cursive"}
        position={"absolute"}
        w={"15%"}
        left={"67%"}
        color={"red"}
      >
        <MoneyFormatter amount={totalPrice} />
      </Text>

      <br />
      <br />
      <Text fontFamily={"cursive"} position={"absolute"} w={"60%"} left={"20%"}>
        -----------------------------------------------------
      </Text>
      <br />
      <br />
      <Text fontFamily={"cursive"} position={"absolute"} w={"60%"} left={"20%"}>
        Cảm ơn quý khách!
      </Text>
      <br />
      <br />
      <Text fontFamily={"cursive"} position={"absolute"} w={"60%"} left={"20%"}>
        Rất hân hạnh được phục vụ!
      </Text>
      <br />
    </Box>
  );
};
export default BillComponent;
