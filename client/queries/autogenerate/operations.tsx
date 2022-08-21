import * as Types from './schemas'

export type TodoFragment = {
  __typename?: 'Todo'
  description: string
  id: string
  isCompleted: boolean
  title: string
}

export type AllTodosQueryVariables = Types.Exact<{ [key: string]: never }>

export type AllTodosQuery = {
  __typename?: 'Query'
  allTodos: Array<{
    __typename?: 'Todo'
    description: string
    id: string
    isCompleted: boolean
    title: string
  } | null>
}

export type AddTodoMutationVariables = Types.Exact<{
  title: Types.Scalars['String']
  description: Types.Scalars['String']
}>

export type AddTodoMutation = {
  __typename?: 'Mutation'
  addTodo?: {
    __typename?: 'Todo'
    description: string
    id: string
    isCompleted: boolean
    title: string
  } | null
}

export type MarkTodoAsCompletedMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type MarkTodoAsCompletedMutation = {
  __typename?: 'Mutation'
  markTodoAsCompleted?: {
    __typename?: 'Todo'
    description: string
    id: string
    isCompleted: boolean
    title: string
  } | null
}

export const namedOperations = {
  Query: {
    AllTodos: 'AllTodos',
  },
  Mutation: {
    AddTodo: 'AddTodo',
    MarkTodoAsCompleted: 'MarkTodoAsCompleted',
  },
  Fragment: {
    Todo: 'Todo',
  },
}
