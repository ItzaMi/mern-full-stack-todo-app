import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'

import {
  useAddTodoMutation,
  useAllTodosQuery,
  useMarkTodoAsCompletedMutation,
} from '../queries/autogenerate/hooks'

import Todo from '../components/Todo'

const Home: NextPage = () => {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure()
  const toast = useToast()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const { data: todosData, refetch: refetchTodosData } = useAllTodosQuery()

  const [addTodoMutation] = useAddTodoMutation({
    onCompleted: (data) => {
      toast({
        title: `Todo ${data.addTodo?.title} added`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      refetchTodosData()
    },
    onError: (error) => {
      toast({
        title: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    },
  })
  const [markTodoAsCompletedMutation, { data: markedTodoAsCompletedData }] =
    useMarkTodoAsCompletedMutation({
      onCompleted: (data) => {
        toast({
          title: `Todo ${data.markTodoAsCompleted?.title} marked as completed`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        refetchTodosData()
      },
      onError: (error) => {
        toast({
          title: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      },
    })

  const handleMarkTodoAsCompleted = (id: string) => {
    markTodoAsCompletedMutation({ variables: { id } })
  }

  const handleAddTodo = () => {
    addTodoMutation({ variables: { title, description } })
    handleCloseModal()
  }

  const handleCloseModal = () => {
    setTitle('')
    setDescription('')
    onModalClose()
  }

  return (
    <Box marginY={10} paddingX={10}>
      <Container>
        <Flex alignItems="center" marginBottom={5}>
          <Heading as="h1" fontSize="2xl">
            Full Stack ToDos App
          </Heading>
          <Spacer />
          <Button onClick={onModalOpen}>Create todo</Button>
        </Flex>

        {todosData &&
          todosData.allTodos &&
          todosData.allTodos?.length > 0 &&
          todosData.allTodos.map((todo, key) => (
            <Todo
              key={key}
              handleMarkTodoAsCompleted={handleMarkTodoAsCompleted}
              todo={todo!}
            />
          ))}
      </Container>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new todo</ModalHeader>
          <ModalBody>
            <Stack spacing={5}>
              <Box>
                <Text mb="8px">Title</Text>
                <Input
                  placeholder="A title for your todo"
                  size="md"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </Box>
              <Box>
                <Text mb="8px">Description</Text>
                <Input
                  placeholder="A description for your todo"
                  size="md"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Box>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={handleCloseModal} variant="ghost">
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleAddTodo}>
              Add todo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Home
