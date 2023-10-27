import { Box } from "@chakra-ui/react"
import Header from "../Components/Header"
import BillComponent from "../Components/Bill/BillComponent"

const Bill=()=>{
    return(
        <Box>
            <Header/>
            <BillComponent/>
        </Box>
    )
}
export default Bill