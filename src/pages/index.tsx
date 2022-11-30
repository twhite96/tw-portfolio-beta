import {
  Container,
  Heading,
  VStack,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Button,
  Text,
  OrderedList,
  ListItem,
  Link,
  Image,
  Avatar,
  Spacer,
  Flex,
  Badge,
  Box,
  useColorMode,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
// import { FEED } from '../lib/rss'

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white.500', '#191b23')
  const color = useColorModeValue('gray.800', 'white')
  return (
    <Container bg='white.800' color={color}>
      <VStack my={24} spacing={12}>
        <Flex minWidth='max-content' alignItems='center' gap='4'>
          <Box>
            <Heading>
              <Text>Tiffany White</Text>
            </Heading>
          </Box>
          <Box>
            <Button
                color='gray.500' size='l'
                borderRadius='full'
                p={2}
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                onClick={() => toggleColorMode()}>
              {colorMode === "light" ? (
                  <SunIcon color='orange' />
              ) : (
                  <MoonIcon color='blue.700' />
              )}
            </Button>
          </Box>

        </Flex>
        <Spacer />
        <Text fontSize="3xl" textAlign="center">
          This is my personal site.
        </Text>

        <Divider />

        <Container centerContent>
          <Heading as="h2" fontSize="2xl" mb={4}>
            Projects
          </Heading>
          <Text>
            Some of my best stuff 💪🏽
          </Text>
          <SimpleGrid spacing={6} templateColumns='repeat(auto-fill, minmax(240px, 1fr))'>
            <Card boxShadow='xl'>
              <CardHeader>
                <Heading size='md'> Ruby Static Site Generator</Heading>
              </CardHeader>
              <CardBody>
                <Image
                    src='https://res.cloudinary.com/twhiteblog/image/upload/v1667626387/ruby-2_gn6h07.jpg'
                    borderRadius='sm' />
                <Text>A static site generator built with Ruby and Mustache.</Text>
              </CardBody>
              <CardFooter>
                <Button>
                  <Link
                    href="https://github.com/twhite96/static-gen-ruby"
                    isExternal
                  >
                    View on GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card boxShadow='xl'>
              <CardHeader>
                <Heading size='md'>Bumped Landing Page v1</Heading>
              </CardHeader>
              <CardBody>
                <Image
                  src='https://res.cloudinary.com/twhiteblog/image/upload/v1667543019/bumped-v1_shoafo.png'
                  borderRadius='sm' />
                <Text>A static site generator built with Ruby and Mustache.</Text>
              </CardBody>
              <CardFooter>
                <Button>
                  <Link
                    href="https://github.com/twhite96/static-gen-ruby"
                    isExternal
                  >
                    View on GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>

        </Container>

        <Divider />



        <Container>
            <Flex pb={2}>
              <Avatar src="https://res.cloudinary.com/twhiteblog/image/upload/v1623806306/authorimage_o7mj3e.webp" />
              <Box ml="3">
                <Text fontWeight="bold">
                  Tiffany White
                </Text>
                <Text fontSize="sm">Frontend Engineer</Text>
              </Box>
            </Flex>

            <Text py={2}>
              See the code for this site {' '}
              <Link
                href="#"
                isExternal
                textDecoration="underline"
              >
                on GitHub
              </Link>
              .
            </Text>
        </Container>
      </VStack>
    </Container>

  )
}

export default Home