import {
    Box,
    HStack,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
    InputProps
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

interface PricingProps extends InputProps {
    title: string;
    price: string;
    currencyType: string;
    time: string;
    conditions: string[];
}

export function Pricing(props: PricingProps) {
    return (
        <Box
            {...props as InputProps}
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                    {props.title}
                </Text>
                <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                        {props.currencyType}
                    </Text>
                    <Text fontSize="5xl" fontWeight="900">
                        {props.price}
                    </Text>
                    <Text fontSize="3xl" color="gray.500">
                        /{props.time}
                    </Text>
                </HStack>
            </Box>
            <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                    {
                        props.conditions.map(cond => (
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {cond}
                            </ListItem>
                        ))
                    }
                </List>
                <Box w="80%" pt={7}>
                    <Button w="full" 
                    colorScheme="teal" 
                    variant="outline" 
                    _hover={{backgroundColor: "teal.400", color: "white"}}>
                        Assinar
                    </Button>
                </Box>
            </VStack>
        </Box>
    );
}