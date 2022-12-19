import {
  Container,
  Heading,
  VStack,
  HStack,
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

import { MoonIcon, SunIcon, Icon } from '@chakra-ui/icons'
import { SiGithub, SiVercel, SiSafari, SiNetlify } from 'react-icons/si'

function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white.500', '#191b23')
  const color = useColorModeValue('gray.800', 'white')
  return (
    <Container bg="white.800" color={color}>
      <VStack my={24} spacing={12}>
        <Flex minWidth="max-content" alignItems="center" gap="4">
          <Box>
            <Heading>
              <Text>Tiffany White</Text>
            </Heading>
          </Box>
          <Box>
            <Button
              color="gray.500"
              size="l"
              borderRadius="full"
              p={2}
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              onClick={() => toggleColorMode()}
            >
              {colorMode === 'light' ? (
                <SunIcon color="orange" />
              ) : (
                <MoonIcon color="blue.700" />
              )}
            </Button>
          </Box>
        </Flex>
        <Spacer />
        <Text fontSize="3xl" textAlign="center">
          This is my personal site.
        </Text>

        <Divider />

        <Heading as="h2" mb={4}>
          Projects
        </Heading>
        <Text>Some of my best stuff 💪🏽</Text>

        <SimpleGrid
          spacing="9px"
          templateColumns="repeat(auto-fill, minmax(300px, 3fr))"
        >
          <Card maxW="xl" boxShadow="xl">
            <Heading mt={9} ml={5}>
              Ruby Static Site Generator
            </Heading>
            <CardBody>
              <Link
                href="https://github.com/twhite96/static-gen-ruby"
                isExternal
              >
                <Image
                  src="https://res.cloudinary.com/twhiteblog/image/upload/v1667626387/ruby-2_gn6h07.jpg"
                  borderRadius="sm"
                />
              </Link>
              <Text fontSize="2xl">
                A static site generator built with Ruby and Mustache.
              </Text>
            </CardBody>
            <CardFooter>
              <Button mr={2}>
                <Link
                  href="https://github.com/twhite96/static-gen-ruby"
                  isExternal
                >
                  <Icon as={SiGithub} mt={1} />
                </Link>
              </Button>
              <Button>
                <Link href="https://rubygen.tiff.run/" isExternal>
                  <Icon as={SiSafari} mt={1} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card maxW="xl" boxShadow="xl">
            <Heading mt={9} ml={5}>
              Pokedex App
            </Heading>
            <CardBody>
              <Link href="https://sparkbox-pokedex.vercel.app/" isExternal>
                <Image
                  src="https://res.cloudinary.com/twhiteblog/image/upload/v1671046606/pokedex_kvsgzg.png"
                  borderRadius="sm"
                />
              </Link>
              <Text fontSize="2xl">
                The Pokedex App built for a take home project for a company I'd
                interviewed with.
              </Text>
            </CardBody>
            <CardFooter>
              <Button mr={2}>
                <Link
                  href="https://github.com/twhite96/sparkbox-pokedex"
                  isExternal
                >
                  <Icon as={SiGithub} mt={1} />
                </Link>
              </Button>
              <Button>
                <Link href="https://sparkbox-pokedex.vercel.app/" isExternal>
                  <Icon as={SiVercel} mt={1} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card maxW="xl" boxShadow="xl">
            <Heading mt={9} ml={5}>
              Gatsby Portfolio, v5
            </Heading>
            <CardBody>
              <Link href="https://www.tiffanyrwhite.com" isExternal>
                <Image
                  src="https://res.cloudinary.com/twhiteblog/image/upload/v1667543018/old-portfolio_tyg5vx.png"
                  borderRadius="sm"
                />
              </Link>
              <Text fontSize="2xl">
                This is the fifth version of my portfolio I wrote with
                Gatsby.js, taking inspiration from Brittany Chiang's popular
                portfolio site.
              </Text>
            </CardBody>
            <CardFooter>
              <Button mr={2}>
                <Link
                  href="https://github.com/twhite96/portfolio-v5"
                  isExternal
                >
                  <Icon as={SiGithub} mt={1} />
                </Link>
              </Button>
              <Button>
                <Link href="https://www.tiffanyrwhite.com" isExternal>
                  <Icon as={SiNetlify} mt={1} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card maxW="xl" boxShadow="xl">
            <Heading mt={9} ml={5}>
              Bumped Landing Page v1
            </Heading>
            <CardBody>
              <Link
                href="https://web.archive.org/web/20200413140020/https://bumped.com/"
                isExternal
              >
                <Image
                  src="https://res.cloudinary.com/twhiteblog/image/upload/v1667543019/bumped-v1_shoafo.png"
                  borderRadius="sm"
                />
              </Link>
              <Text fontSize="2xl">The first iteration of Bumped.com</Text>
            </CardBody>
            <CardFooter>
              <Button>
                <Link
                  href="https://web.archive.org/web/20200413140020/https://bumped.com/"
                  isExternal
                >
                  <Icon as={SiSafari} mt={1} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>

        <Divider />
        <Container>
          <Flex pb={2}>
            <Avatar src="https://res.cloudinary.com/twhiteblog/image/upload/v1623806306/authorimage_o7mj3e.webp" />
            <Box ml="3">
              <Text fontWeight="bold">Tiffany White</Text>
              <Text fontSize="sm">Frontend Engineer</Text>
            </Box>
          </Flex>

          <Text py={2}>
            See the code for this site{' '}
            <Link href="#" isExternal textDecoration="underline">
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