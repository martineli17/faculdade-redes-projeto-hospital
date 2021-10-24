import { Flex, Button, Center, Input, Icon, Box } from "@chakra-ui/react"

export function Header() {
    return (
        <>
            <Flex
                bg="whiteAlpha.100"
                justifyContent="center"
                alignItems="center"
                marginRight="10"
            >
                <Box flex="2" >
                    <Flex justifyContent="center" alignItems="center">
                        <Button flex="1" colorScheme="teal" variant="ghost">
                            Sobre o Hospital
                        </Button>
                        <Button flex="1" colorScheme="teal" variant="ghost">
                            Contatos
                        </Button>
                        <Button flex="1" colorScheme="teal" variant="ghost">
                            Agendamentos
                        </Button>
                        <Button flex="1" colorScheme="teal" variant="ghost">
                            Pagamentos
                        </Button><Button flex="1" colorScheme="teal" variant="ghost">
                            Especialidades
                        </Button>
                    </Flex>
                </Box>
                <Box flex="1" marginLeft="6">
                    <Input borderRadius="full" variant="filled" placeholder="Pesquisar..." />
                </Box>
            </Flex>
        </>
    )
}