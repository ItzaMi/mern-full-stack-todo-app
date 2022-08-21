import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export const TodoFragmentDoc = gql`
  fragment Todo on Todo {
    description
    id
    isCompleted
    title
  }
`
export const AllTodosDocument = gql`
  query AllTodos {
    allTodos {
      ...Todo
    }
  }
  ${TodoFragmentDoc}
`

/**
 * __useAllTodosQuery__
 *
 * To run a query within a React component, call `useAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.AllTodosQuery,
    Types.AllTodosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Types.AllTodosQuery, Types.AllTodosQueryVariables>(
    AllTodosDocument,
    options
  )
}
export function useAllTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.AllTodosQuery,
    Types.AllTodosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Types.AllTodosQuery, Types.AllTodosQueryVariables>(
    AllTodosDocument,
    options
  )
}
export type AllTodosQueryHookResult = ReturnType<typeof useAllTodosQuery>
export type AllTodosLazyQueryHookResult = ReturnType<
  typeof useAllTodosLazyQuery
>
export type AllTodosQueryResult = Apollo.QueryResult<
  Types.AllTodosQuery,
  Types.AllTodosQueryVariables
>
export const AddTodoDocument = gql`
  mutation AddTodo($title: String!, $description: String!) {
    addTodo(title: $title, description: $description) {
      ...Todo
    }
  }
  ${TodoFragmentDoc}
`
export type AddTodoMutationFn = Apollo.MutationFunction<
  Types.AddTodoMutation,
  Types.AddTodoMutationVariables
>

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddTodoMutation,
    Types.AddTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.AddTodoMutation,
    Types.AddTodoMutationVariables
  >(AddTodoDocument, options)
}
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>
export type AddTodoMutationResult = Apollo.MutationResult<Types.AddTodoMutation>
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<
  Types.AddTodoMutation,
  Types.AddTodoMutationVariables
>
export const MarkTodoAsCompletedDocument = gql`
  mutation MarkTodoAsCompleted($id: ID!) {
    markTodoAsCompleted(id: $id) {
      ...Todo
    }
  }
  ${TodoFragmentDoc}
`
export type MarkTodoAsCompletedMutationFn = Apollo.MutationFunction<
  Types.MarkTodoAsCompletedMutation,
  Types.MarkTodoAsCompletedMutationVariables
>

/**
 * __useMarkTodoAsCompletedMutation__
 *
 * To run a mutation, you first call `useMarkTodoAsCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkTodoAsCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markTodoAsCompletedMutation, { data, loading, error }] = useMarkTodoAsCompletedMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMarkTodoAsCompletedMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.MarkTodoAsCompletedMutation,
    Types.MarkTodoAsCompletedMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    Types.MarkTodoAsCompletedMutation,
    Types.MarkTodoAsCompletedMutationVariables
  >(MarkTodoAsCompletedDocument, options)
}
export type MarkTodoAsCompletedMutationHookResult = ReturnType<
  typeof useMarkTodoAsCompletedMutation
>
export type MarkTodoAsCompletedMutationResult =
  Apollo.MutationResult<Types.MarkTodoAsCompletedMutation>
export type MarkTodoAsCompletedMutationOptions = Apollo.BaseMutationOptions<
  Types.MarkTodoAsCompletedMutation,
  Types.MarkTodoAsCompletedMutationVariables
>
