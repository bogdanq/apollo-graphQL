import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as React from 'react'
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
  removeMovie: RemovedMovieResponse
}

export type AuthorizedMutationNopeArgs = {
  nope: Scalars['Int']
}

export type AuthorizedMutationToggleLikeArgs = {
  id: Scalars['String']
}

export type AuthorizedMutationRemoveMovieArgs = {
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
  directorId: Scalars['String']
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

export type RemovedMovieResponse = {
  __typename?: 'RemovedMovieResponse'
  id: Scalars['String']
  directorId: Scalars['String']
}

export type Subscription = {
  __typename?: 'Subscription'
  LikeToggled: Like
  removedMovie: RemovedMovieResponse
}

export type RemoveMovieMutationVariables = {
  id: Scalars['String']
}

export type RemoveMovieMutation = { __typename?: 'Mutation' } & {
  authorized: Maybe<
    { __typename?: 'AuthorizedMutation' } & {
      removeMovie: { __typename?: 'RemovedMovieResponse' } & Pick<
        RemovedMovieResponse,
        'id' | 'directorId'
      >
    }
  >
}

export type ToggleLikeMutationVariables = {
  id: Scalars['String']
}

export type ToggleLikeMutation = { __typename?: 'Mutation' } & {
  authorized: Maybe<
    { __typename?: 'AuthorizedMutation' } & {
      toggleLike: { __typename?: 'Like' } & Pick<Like, 'id' | 'likes'>
    }
  >
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
              'id' | 'title' | 'description' | 'year' | 'directorId' | 'likes'
            >
          >
        }
    }
  >
}

export type LikeSubscriptionVariables = {}

export type LikeSubscription = { __typename?: 'Subscription' } & {
  LikeToggled: { __typename?: 'Like' } & Pick<
    Like,
    'id' | 'likes' | 'directorId'
  >
}

export type RemovedMovieSubscriptionVariables = {}

export type RemovedMovieSubscription = { __typename?: 'Subscription' } & {
  removedMovie: { __typename?: 'RemovedMovieResponse' } & Pick<
    RemovedMovieResponse,
    'id' | 'directorId'
  >
}

export const RemoveMovieDocument = gql`
  mutation RemoveMovie($id: String!) {
    authorized {
      removeMovie(id: $id) {
        id
        directorId
      }
    }
  }
`
export type RemoveMovieMutationFn = ApolloReactCommon.MutationFunction<
  RemoveMovieMutation,
  RemoveMovieMutationVariables
>
export type RemoveMovieComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    RemoveMovieMutation,
    RemoveMovieMutationVariables
  >,
  'mutation'
>

export const RemoveMovieComponent = (props: RemoveMovieComponentProps) => (
  <ApolloReactComponents.Mutation<
    RemoveMovieMutation,
    RemoveMovieMutationVariables
  >
    mutation={RemoveMovieDocument}
    {...props}
  />
)

/**
 * __useRemoveMovieMutation__
 *
 * To run a mutation, you first call `useRemoveMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMovieMutation, { data, loading, error }] = useRemoveMovieMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveMovieMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveMovieMutation,
    RemoveMovieMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    RemoveMovieMutation,
    RemoveMovieMutationVariables
  >(RemoveMovieDocument, baseOptions)
}
export type RemoveMovieMutationHookResult = ReturnType<
  typeof useRemoveMovieMutation
>
export type RemoveMovieMutationResult = ApolloReactCommon.MutationResult<
  RemoveMovieMutation
>
export type RemoveMovieMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveMovieMutation,
  RemoveMovieMutationVariables
>
export const ToggleLikeDocument = gql`
  mutation ToggleLike($id: String!) {
    authorized {
      toggleLike(id: $id) {
        id
        likes
      }
    }
  }
`
export type ToggleLikeMutationFn = ApolloReactCommon.MutationFunction<
  ToggleLikeMutation,
  ToggleLikeMutationVariables
>
export type ToggleLikeComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ToggleLikeMutation,
    ToggleLikeMutationVariables
  >,
  'mutation'
>

export const ToggleLikeComponent = (props: ToggleLikeComponentProps) => (
  <ApolloReactComponents.Mutation<
    ToggleLikeMutation,
    ToggleLikeMutationVariables
  >
    mutation={ToggleLikeDocument}
    {...props}
  />
)

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleLikeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ToggleLikeMutation,
    ToggleLikeMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    ToggleLikeMutation,
    ToggleLikeMutationVariables
  >(ToggleLikeDocument, baseOptions)
}
export type ToggleLikeMutationHookResult = ReturnType<
  typeof useToggleLikeMutation
>
export type ToggleLikeMutationResult = ApolloReactCommon.MutationResult<
  ToggleLikeMutation
>
export type ToggleLikeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ToggleLikeMutation,
  ToggleLikeMutationVariables
>
export const FetchDirectorWithIdDocument = gql`
  query fetchDirectorWithID($id: Int!) {
    authorized {
      director(id: $id) {
        directorId
        name
        age
        movies {
          id
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
export const LikeDocument = gql`
  subscription Like {
    LikeToggled {
      id
      likes
      directorId
    }
  }
`
export type LikeComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<
    LikeSubscription,
    LikeSubscriptionVariables
  >,
  'subscription'
>

export const LikeComponent = (props: LikeComponentProps) => (
  <ApolloReactComponents.Subscription<
    LikeSubscription,
    LikeSubscriptionVariables
  >
    subscription={LikeDocument}
    {...props}
  />
)

/**
 * __useLikeSubscription__
 *
 * To run a query within a React component, call `useLikeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLikeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLikeSubscription({
 *   variables: {
 *   },
 * });
 */
export function useLikeSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    LikeSubscription,
    LikeSubscriptionVariables
  >
) {
  return ApolloReactHooks.useSubscription<
    LikeSubscription,
    LikeSubscriptionVariables
  >(LikeDocument, baseOptions)
}
export type LikeSubscriptionHookResult = ReturnType<typeof useLikeSubscription>
export type LikeSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  LikeSubscription
>
export const RemovedMovieDocument = gql`
  subscription RemovedMovie {
    removedMovie {
      id
      directorId
    }
  }
`
export type RemovedMovieComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<
    RemovedMovieSubscription,
    RemovedMovieSubscriptionVariables
  >,
  'subscription'
>

export const RemovedMovieComponent = (props: RemovedMovieComponentProps) => (
  <ApolloReactComponents.Subscription<
    RemovedMovieSubscription,
    RemovedMovieSubscriptionVariables
  >
    subscription={RemovedMovieDocument}
    {...props}
  />
)

/**
 * __useRemovedMovieSubscription__
 *
 * To run a query within a React component, call `useRemovedMovieSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRemovedMovieSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRemovedMovieSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRemovedMovieSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    RemovedMovieSubscription,
    RemovedMovieSubscriptionVariables
  >
) {
  return ApolloReactHooks.useSubscription<
    RemovedMovieSubscription,
    RemovedMovieSubscriptionVariables
  >(RemovedMovieDocument, baseOptions)
}
export type RemovedMovieSubscriptionHookResult = ReturnType<
  typeof useRemovedMovieSubscription
>
export type RemovedMovieSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  RemovedMovieSubscription
>
