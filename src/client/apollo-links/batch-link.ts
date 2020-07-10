import { BatchHttpLink } from 'apollo-link-batch-http'
import { URI } from '.'

export const batchLink = () => {
  return new BatchHttpLink({
    uri: URI,
    fetch: async (url, options) => {
      console.log('BatchHttpLink', options)

      /**
         * Можно кинуть запрос на проверку юзера в кеше
            const userQueryData = await client.query<User>({
              query: GET_USER,
              fetchPolicy: "cache-only",
            });
            и если юзер есть - выставить заголовки
  
            options.headers["x-csrf-token"] = user.csrf;
         * 
         */

      if (options) {
        options.credentials = 'same-origin'
      }

      return fetch(url, options)
    }
  })
}
