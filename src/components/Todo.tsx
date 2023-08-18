import { Box, Button, HStack, Input, SimpleGrid } from "@chakra-ui/react"
import { Todo } from "../types/todo"
import { useCallback, useState } from "react"
import  { v4 as uuidv4 } from 'uuid'
import { produce } from "immer"


const TodoList = () => {

    const [todos, setTodos] = useState<Todo[]>([])
    const [text, setText] = useState<string>('')

    const handleAdd = useCallback((input: string) => {
        setTodos(
            produce((prev) => {
                prev.push({
                    id: uuidv4(),
                    text: input,
                    status: 1,
                    createdAt: (new Date()).toDateString()
                })
            })
        )
        setText('')
    }, [])

    return (
        <>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={() => handleAdd(text)}>Add</Button>
        <SimpleGrid columns={{base : 1, md: 3}} spacing={10}>
            <Box>
                <HStack spacing={5}>
                {todos.map((todo: Todo) => (
                    <Box onClick={() => console.log(todo)} key={todo.id}>{todo.text}</Box>
                ))
                }
                </HStack>
            </Box>
            <p>two!</p>
            <p>three!</p>
        </SimpleGrid>
        <h1>Todo</h1>
        </>
    )
}

export default TodoList