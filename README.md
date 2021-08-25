<p align="center">
  <a href="https://vue-formily.netlify.app/plugins/string-format" target="_blank">
    <img width="320" src="./.github/logo.png">
  </a>
</p>
<br>

Simple string format plugin for [**vue-formily**](https://vue-formily.netlify.app). Can be used as a standalone library to format string. 

## Links
- [📚 &nbsp; Documentation](https://vue-formily.netlify.app/plugins/string-format)

## Getting Started

### Installation

```sh
# install with yarn
yarn add @vue-formily/string-format

# install with npm
npm install @vue-formily/string-format --save
```

### Set Up

```typescript
import Vue from 'vue';
import VueFormily from '@vue-formily/formily';
import stringFormat from '@vue-formily/string-format';

Vue.use(VueFormily, {
  plugins: [stringFormat]
});
```

## Basic Usage
### Stand Along
```typescript
import stringFormat from '@vue-formily/string-format';

stringFormat.format('Hello, {name}!', {
  name: 'Bob'
}); // Hello, Bob!

stringFormat.format('Today is {dates[6]}.', {
  dates: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}); // Today is Sunday.

stringFormat.format('Welcome, {user.name}!', {
  user: {
    name: 'Bob'
  }
}); // Welcome, Bob!
```

### In Vue Formily's [Field](https://vue-formily.netlify.app/api/field)
To **format string** in Vue Formily's Field, we need to [plug](https://vue-formily.netlify.app/api/helpers#plug) a plugin with `string-format` name first. After that, we can use the `format` option in the [FieldSchema](https://vue-formily.netlify.app/api/field#constructor). Note that the **schema's type** has to be `string`.

```typescript
// Sample schema
{
  formId: 'name',
  // Type has te be string
  type: 'string',
  // `value` is the Field's value
  format: 'Welcome, {value}!'
}
```


For a deeper understanding, please check the [formatting example](https://vue-formily.netlify.app/examples/formatting).


## Contributing

You are welcome to contribute to this project, but before you do, please make sure you read the [Contributing Guide](https://github.com/vue-formily/formily/blob/main/.github/CONTRIBUTING.md).

## License

[MIT](https://github.com/vue-formily/string-format-plugin/blob/main/LICENSE)
