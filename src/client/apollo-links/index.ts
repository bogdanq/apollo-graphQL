export * from './batch-link'
export * from './callback-link'
export * from './error-link'
export * from './http-link'
export * from './my-link-example'

// const uri = 'https://graphql.anilist.co/graphql'
export const URI = 'http://localhost:8090/graphql'

// const authLink = new ApolloLink((operation, forward) => {
//   // const token = false
//   // operation.setContext(({ headers }: any) => {
//   //   console.log('headers', headers)
//   //   return {
//   //     headers: {
//   //       authorization: token ? `Bearer ${token}` : '',
//   //       ...headers
//   //     }
//   //   }
//   // })
//   console.log('onError')
//   return forward(operation)
// })
