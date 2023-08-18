import { Box, HStack, SimpleGrid } from "@chakra-ui/react"
import { Archive } from "../types/archive"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { removeArchive, selectArchives } from "../features/archiveSlice"


const Archives = () => {

    const archives = useAppSelector(selectArchives)

    return (
        <>
        <SimpleGrid columns={{base : 1, md: 3}} spacing={10}>
            <Box>
                <HStack spacing={5}>
                {archives.map((todo: Archive) => (
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

export default Archives