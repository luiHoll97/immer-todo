import {
  Box,
  Button,
  VStack,
  Input,
  SimpleGrid,
  Heading,
  Flex,
  Center,
  Alert,
  AlertIcon,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { Todo } from "../types/todo";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";
import TodoStack from "./TodoStack";
import { FaClipboard } from "react-icons/fa";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const handleAdd = useCallback(
    (input: string) => {
      setTodos(
        produce((prev) => {
          prev.push({
            id: uuidv4(),
            text: input,
            status: 1,
            createdAt: new Date().toDateString(),
          });
        })
      );
      setText("");
    },
    [setTodos]
  );

  const handleWarning = () => {
    return (
      <Alert status="warning">
        <AlertIcon />
        Please keep your todos under 80 characters.
      </Alert>
    );
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} h={"60%"}>
        <Box borderBottomRadius={"md"} h={"100%"}>
          <Center>
            <Heading size={"sm"} fontFamily={"mono"}>
              todo
            </Heading>
          </Center>
          <VStack spacing={1}>
            {todos
              .filter((todo: Todo) => todo.status === 1)
              .map((todo: Todo) => (
                <TodoStack todo={todo} setTodos={setTodos} />
              ))}
          </VStack>
          <Flex
            justifyContent={"space-between"}
            w={"90%"}
            m={3}
            borderWidth={"0px 1px 1px 0px"}
            borderColor={"blue.200"}
            p={5}
            opacity={0.5}
          >
            <Box overflow={"wrap"}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaClipboard} color="gray.300" />
                </InputLeftElement>
                <Input
                  variant={"flushed"}
                  placeholder="enter a todo"
                  fontFamily={"mono"}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  borderBottom={0}
                />
              </InputGroup>
            </Box>
            <Button onClick={() => handleAdd(text)} variant={"outline"}>
              Add
            </Button>
          </Flex>
        </Box>
        <Box>
          <Center>
            <Heading size={"sm"} fontFamily={"mono"}>
              in Progress
            </Heading>
          </Center>
          <VStack spacing={1}>
            {todos
              .filter((todo: Todo) => todo.status === 2)
              .map((todo: Todo) => (
                <TodoStack todo={todo} setTodos={setTodos} />
              ))}
          </VStack>
        </Box>
        <Box>
          <Center>
            <Heading size={"sm"} fontFamily={"mono"}>
              complete
            </Heading>
          </Center>
          <VStack spacing={1}>
            {todos
              .filter((todo: Todo) => todo.status === 3)
              .map((todo: Todo) => (
                <TodoStack todo={todo} setTodos={setTodos} />
              ))}
          </VStack>
        </Box>
      </SimpleGrid>
      {text.length > 80 && handleWarning()}
    </>
  );
};

export default TodoList;
