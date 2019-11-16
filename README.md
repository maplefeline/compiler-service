# TaaS

A microservice API that takes a resource expected to contain a PEG grammar and returns a syntax tree for that grammar.

## Project setup
```sh
yarn install
```

### Compiles and hot-reloads for development
```sh
yarn serve
```

bootstrap PEG api transforms

```sh
curl 'http://localhost:8080/api/peg/peg?src=http%3A%2F%2Flocalhost%3A8080%2Fresources%2Fpeg%2Epeg' | jq --sort-keys > ./spec/static.json
# check schemas
curl 'http://localhost:8080/api/peg/peg/schema.json'
curl 'http://localhost:8080/api/peg/peg/schema/schema.json'
```

### Compiles and minifies for production
```sh
yarn build
```

### Run your unit tests
```sh
yarn test:unit
```

### Lints and fixes files
```sh
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
