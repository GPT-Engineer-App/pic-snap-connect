import { Box, Container, Flex, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";

const photos = [
  { id: 1, src: "/images/photo1.jpg", alt: "Photo 1" },
  { id: 2, src: "/images/photo2.jpg", alt: "Photo 2" },
  { id: 3, src: "/images/photo3.jpg", alt: "Photo 3" },
];

const Index = () => {
  return (
    <Container maxW="container.lg" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <IconButton aria-label="Home" icon={<FaHome />} />
        <IconButton aria-label="Profile" icon={<FaUser />} />
        <IconButton aria-label="Upload" icon={<FaUpload />} />
      </Flex>
      <VStack spacing={4} mt={4}>
        {photos.map(photo => (
          <Box key={photo.id} boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src={photo.src} alt={photo.alt} />
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;