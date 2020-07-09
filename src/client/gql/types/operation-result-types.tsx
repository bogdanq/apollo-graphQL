import gql from 'graphql-tag'
import * as React from 'react'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactComponents from '@apollo/react-components'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type AdministratorQuery = {
  __typename?: 'AdministratorQuery'
  nope?: Maybe<Scalars['Int']>
  getUserInfoWithID: Scalars['String']
}

export type AdministratorQueryNopeArgs = {
  nope: Scalars['Int']
}

export type AuthorizedMutation = {
  __typename?: 'AuthorizedMutation'
  nope?: Maybe<Scalars['Int']>
  toggleLike: Like
}

export type AuthorizedMutationNopeArgs = {
  nope: Scalars['Int']
}

export type AuthorizedMutationToggleLikeArgs = {
  id: Scalars['String']
}

export type AuthorizedQuery = {
  __typename?: 'AuthorizedQuery'
  nope?: Maybe<Scalars['Int']>
  director: Director
  directors: Array<Director>
}

export type AuthorizedQueryNopeArgs = {
  nope: Scalars['Int']
}

export type AuthorizedQueryDirectorArgs = {
  id: Scalars['Int']
}

export type Director = {
  __typename?: 'Director'
  directorId: Scalars['ID']
  name: Scalars['String']
  age: Scalars['Int']
  movies: Array<Movie>
  getInformation: Scalars['String']
}

export type GuestQuery = {
  __typename?: 'GuestQuery'
  nope?: Maybe<Scalars['Int']>
  hello: Scalars['String']
  movie: Movie
  movies: Array<Movie>
  getInformation: Scalars['String']
}

export type GuestQueryNopeArgs = {
  nope: Scalars['Int']
}

export type GuestQueryMovieArgs = {
  id: Scalars['String']
}

export type Like = {
  __typename?: 'Like'
  id: Scalars['String']
  likes: Scalars['Int']
}

export type Movie = {
  __typename?: 'Movie'
  id: Scalars['ID']
  title: Scalars['String']
  description: Scalars['String']
  year: Scalars['Int']
  directorId: Scalars['Int']
  likes: Scalars['Int']
}

export type Mutation = {
  __typename?: 'Mutation'
  authorized?: Maybe<AuthorizedMutation>
}

export type Query = {
  __typename?: 'Query'
  authorized?: Maybe<AuthorizedQuery>
  guest?: Maybe<GuestQuery>
  administrator?: Maybe<AdministratorQuery>
}

export type Subscription = {
  __typename?: 'Subscription'
  LikeToggled?: Maybe<Like>
}

export type FetchDirectorWithIdQueryVariables = {
  id: Scalars['Int']
}

export type FetchDirectorWithIdQuery = { __typename?: 'Query' } & {
  authorized: Maybe<
    { __typename?: 'AuthorizedQuery' } & {
      director: { __typename?: 'Director' } & Pick<
        Director,
        'directorId' | 'name' | 'age'
      > & {
          movies: Array<
            { __typename?: 'Movie' } & Pick<
              Movie,
              'title' | 'description' | 'year' | 'directorId' | 'likes'
            >
          >
        }
    }
  >
}

export const FetchDirectorWithIdDocument = gql`
  query fetchDirectorWithID($id: Int!) {
    authorized {
      director(id: $id) {
        directorId
        name
        age
        movies {
          title
          description
          year
          directorId
          likes
        }
      }
    }
  }
`
export type FetchDirectorWithIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FetchDirectorWithIdQuery,
    FetchDirectorWithIdQueryVariables
  >,
  'query'
> &
  (
    | { variables: FetchDirectorWithIdQueryVariables; skip?: boolean }
    | { skip: boolean }
  )

export const FetchDirectorWithIdComponent = (
  props: FetchDirectorWithIdComponentProps
) => (
  <ApolloReactComponents.Query<
    FetchDirectorWithIdQuery,
    FetchDirectorWithIdQueryVariables
  >
    query={FetchDirectorWithIdDocument}
    {...props}
  />
)

/**
 * __useFetchDirectorWithIdQuery__
 *
 * To run a query within a React component, call `useFetchDirectorWithIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchDirectorWithIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchDirectorWithIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchDirectorWithIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FetchDirectorWithIdQuery,
    FetchDirectorWithIdQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    FetchDirectorWithIdQuery,
    FetchDirectorWithIdQueryVariables
  >(FetchDirectorWithIdDocument, baseOptions)
}
export function useFetchDirectorWithIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FetchDirectorWithIdQuery,
    FetchDirectorWithIdQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    FetchDirectorWithIdQuery,
    FetchDirectorWithIdQueryVariables
  >(FetchDirectorWithIdDocument, baseOptions)
}
export type FetchDirectorWithIdQueryHookResult = ReturnType<
  typeof useFetchDirectorWithIdQuery
>
export type FetchDirectorWithIdLazyQueryHookResult = ReturnType<
  typeof useFetchDirectorWithIdLazyQuery
>
export type FetchDirectorWithIdQueryResult = ApolloReactCommon.QueryResult<
  FetchDirectorWithIdQuery,
  FetchDirectorWithIdQueryVariables
>
