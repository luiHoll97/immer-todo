import { Box, Center, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { Archive } from "../types/archive";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeArchive, selectArchives } from "../features/archiveSlice";
import { FaTrash } from "react-icons/fa";

const Archives = () => {
  const archives = useAppSelector(selectArchives);
  const dispatch = useAppDispatch();

  return (
    <>
      <Center>
        <SimpleGrid
          m={5}
          columns={{ base: 1, md: 3 }}
          row={{ base: 10, md: 3 }}
          spacing={10}
        >
          {archives.map((archive: Archive) => (
            <Box
              p={5}
              m={3}
              borderBottomRadius={"md"}
              h={"100%"}
              bg={"gray.100"}
              justifyContent={"space-between"}
              overflow={"hidden"}
            >
              <Text whiteSpace={"normal"}>{archive.text}</Text>
              <HStack mt={3}>
                <Text>
                  <code>{archive.createdAt}</code>
                </Text>
                <Icon
                  m={3}
                  as={FaTrash}
                  color={"red.500"}
                  onClick={() => dispatch(removeArchive(archive.id))}
                />
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Archives;
