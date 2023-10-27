import { Box } from "@chakra-ui/react"
import anh1 from '../../Image/kinh-nghiem-mo-quan-cafe-1.jpg'
import anh2 from '../../Image/menu-quan-cafe-1.jpg'
import anh3 from '../../Image/quan-cafe-da-nang-10.1.jpg'

const Head=()=>{
    return(
        <Box 
         position={'absolute'}
         top={'8%'}
         left={'0px'}
         w={'100%'} h={'400px'}
         bg={'brown'}
        //  bgImage={anh1}
         bgRepeat={'no-repeat'}
         
        >
             <Box 
         //position={'absolute'}
         _hover={{
            transform:'scale(1.01,1.01)'
         }}
         top={'7.2%'}
         left={'0px'}
         w={'39%'} h={'400px'}
         bg={'blue'}
         bgImage={anh1}
         bgRepeat={'no-repeat'}
         float={'left'}
        >
        
        </Box>
        <Box 
         _hover={{
            transform:'scale(1.01,1.01)'
         }}
         top={'7.2%'}
         left={'0px'}
         w={'39%'} h={'400px'}
         bg={'green'}
         bgImage={anh2}
         bgRepeat={'no-repeat'}
         float={'left'}
        >
        
        </Box>
        <Box 
        _hover={{
            transform:'scale(1.01,1.01)'
         }}
         top={'7.2%'}
         left={'0px'}
         w={'22%'} h={'400px'}
         bg={'pink'}
         bgImage={anh3}
         bgRepeat={'no-repeat'}
         float={'left'}
        >
        
        </Box>
        
        </Box>
    )
}
export default Head