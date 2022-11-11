# apollo-bolerplate

[Документация](https://www.apollographql.com/)

## Добавление поддержки gql в cra

`yarn run eject`

Добавить расширения в `moduleFileExtensions` ( "gql", "graphql")
В `webpackDevServer.config.js` добавить обьект в `proxy`, где `target` - ссылка на GraphQl API

```javascript
proxy: {
  ...proxy,
  '/graphql': {
    target: `https://anilist.co/graphiql`
  },
  '/graphiql': {
    target: `https://anilist.co/graphiql`
  },
}
```

В `webpack.config.js` - добавить обработку gql в лоадеры
Установить `graphql-tag/loader` и добавить в плагины

```javascript
const plugins = [
  new HappyPack({
    id: 'gql',
    threadPool: happyThreadPool,
    loaders: ['graphql-tag/loader']
  })
]
```

В `rules` добавить обработку `gql` и `graphql`

```js
const rules = [
  {
    test: /\.(gql)$/,
    loader: 'happypack/loader?id=gql',
    exclude: /node_modules/
  },
  {
    test: /\.(graphql)$/,
    loader: 'happypack/loader?id=raw',
    exclude: /node_modules/
  }
]
```

В `file-loade` указать исключение зависимостей

```js
const exclude = [/\.(js|mjs|jsx|ts|tsx|gql|graphql)$/, /\.html$/, /\.json$/]
```

## GraphQl Schema

Это описание типов данных на сервере, связи между ними и логика получения данных

- Данные на сервере
- Методы получения данных (resolve)
- Типы данных для методов
- Все соединить и будет `Graphql Schema`

Схему можно написать как на поддерживаемом языке (`code-first`) или на не зависимом языке (`schema definition language SDL`). Операции `query` выполняются паралельно, а `mutation` бюудут выполняться по очереди.

### Описание схема на сервере (build)

```js
import { GraphQLSchema, GraphQLObjectType, graphql } from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({ name: 'Query', fields: { getUserById, findManyUsers } }),
  mutation: new GraphQLObjectType({ name: 'Mutation', fields: { createUser, removeLastUser } }),
  subscriptions: new GraphQLObjectType({ name: 'Subscription', fields: ... }),
  //....
});

/**
  GraphQLSchema - создает схему
  GraphQLObjectType - один из типов
  fields - набор вложенных ендпоинтов
**/
```

SDL имеет и другие типы

- Enum
- Interface
- Unions
- Custom scalars

```js
enum Errors {
  UNEXPECTED_ERROR,
  INVALID_PARAMS,
  USER_DOES_NOT_EXISTS,
  INTERMIDIATE_2FA_DOES_NOT_EXISTS,
  INVALID_CAPTCHA,
}
```

```ts
interface firstName {
  firstName: String
}

interface lastName {
  lastName: String
}

type User implements firstName & lastName {
  firstName: String
  lastName: String
  age: Int
}
```

```ts
type firstName = {
  firstName: String
}

type lastName = {
  lastName: String
}

type UserResult = firstName | lastName

type FetchUser {
  result: UserResult
}
```

```js
const { gql } = require('apollo-server-express')

gql`
  # Description
  schema {
    query: Query
    mutation: Mutation
    subscriptions: Subscriptions
  }

  # Description
  type Query {
    hello: String!
    someFoo(payload: Payload!): String!
  }

  # Description
  input Payload {
    id: String!
  }
`
```

- query - для операций получения данных
- mutation - для операций изменения данных
- subscription - для подписки на события

В `GrqphQL` есть два вида операций:

- statless - это `query` и `mutation`, они не хранят информацию о запросе
- statefull - `subscription`, хранят информацию о соединении, методы восстановления связи, получения данных

### Выполнение запроса (runtime)

```js
import { graphql } from 'graphql'
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      hello: {
        type: GraphQLString,
        resolve: function() {
          return 'Hello World'
        }
      }
    })
  })
})

// Как только схема инициализируется, можно выполнять запросы
const result = await graphql(
  schema,
  `
    {
      hello
    }
  `
) // => Hello World
```

`graphql` выполняет задачи

- Парсинг GraphQL запросов
- Валидация полей на соответствие схеме
- Выполняет запрос, вызывая `resolve-методы` из запрошенных запросов (GraphQLObjectType)
- Валидирует ответ
