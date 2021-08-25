/**
  * string-format-plugin v0.0.0
  *
  * @link https://github.com/vue-formily/string-format-plugin
  * @source https://github.com/vue-formily/string-format-plugin
  * (c) 2021 An Ha
  * @license MIT
  */
const _toString = Object.prototype.toString;
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function isString(value) {
  return typeof value === 'string';
}

const rkey = /([^[\]]+)/g;
/**
 * Find the first found value in objects or arrays by its path
 */

function get(path, ...args) {
  const length1 = args.length;
  const paths = isString(path) ? path.split('.') : path;
  const length2 = paths.length;

  for (let i = 0; i < length1; i++) {
    let value = args[i];
    let j = -1;

    while (value && ++j < length2) {
      const fullName = paths[j];
      const m = fullName.match(rkey);

      if (m) {
        const length3 = m.length;

        for (let k = 0; k < length3; k++) {
          const name = m[k];

          if ((Array.isArray(value) || isPlainObject(value)) && name in value) {
            value = value[name];

            if (j === length2 - 1 && k === length3 - 1) {
              return value;
            }
          }
        }
      }
    }
  }

  return undefined;
}
/**
 * Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */

function flatArray(arr, deep = Infinity) {
  return deep > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val), []) : arr;
}

const simplePlaceholderRegex = /\{([^{}]+)\}/g;
function formatString(format, data) {
    return format.replace(simplePlaceholderRegex, (_, path) => {
        const value = get(path, ...flatArray([data]));
        return '' + value;
    });
}
var index = {
    name: 'string-format',
    format: formatString,
    install() {
        return this;
    },
    options: {}
};

export default index;
