import { Box, HStack, SimpleGrid } from "@chakra-ui/react"
import { Archive } from "../types/archive"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { removeArchive, selectArchives } from "../features/archiveSlice"


const Archives = () => {

    const archives = useAppSelector(selectArchives)
    const dispatch = useAppDispatch()

    return (
        <>
        <SimpleGrid columns={{base : 1, md: 3}} spacing={10}>
            <Box>
                <HStack spacing={5}>
                {archives.map((archive: Archive) => (
                    <Box onClick={() => dispatch(removeArchive(archive.id))} key={archive.id}>{archive.text}</Box>
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