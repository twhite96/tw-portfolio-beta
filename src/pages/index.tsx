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
import { SiGithub, SiVercel, SiSafari } from 'react-icons/si'

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

        {/*<Container centerContent>*/}
        {/*  */}
        {/*</Container>*/}

        <Divider />
        <Heading as="h2" mb={4}>
          Projects
        </Heading>
        <Text>Some of my best stuff 💪🏽</Text>

        <Divider />

        <SimpleGrid
          // minChildWidth="90%"
          spacing="9px"
          templateColumns="repeat(auto-fill, minmax(300px, 3fr))"
        >
          <Card boxShadow="xl">
            <CardHeader>
              <Heading> Ruby Static Site Generator</Heading>
            </CardHeader>
            <CardBody>
              <Image
                src="https://res.cloudinary.com/twhiteblog/image/upload/v1667626387/ruby-2_gn6h07.jpg"
                borderRadius="sm"
              />
              <Text>A static site generator built with Ruby and Mustache.</Text>
            </CardBody>
            <CardFooter>
              <Button>
                <Link
                  href="https://github.com/twhite96/static-gen-ruby"
                  isExternal
                >
                  <Icon as={SiGithub} mt={1} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card boxShadow="xl">
            <CardHeader>
              <Heading>Bumped Landing Page v1</Heading>
            </CardHeader>
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
              <Text>The first iteration of Bumped.com</Text>
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
          <Card boxShadow="xl">
            <CardHeader mt={9}>
              <Heading>Pokedex App</Heading>
            </CardHeader>
            <CardBody>
              <Link href="https://sparkbox-pokedex.vercel.app/" isExternal>
                <Image
                  src="https://res.cloudinary.com/twhiteblog/image/upload/v1671046606/pokedex_kvsgzg.png"
                  borderRadius="sm"
                />
              </Link>
              <Text>
                The Pokedex App built for a take home project for a company I'd
                interviewed with.
              </Text>
            </CardBody>
            <CardFooter>
              <Button mr={2}>
                <Link href="https://sparkbox-pokedex.vercel.app/" isExternal>
                  <Icon as={SiVercel} mt={1} />
                </Link>
              </Button>
              <Button>
                <Link
                  href="https://github.com/twhite96/sparkbox-pokedex"
                  isExternal
                >
                  <Icon as={SiGithub} mt={1} />
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