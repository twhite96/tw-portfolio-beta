import { FEED } from 'src/lib/rss'
import Link from 'next/link'
// import {
//   Container,
//   Heading,
//   VStack,
//   Stack,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Text,
//   OrderedList,
//   ListItem,
//   Link,
//   Flex,
//   Badge,
//   Box,
//   Divider,
//   Button
// } from '@chakra-ui/react'

// Use Chakra UI Container, Header, Text, and Card components for this feed component.
// I also need to create custom feed properties for grabbing the featured image from each
// post
export default function Feed() {
  return (
    <div className="px-6 py-12 max-w-xl mx-auto">
      <h1 className="font-bold text-5xl mb-12">Interesting RSS Feeds</h1>
      <div className="grid grid-cols-2 gap-4">
        {FEED.map((feed) => (
          <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
            <a className="p-4 border border-gray-200 hover:border-gray-500 rounded-lg">
              {feed.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}