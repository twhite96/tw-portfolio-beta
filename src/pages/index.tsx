import {
  Container,
  Heading,
  VStack,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  OrderedList,
  ListItem,
  Link,
  Switch,
  Avatar,
  Spacer,
  Flex,
  Badge,
  Box,
  useColorMode,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'

function Home() {
  const { toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white.500', '#191b23')
  const color = useColorModeValue('gray.800', 'white')
  return (
    <Container color={color}>
      <VStack my={24} spacing={12}>
        <Flex minWidth='max-content' alignItems='center'>
            <Heading>
            <Text>Tiffany White <span> <Switch size="md" colorScheme="purple" onChange={toggleColorMode}
            /></span></Text>
            </Heading>
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
          <OrderedList>
            <ListItem>
              Some of my best stuff 💪🏽
              <Link
                href="https://github.com/kahlil/dark/generate"
                isExternal
                textDecoration="underline"
              >
                github.com/kahlil/dark/generate
              </Link>
            </ListItem>
            <ListItem>
              Hit the ground running with{' '}
              <Link
                href="https://nextjs.org"
                isExternal
                textDecoration="underline"
              >
                Next.js
              </Link>
              ,{' '}
              <Link
                href="https://www.typescriptlang.org/"
                isExternal
                textDecoration="underline"
              >
                TypeScript
              </Link>{' '}
              &amp;{' '}
              <Link
                href="https://chakra-ui.com"
                isExternal
                textDecoration="underline"
              >
                Chakra UI
              </Link>{' '}
              with the dark theme as the default
            </ListItem>
          </OrderedList>
        </Container>

        <Divider />

        <Container>
            <Flex pb={2}>
              <Avatar src="https://bit.ly/sage-adebayo" />
              <Box ml="3">
                <Text fontWeight="bold">
                  Segun Adebayo
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                </Text>
                <Text fontSize="sm">UI Engineer, creator of Chakra UI</Text>
              </Box>
            </Flex>

            <Text py={2}>
              See the code for the examples above in the{' '}
              <Link
                href="https://github.com/kahlil/dark/blob/main/src/pages/index.tsx"
                isExternal
                textDecoration="underline"
              >
                source code
              </Link>
              .
            </Text>
        </Container>
      </VStack>
    </Container>

  )
}

export default Home