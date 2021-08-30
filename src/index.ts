import { flatArray, get } from '@vue-formily/util';

const simplePlaceholderRegex = /\{([^{}]+)\}/g;

type Data = Record<string, any>;

function formatString(format: string, data?: Data | Data[]) {
  return format.replace(simplePlaceholderRegex, (_: string, path: string) => {
    const value = get(path, ...flatArray([data]));
    return '' + value;
  });
}

export default {
  name: 'string-format',
  format: formatString,
  install(Objeto: any, options = {}) {
    this.options = { ...this.options, ...options };

    Objeto.prototype.$stringFormat = this;
  },
  options: {}
};
