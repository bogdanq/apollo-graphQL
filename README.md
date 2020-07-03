# apollo-bolerplate

[Документация](https://www.apollographql.com/)

## Добавление поддержки gql в cra

`yarn run eject`

Добавить расширения в `moduleFileExtensions` ( "gql", "graphql")
В `webpackDevServer.config.js` добавить обьект в `proxy`, где `target` - ссылка на GraphQl API

```js
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

```js
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
