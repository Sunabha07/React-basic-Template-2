import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  Center,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
      zIndex={"overlay"}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <Stack alignItems={'flex-start'}>
              <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </Stack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              // bgColor={'red'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button colorScheme="purple" onClick={onClose}>
                <Link to={'/login'}>Log in</Link>
              </Button>

              <Button colorScheme="purple" variant={'outline'} onClick={onClose}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
