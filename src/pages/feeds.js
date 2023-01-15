import { FEED } from 'src/lib/rss'
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
import { Icon } from '@chakra-ui/icons'
import { SiGithub, SiSafari } from 'react-icons/si'

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
          
        <Card maxW="xl" boxShadow="xl">
          {FEED.map((feed) => (
            <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
              <a className="p-4 border border-gray-200 hover:border-gray-500 rounded-lg">
                {feed.title}
              </a>
            </Link>
          ))}
          {FEED.map((feed, i) => (
            <CardBody key={i}>{feed.description}</CardBody>
          ))}
        </Card>
      </SimpleGrid>
    </Container>
  )
}