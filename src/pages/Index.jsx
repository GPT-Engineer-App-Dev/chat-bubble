import { Box, Button, ChakraProvider, Container, Flex, Input, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaLock, FaPaperPlane, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <Flex height="100vh" alignItems="stretch">
          {/* Authentication Section */}
          <VStack width="full" maxW="sm" p={5} borderRight="1px" borderColor="gray.200">
            <Box textAlign="center" py={5}>
              <FaUser size="3em" />
              <Text fontSize="xl" fontWeight="bold">
                Secure Login
              </Text>
            </Box>
            <Input placeholder="Username" mb={3} />
            <Input placeholder="Password" type="password" mb={3} />
            <Button leftIcon={<FaLock />} colorScheme="green" width="full" onClick={() => alert("Logging in...")}>
              Logging in...
            </Button>
          </VStack>

          {/* Contacts List */}
          <VStack width="full" maxW="sm" p={5} borderRight="1px" borderColor="gray.200">
            <Text fontSize="xl" fontWeight="bold" mb={3}>
              Contacts
            </Text>
            <List width="full" overflowY="auto">
              <ListItem p={2} _hover={{ bg: "gray.100" }}>
                Alice
              </ListItem>
              <ListItem p={2} _hover={{ bg: "gray.100" }}>
                Bob
              </ListItem>
              <ListItem p={2} _hover={{ bg: "gray.100" }}>
                Charlie
              </ListItem>
              {/* More contacts */}
            </List>
          </VStack>

          {/* Chat Window */}
          <VStack flex="1" p={5}>
            <Box width="full" bg="gray.50" p={3} borderRadius="md">
              <Text fontSize="lg" fontWeight="bold">
                Chat with Alice
              </Text>
            </Box>
            <Flex direction="column" width="full" flex="1" bg="white" p={3} borderRadius="md" overflowY="auto">
              <Box alignSelf="flex-start" bg="blue.100" p={2} borderRadius="md" mb={2}>
                <Text>Hello!</Text>
              </Box>
              <Box alignSelf="flex-end" bg="green.100" p={2} borderRadius="md" mb={2}>
                <Text>Hi there!</Text>
              </Box>
              {/* More messages */}
            </Flex>
            <Flex width="full">
              <Input
                placeholder="Type a message..."
                mr={2}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    alert("Sending message...");
                  }
                }}
              />
              <Button colorScheme="blue" px={5}>
                <FaPaperPlane />
              </Button>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
