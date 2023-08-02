import {
  Container,
  Heading,
  VStack,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Button,
  Text,
  Link,
  Image,
  Avatar,
  Spacer,
  Flex,
  Box,
  useColorMode,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
// import { FEED } from '../lib/rss.js'

import { MoonIcon, SunIcon, Icon } from '@chakra-ui/icons'
import { SiGithub, SiVercel, SiSafari, SiNetlify } from 'react-icons/si'

import dynamic from 'next/dynamic'

const DynamicFeeds = dynamic(() => import('./feeds'), {
  ssr: false,
})

function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white.500', '#191b23')
  const color = useColorModeValue('gray.800', 'white')
  return (
    <>
    <p style={{display: 'none'}}>proven6060f6</p>
    
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
              Calaxy, Inc Landing Page
            </Heading>
            <CardBody>
              <Link href="https://calaxy.com" isExternal>
                <Image
                  src="https://res.cloudinary.com/twhiteblog/image/upload/v1667543020/calaxy-webflow_ixujbx.png"
                  borderRadius="sm"
                />
              </Link>
              <Text fontSize="2xl">
                I created this landing page for Calaxy, Inc, a startup I contracted for from
                2021-2022. I used Webflow to create the landing page using custom designs from our CDO using Figma. We built custom styles and interactivity using CSS and JavaScript.
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
              Gatsby Portfolio, v5
            </Heading>
            <CardBody>
              <Link href="https://twhite-portfolio.netlify.app" isExternal>
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
          <Card maxW="xl" boxShadow="xl">
            <Heading mt={9} ml={5}>
              Linktree Alternative
            </Heading>
            <CardBody>
              <Link href="https://links.tiffanywhite.dev" isExternal>
                <Image
                  src="https://res.cloudinary.com/twhiteblog/image/upload/v1591128562/new-office_nib11t.jpg"
                  borderRadius="sm"
                />
              </Link>
              <Text fontSize="2xl">
                A Link in bio Linktree clone with a simple Astro template.
              </Text>
            </CardBody>
            <CardFooter>
              <Button mr={2}>
                <Link href="https://github.com/twhite96/tw-links" isExternal>
                  <Icon as={SiGithub} mt={1} />
                </Link>
              </Button>
              <Button>
                <Link href="https://links.tiffanywhite.dev" isExternal>
                  <Icon as={SiVercel} mt={1} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>

        <Divider />
        <Container>
          {/* <Container>
            <Heading>Latest Posts</Heading>
            <DynamicFeeds />
          </Container> */}

          <Flex pb={2}>
            <Avatar src="https://res.cloudinary.com/twhiteblog/image/upload/v1623806306/authorimage_o7mj3e.webp" />
            <Box ml="3">
              <Text fontWeight="bold">Tiffany White</Text>
              <Text fontSize="sm">Frontend Engineer</Text>
            </Box>
          </Flex>

          <Text py={2}>
            See the code for this site{' '}
            <Link
              href="https://github.com/twhite96/tw-portfolio-beta"
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
    </>
  )
}

export default Home