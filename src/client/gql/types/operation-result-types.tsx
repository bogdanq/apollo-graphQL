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

export type Media = {
  __typename?: 'Media'
  id?: Maybe<Scalars['Int']>
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>
  type?: Maybe<Scalars['String']>
  format?: Maybe<Scalars['String']>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  total?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  lastPage?: Maybe<Scalars['Int']>
  hasNextPage?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type PageResponse = {
  __typename?: 'PageResponse'
  pageInfo?: Maybe<PageInfo>
  media?: Maybe<Media>
}

export type PageResponsePageInfoArgs = {
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
}

export type PageResponseMediaArgs = {
  search?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  Page?: Maybe<PageResponse>
}

export type QueryPageArgs = {
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
}

export type GetMediaListQueryVariables = {
  page?: Maybe<Scalars['Int']>
  perPage?: Maybe<Scalars['Int']>
  search?: Maybe<Scalars['String']>
}

export type GetMediaListQuery = { __typename?: 'Query' } & {
  Page: Maybe<
    { __typename?: 'PageResponse' } & {
      pageInfo: Maybe<
        { __typename?: 'PageInfo' } & Pick<
          PageInfo,
          'total' | 'currentPage' | 'lastPage' | 'hasNextPage' | 'perPage'
        >
      >
      media: Maybe<
        { __typename?: 'Media' } & Pick<
          Media,
          'id' | 'synonyms' | 'type' | 'format'
        >
      >
    }
  >
}

export const GetMediaListDocument = gql`
  query getMediaList($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(search: $search) {
        id
        synonyms
        type
        format
      }
    }
  }
`
export type GetMediaListComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetMediaListQuery,
    GetMediaListQueryVariables
  >,
  'query'
>

export const GetMediaListComponent = (props: GetMediaListComponentProps) => (
  <ApolloReactComponents.Query<GetMediaListQuery, GetMediaListQueryVariables>
    query={GetMediaListDocument}
    {...props}
  />
)

/**
 * __useGetMediaListQuery__
 *
 * To run a query within a React component, call `useGetMediaListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetMediaListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetMediaListQuery,
    GetMediaListQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetMediaListQuery,
    GetMediaListQueryVariables
  >(GetMediaListDocument, baseOptions)
}
export function useGetMediaListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetMediaListQuery,
    GetMediaListQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetMediaListQuery,
    GetMediaListQueryVariables
  >(GetMediaListDocument, baseOptions)
}
export type GetMediaListQueryHookResult = ReturnType<
  typeof useGetMediaListQuery
>
export type GetMediaListLazyQueryHookResult = ReturnType<
  typeof useGetMediaListLazyQuery
>
export type GetMediaListQueryResult = ApolloReactCommon.QueryResult<
  GetMediaListQuery,
  GetMediaListQueryVariables
>
