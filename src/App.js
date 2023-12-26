import React from 'react';
import {AiFillGithub, AiFillYoutube} from 'react-icons/ai';
import 'remixicon/fonts/remixicon.css'
import { RiDiscordFill, RiTwitterLine } from "react-icons/ri";
import { motion } from 'framer-motion'; 
import { 
  ChakraProvider, 
  Box, 
  Text, 
  VStack, 
  Grid, 
  List,
  Image, 
  HStack,
  theme 
} from '@chakra-ui/react';


function App() {
  const links = [
    {url: 'https://github.com/drewdii', 
    icon: AiFillGithub, 
    text: 'github', 
    iconColor: "purple.400", },

    {url: 'https://discord.gg/Hab79B98nV', 
    icon: RiDiscordFill, 
    text: 'discord', 
    iconColor: 'purple.200',},

    {url: 'https://www.youtube.com/@drewdii', 
    icon: AiFillYoutube, 
    text: 'youtube', 
    iconColor: "red.200", },

    {url: "https://x.com/@drewdii", 
    icon: RiTwitterLine, 
    text: 'twitter', 
    iconColor: "blue.200", },
  ];

  const parentContainer = {
    hidden: {opacity: 0}, 
    show: {opacity: 1, transition: {staggerChildren: 0.15}},
  }

  const childElement = {
    hidden: {opacity: 0, x: "-50px"},
    show: {opacity: 1, x: "0px"}
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid  minH="100vh" p={3} bgImage="url('./public/mac-wallpaper.jpeg.png')" bgGradient='linear(to-b, #775c8a, gray.900)'>
          <VStack marginTop="3em">
            <Image 
              w="8em" 
              src="./invaded-id-pfp.jpeg" 
              borderRadius="50%"
              boxShadow="0px 0px 20px rgb(0,0,0,0.5)"
              p="1em"
              as={motion.img}
              initial={{scale: 0, opacity: 1}}
              animate={{scale: 1, opacity: 1}}
              transition="linear 0.1s"
            />
            <Text
              fontSize={30} 
              fontWeight='extrabold'
              bgGradient='linear(to-b, gray.200, purple.200)'
              bgClip='text'
              as={motion.h1}
              initial={{x: "-50px", opacity: 1}}
              animate={{x: "0", opacity: 1}}
            >
              drewdii
            </Text>
            <List as={motion.ul} variants={parentContainer} intial="hidden" animate="show">
              {links.map(link => (
                <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.text}>
                  <HStack
                    w="15em"
                    h="3em"
                    borderRadius="lg"
                    bgColor='linear(to-b, gray.200, purple.200)'
                    border='1px'
                    borderColor='gray.200'
                    p='6'
                    rounded='md'
                    marginY="1em"
                    as={motion.div}
                    variants={childElement}
                    whileHover={{scale: 1.1}}
                    whileHTap={{scale: 0.9}}
                  >
                    <Text
                      fontSize={20}
                      fontWeight="bold"
                      marginRight="auto"
                      bgGradient='linear(to-b, gray.200, purple.200)'
                      bgClip='text'
                    >
                      {link.text}
                    </Text>
                    <Text 
                      as={link.icon} 
                      color={link.iconColor} 
                      fontSize={20}
                    />
                  </HStack>
                </a>
              ))}
            </List>
          </VStack>
        </Grid>
      </Box>    
    </ChakraProvider>
  );
}

export default App;
