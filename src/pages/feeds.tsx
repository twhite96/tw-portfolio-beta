import { FEED } from '../lib/rss'
import Link from 'next/link'
import {
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Button,
} from '@chakra-ui/react'
// import { Icon } from '@chakra-ui/icons'
// import { SiGithub, SiSafari } from 'react-icons/si'

// Use Chakra UI Container, Header, Text, and Card components for this feed component.
// I also need to create custom feed properties for grabbing the featured image from each
// post
export default function Feeds() {
  return (
    <Container>
      <Heading>Latest Posts</Heading>
      <SimpleGrid
        spacing="9px"
        templateColumns="repeat(auto-fill, minmax(300px, 3fr))"
      >
        {/* Need to move the feed iteration above the Card component */}
        {FEED.map((feed, i) => (
          <Card maxW="xl" boxShadow="xl">
            <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
              {feed.title}
            </Link>
            <CardBody key={i}>{feed.description}</CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}