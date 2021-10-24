import { Icon, Flex, Box, Divider, Center, SimpleGrid, Text, Stack, Heading, useColorModeValue, Input, Button } from '@chakra-ui/react'
import { AiOutlineWhatsApp, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { Header } from './components/Header'
import { Login } from './components/Login'
import { Pricing } from './components/Pricing'
import BackgroundPricing from "./assets/fachada.jpg"

function App() {
  return (
    <div>
      <Flex flexDirection="column" marginTop="1">
        <Box alignItems="end" marginBottom="2">
          <Login />
        </Box>
        <Center>
          <Divider width="90%" orientation="horizontal" />
        </Center>
        <Box marginTop="4">
          <Header />
        </Box>
      </Flex>
      <Center marginTop="4">
        <Divider width="90%" orientation="horizontal" />
      </Center>
      <Center marginTop="6" fontSize="2xl" >
        <Box backgroundColor="teal.400" width="auto" padding="2" paddingLeft="4" paddingRight="4" borderRadius="md">
          <Text fontWeight="hairline" color="white">
            Bem-vindo ao <span style={{fontWeight:"bold", marginLeft:"2", color:"white"}}> Hospital Cotemig</span>
          </Text>
        </Box>
      </Center>
      <Box marginTop="6" marginLeft="6">
        <Text fontWeight="hairline" fontSize="3xl" color="teal.400">
          Sobre o hospital
        </Text>
        <Box marginTop="2">
          <Divider width="90%" orientation="horizontal" />
        </Box>
        <Box marginTop="2" fontWeight="hairline" fontSize="xl">
          <Text>
            Somos um hospital de referência tecnológica.
          </Text>
          <Text>
            Atendemos diversas especialidades, com <span style={{ color: "teal" }}>médicos e enfermeiros experientes e renomados</span>. Tudo para você ter o melhor serviço.
          </Text>
        </Box>
      </Box>
      <Box marginTop="10" marginLeft="6">
        <Text fontWeight="hairline" fontSize="3xl"  color="teal.400">
          Algumas notícias recentes
        </Text>
        <Box marginTop="2" >
          <Divider width="90%" orientation="horizontal" />
        </Box>
        <Flex paddingLeft="10" paddingRight="10" justifyContent="space-between">
          <Box marginTop="2" fontWeight="hairline" fontSize="xl" width="300px" borderRadius="10" padding="2">
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'xl'}
                fontFamily={'body'}>
                Mudança tecnológica
              </Heading>
              <Text color={'gray.500'}>
                Com o avanço tecnológico dos dias atuais, não podemos ficar para trás!
                Estamos iniciando um projeto para melhorar a nossa estrutura e tecnologia presente no hospital.
              </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text color={'gray.500'}>Outubro 08, 2021 · 6min</Text>
              </Stack>
            </Stack>
          </Box>
          <Center>
            <Divider height="50%" orientation="vertical" />
          </Center>
          <Box marginTop="2" fontWeight="hairline" fontSize="xl" width="300px" borderRadius="10" padding="2">
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'xl'}
                fontFamily={'body'}>
                Banco de Sangue
              </Heading>
              <Text color={'gray.500'}>
                O Serviço de Hemoterapia do Hospital Cotemig é referência na especialidade em Minas Gerais,
                além de ser reconhecido como uma das principais instituições que oferecem Residência Médica...
              </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text color={'gray.500'}>Setembro 20, 2021 · 4min</Text>
              </Stack>
            </Stack>
          </Box>
          <Center>
            <Divider height="50%" orientation="vertical" />
          </Center>
          <Box marginTop="2" fontWeight="hairline" fontSize="xl" width="300px" borderRadius="10" padding="2">
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'xl'}
                fontFamily={'body'}>
                A Cirurgia Robótica
              </Heading>
              <Text color={'gray.500'}>
                Trata-se de acesso cirúrgico realizado por um cirurgião que comanda as pinças de um robô,
                o que possibilita maior precisão cirúrgica, menores perdas sanguíneas, menores índices de infecção...
              </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text color={'gray.500'}>Julho 16, 2021 · 4min</Text>
              </Stack>
            </Stack>
          </Box>
          <Center>
            <Divider height="70%" orientation="vertical" />
          </Center>
          <Box marginTop="2" fontWeight="hairline" fontSize="xl" width="300px" borderRadius="10" padding="2">
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'xl'}
                fontFamily={'body'}>
                Medicina Nuclear
              </Heading>
              <Text color={'gray.500'}>
                A Medicina Nuclear é uma especialidade médica que utiliza pequenas quantidades
                de substâncias radioativas para diagnosticar doenças.
              </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text color={'gray.500'}>Julho 04, 2021 · 3min</Text>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Box>
      <Box marginTop="10" marginLeft="6">
        <Text fontWeight="hairline" fontSize="3xl"  color="teal.400">
          Nossos planos
        </Text>
        <Box marginTop="2" >
          <Divider width="70%" orientation="horizontal" />
        </Box>
      </Box>
      <Box
        marginTop="4"
        backgroundImage={BackgroundPricing}>
        <SimpleGrid columns={3} spacing={10} padding="10">
          <Pricing
            backgroundColor="white"
            conditions={["Consultas com 10% de desconto", "Desconto em farmárcias"]}
            currencyType="R$"
            price="20,00"
            time="mês"
            title="Plano básico" />
          <Pricing
            backgroundColor="white"
            conditions={["Consultas com 50% de desconto", "Internações com 25% de desconto", "Desconto em farmárcias"]}
            currencyType="R$"
            price="100,00"
            time="mês"
            title="Plano avançado" />
          <Pricing
            backgroundColor="white"
            conditions={["Consultas com 20% de desconto", "Desconto em farmárcias"]}
            currencyType="R$"
            price="35,00"
            time="mês"
            title="Plano intermediário" />

        </SimpleGrid>
      </Box>
      <Box marginTop="10" marginLeft="6"  color="teal.400">
        <Text fontWeight="hairline" fontSize="3xl">
          Nossa localização
        </Text>
        <Box marginTop="2" >
          <Divider width="70%" orientation="horizontal" />
        </Box>
      </Box>
      <Box marginTop="6">
        <Center>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.715772649848!2d-43.96852448451633!3d-19.936378743657357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6970bbf3f5be1%3A0x76fc4c9a2db9d473!2sFaculdade%20COTEMIG!5e0!3m2!1spt-BR!2sbr!4v1634994036608!5m2!1spt-BR!2sbr"
            width="100%" height="400px"
            loading="lazy" />
        </Center>
        <SimpleGrid columns={3} spacing={10} padding="10">
          <Box >
            <Text fontWeight="hairline" fontSize="3xl" marginBottom="4">Endereço</Text>
            <Text fontWeight="hairline" fontSize="xl">Rua Santa Cruz, Alto Barroca</Text>
            <Text fontWeight="hairline" fontSize="xl">Belo Horizonte</Text>
            <Text fontWeight="hairline" fontSize="xl">Minas Gerais</Text>
          </Box>
          <Box>
            <Text fontWeight="hairline" fontSize="3xl" marginBottom="4">Mídias Sociais</Text>
            <Text fontWeight="hairline" fontSize="xl" >Instagram <Icon _hover={{ cursor: "pointer" }} color="teal" as={AiOutlineInstagram} /></Text>
            <Text fontWeight="hairline" fontSize="xl">YoutTube <Icon _hover={{ cursor: "pointer" }} color="teal" as={AiFillYoutube} /></Text>
            <Text fontWeight="hairline" fontSize="xl">WhatsApp <Icon _hover={{ cursor: "pointer" }} color="teal" as={AiOutlineWhatsApp} /></Text>
          </Box>
          <Box>
            <Text fontWeight="hairline" fontSize="3xl" marginBottom="4">Contato</Text>
            <Input borderRadius="full" variant="filled" placeholder="Seu e-mail" marginBottom="4" />
            <Input borderRadius="full" variant="filled" placeholder="Sua mensagem" marginBottom="4" />
            <Button colorScheme="teal">Enviar</Button>
          </Box>
        </SimpleGrid>

      </Box>
    </div>
  )
}

export default App;
