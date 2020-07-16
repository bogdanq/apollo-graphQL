import { createHttpLink } from 'apollo-link-http'
import { URI } from '.'

export const httpLink = () => {
  return createHttpLink({
    uri: URI,
    fetch: async (uri, options) => {
      console.log('httpLink', options)

      if (!options) {
        options = {}
      }

      options.credentials = 'same-origin'
      const { body } = options

      const preparedBody = JSON.parse(body as any)

      const isAuthorized = preparedBody.query.includes('authorized')

      if (isAuthorized) {
        /**
           * Проверить юзера в кеше и вернуть токен заголовком
           * 
              const userQueryData = await client.query<User>({
                query: GET_USER,
                fetchPolicy: "cache-only",
              });
              и если юзер есть - выставить заголовки
  
              options.headers["x-csrf-token"] = user.csrf;
           */
      }

      return fetch(uri, options)
    }
  })
}
