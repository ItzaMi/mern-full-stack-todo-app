import { FC } from 'react'
import { Badge, Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'

import { TodoFragment } from '../../queries/autogenerate/operations'

interface Props {
  handleMarkTodoAsCompleted: (id: string) => void
  todo: TodoFragment
}

const Todo: FC<Props> = ({ handleMarkTodoAsCompleted, todo }) => {
  return (
    <Box p={4} borderBottom="1px" borderColor="gray.200">
      <Flex alignItems="center">
        <Box>
          <Text fontSize="xl" fontWeight={600}>
            {todo.title}
            {todo.isCompleted && (
              <Badge colorScheme="green" ml={2}>
                Completed
              </Badge>
            )}
          </Text>
          <Text fontSize="md">{todo.description}</Text>
        </Box>
        <Spacer />
        {!todo.isCompleted && (
          <Button
            colorScheme="teal"
            onClick={() => handleMarkTodoAsCompleted(todo.id)}
            size="xs"
          >
            Mark as completed
          </Button>
        )}
      </Flex>
    </Box>
  )
}

export default Todo
