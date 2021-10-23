import { Flex, Button, Box, Icon} from "@chakra-ui/react"
import { ImUserCheck, ImUserPlus} from "react-icons/im"


export function Login() {
    return (
        <>
            <Flex
                bg="whiteAlpha.100"
                justifyContent="center"
                alignItems="center"
                marginRight="10"

            >
                <Button colorScheme="teal" variant="ghost">
                    Sign in
                    <Icon marginLeft="2" as={ImUserCheck}/>
                </Button>
                <Box marginLeft="2" marginRight="2">|</Box>
                <Button colorScheme="teal" variant="ghost">
                    Sign up
                    <Icon marginLeft="2" as={ImUserPlus}/>
                </Button>
            </Flex>
        </>
    )
}