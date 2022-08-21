export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  addTodo?: Maybe<Todo>
  markTodoAsCompleted?: Maybe<Todo>
}

export type MutationAddTodoArgs = {
  description: Scalars['String']
  title: Scalars['String']
}

export type MutationMarkTodoAsCompletedArgs = {
  id: Scalars['ID']
}

export type Query = {
  __typename?: 'Query'
  allTodos: Array<Maybe<Todo>>
}

export type Todo = {
  __typename?: 'Todo'
  description: Scalars['String']
  id: Scalars['ID']
  isCompleted: Scalars['Boolean']
  title: Scalars['String']
}
