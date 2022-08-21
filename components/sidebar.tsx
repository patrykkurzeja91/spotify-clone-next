import NextImage from "next/image"
import NextLink from "next/link"

import {
  Box,
  Divider,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout"
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdFavorite,
  MdPlaylistAdd,
} from "react-icons/md"

import { usePlaylist } from "@/lib/hooks"

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
]

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favourites",
  },
]
// const playlists = new Array(50).fill(0).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {
  const { playlists } = usePlaylist()
  return (
    <Box w="100%" p="1rem" height="calc(100vh - 100px)" bg="black">
      <Box py="20px" h="100%">
        <Box width="120px" marginBottom="20px" px="20px">
          <NextImage src="/logo-spotify-clone.svg" height={60} width={120} />
        </Box>
        {/* MENU */}
        <Box marginBottom="20px">
          <List spacing={4}>
            {navMenu.map((item) => (
              <ListItem px="20px" key={item.name}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Music Menu */}
        <Box marginBottom="20px" marginTop="30px">
          <List spacing={4}>
            {musicMenu.map((item) => (
              <ListItem px="20px" key={item.name}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider marginY="30px" />
        <Box height="48vh" overflowY="auto" paddingY="20px">
          <List spacing={4}>
            {playlists.map((playlist) => (
              <ListItem px="20px" key={playlist.id}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{playlist.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
