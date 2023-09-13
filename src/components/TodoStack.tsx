import { Todo } from "../types/todo";
import { Flex, Text, Box, HStack, Icon } from "@chakra-ui/react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaTrash,
  FaArrowDown,
} from "react-icons/fa";
import { useCallback } from "react";
import { produce } from "immer";
import { useAppDispatch } from "../app/hooks";
import { addArchive } from "../features/archiveSlice";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoStack = ({ todo, setTodos }: Props) => {
  const dispatch = useAppDispatch();

  const handleChangeStatus = useCallback(
    (moveForward: boolean, todo: Todo) => {
      setTodos(
        produce((prev) => {
          const index = prev.findIndex((t) => t.id === todo.id);
          if (moveForward) {
            prev[index].status += 1;
          } else {
            prev[index].status -= 1;
          }
        })
      );
    },
    [setTodos]
  );

  const handleArchive = useCallback(
    (todo: Todo) => {
      setTodos(
        produce((prev) => {
          return prev.filter((t) => t.id !== todo.id);
        })
      );
      dispatch(
        addArchive({
          id: todo.id,
          text: todo.text,
          createdAt: todo.createdAt,
        })
      );
    },
    [setTodos, dispatch]
  );

  return (
    <Box
      w={"90%"}
      m={2}
      borderWidth={"1px 0px 1px 0px"}
      borderColor={
        todo.status === 1
          ? "red.300"
          : todo.status === 2
          ? "yellow.300"
          : "green.300"
      }
      p={5}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box overflow={"hidden"} mr={5}>
        <Text whiteSpace={"normal"}>{todo.text}</Text>
      </Box>
      <Flex>
        <HStack spacing={5}>
          {todo.status !== 1 && (
            <Icon
              as={FaArrowLeft}
              onClick={() => handleChangeStatus(false, todo)}
              color={"yellow.500"}
              display={{ base: "none", md: "block" }}
            />
          )}
          {todo.status !== 3 && (
            <Icon
              as={FaArrowRight}
              onClick={() => handleChangeStatus(true, todo)}
              color={"green.500"}
              display={{ base: "none", md: "block" }}
            />
          )}
          {todo.status !== 1 && (
            <Icon
              as={FaArrowUp}
              onClick={() => handleChangeStatus(false, todo)}
              color={"yellow.500"}
              display={{ base: "block", md: "none" }}
            />
          )}
          {todo.status !== 3 && (
            <Icon
              as={FaArrowDown}
              onClick={() => handleChangeStatus(true, todo)}
              color={"green.500"}
              display={{ base: "block", md: "none" }}
            />
          )}
          <Icon
            as={FaTrash}
            onClick={() => handleArchive(todo)}
            color={"red.500"}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default TodoStack;
