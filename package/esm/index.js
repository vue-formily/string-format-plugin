import { flatArray, get } from '@vue-formily/util';
const simplePlaceholderRegex = /\{([^{}]+)\}/g;

function formatString(format, data) {
  return format.replace(simplePlaceholderRegex, (_, path) => {
    const value = get(path, ...flatArray([data]));
    return '' + value;
  });
}

export default {
  name: 'string-format',
  format: formatString,

  install() {
    return this;
  },

  options: {}
};