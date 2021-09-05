<p align="center">
  <a href="https://vue-formily.netlify.app/plugins/string-format" target="_blank">
    <img width="320" src="./.github/logo.png">
  </a>
</p>
<br>

Simple string format plugin for [**vue-formily**](https://vue-formily.netlify.app).

## Links
- [📚 &nbsp; Documentation](https://vue-formily.netlify.app/plugins/string-format)

## Installation
### NPM
```sh
# install with yarn
yarn add @vue-formily/string-format

# install with npm
npm install @vue-formily/string-format --save
```

### CDN
You can use **string-format** plugin with a script tag and a CDN, import the library like this:

```html
<script src="https://unpkg.com/@vue-formily/string-format@latest"></script>
```

This will inject a `StringFormatPlugin` global object, which you will use to access the various methods exposed by the plugin or register to [**vue-formily**](https://vue-formily.netlify.app).

If you are using native ES Modules, there is also an ES Modules compatible build:

```html
<script type="module">
  import stringFormat from 'https://unpkg.com/@vue-formily/string-format@latest/dist/string-format-plugin.esm.js'
</script>
```

### Set Up

```typescript
import Vue from 'vue';
import VueFormily from '@vue-formily/formily';
import stringFormat from '@vue-formily/string-format';

VueFormily.plug(stringFormat);
Vue.use(VueFormily);
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
After installing **String Format Plugin**, we can use the `format` option in the [FieldSchema](https://vue-formily.netlify.app/api/field#constructor). Note that the **schema's type** has to be `string`.

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

[MIT](./LICENSE)
