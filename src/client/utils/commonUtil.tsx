/**
 * Checks if `value` is `null`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
export const isNull = (value:any) => {
  return value === null;
};

/**
 * Checks if `value` is the `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
export const isObject = (value:any) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

/**
 * Checks if `obj` is an empty object.
 *
 * @param {*} obj The obj to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
export const isEmpty = (obj:any) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

export const toUpper = (v:any, prev:any) => {
  if (v === prev) {
    return v;
  }
  return v && v.charAt(0).toUpperCase() + v.slice(1);
};

export const stringExplode = (str:any, delimiter:any) => {
  return str.split(delimiter);
};

export const convertStingToPascalCase = (str:any) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word:any) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export const arrayCompare = (arr1:any, arr2:any) => {
  if (!arr1 || !arr2) return;
  let result : any;
  arr1.forEach((e1:any, i:any) =>
    arr2.forEach((e2:any) => {
      if (e1.length > 1 && e2.length) {
        result = arrayCompare(e1, e2);
      } else if (e1 !== e2) {
        result = false;
      } else {
        result = true;
      }
    })
  );
  return result;
};

export const stringCompare = (str1:any, str2:any) => {
  const string1 = !isEmpty(str1) ? str1.toString() : '';
  const string2 = !isEmpty(str2) ? str2.toString() : '';
  return string1 === string2;
};

export const objectCompare = (obj1:any, obj2:any) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const isBase64 = (str:any, mimeRequired = true) => {
  if (str instanceof Boolean || typeof str === 'boolean' || str === '') {
    return false;
  }
  let regex = '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?';
  let mimeRegex = '(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)';
  if (mimeRequired === true) {
    regex = mimeRegex + regex;
  }
  return new RegExp('^' + regex + '$', 'gi').test(str);
};
