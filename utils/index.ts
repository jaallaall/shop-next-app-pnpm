import { Options } from "interfaces";

export * from "./megaMenu";
export * from "./data";
export * from "./validationSchema";

export const uderscore = (val: string) => val.replace(/\s+/g, "_");

export const randomId = (length = 6) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

function camelToSnake(str: string) {
  let newKey = "";
  let index = 0;
  let code;
  let wasPrevNumber = true;
  let wasPrevUppercase = true;

  while (index < str.length) {
    code = str.charCodeAt(index);
    if (
      (!wasPrevUppercase && code >= 65 && code <= 90) ||
      (!wasPrevNumber && code >= 48 && code <= 57)
    ) {
      newKey += "_";
      newKey += str[index].toLowerCase();
    } else {
      newKey += str[index].toLowerCase();
    }
    wasPrevNumber = code >= 48 && code <= 57;
    wasPrevUppercase = code >= 65 && code <= 90;
    index++;
  }

  return newKey;
}

function snakeToCamel(str: string) {
  const parts = str.split("_");
  return parts.reduce(
    (p, c) => p + c.charAt(0).toUpperCase() + c.slice(1),
    parts.shift()!
  );
}

export function toSnakeCase(object: any, exceptions: string[] = []): any {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  return Object.keys(object).reduce(
    (p: { [key: string]: any }, key: string) => {
      const newKey = exceptions.indexOf(key) === -1 ? camelToSnake(key) : key;
      p[newKey] = toSnakeCase(object[key]);
      return p;
    },
    {}
  );
}

export function toCamelCase(object: any, exceptions: string[] = []): any {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  return Object.keys(object).reduce(
    (p: { [key: string]: any }, key: string) => {
      const newKey = exceptions.indexOf(key) === -1 ? snakeToCamel(key) : key;
      p[newKey] = toCamelCase(object[key]);
      return p;
    },
    {}
  );
}

export function camelToWords(str: string): string {
  let newKey = "";
  let index = 0;
  let code;
  let wasPrevNumber = true;
  let wasPrevUppercase = true;

  while (index < str.length) {
    code = str.charCodeAt(index);
    if (index === 0) {
      newKey += str[index].toUpperCase();
    } else if (
      (!wasPrevUppercase && code >= 65 && code <= 90) ||
      (!wasPrevNumber && code >= 48 && code <= 57)
    ) {
      newKey += " ";
      newKey += str[index].toUpperCase();
    } else {
      newKey += str[index].toLowerCase();
    }
    wasPrevNumber = code >= 48 && code <= 57;
    wasPrevUppercase = code >= 65 && code <= 90;
    index++;
  }

  return newKey;
}

export const omit = (prop: any, { [prop]: _, ...rest }) => rest;

export const getStorLocal = (item: string) => {
  if (typeof localStorage !== "undefined") {
    return JSON.parse(localStorage.getItem(item) as string);
  }
  return null;
};

export const myLoader = ({ src }: { src: string }) => {
  return src;
};

export function amount(num: number, per?: number) {
  if (num && per) {
    const discount = (num / 100) * per;
    return discount.toLocaleString("fa-EG");
  }
  if (num) {
    return num.toLocaleString("fa-EG");
  }
  return 0;
}

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export function shimmer(w?: number, h?: number) {
  return `data:image/svg+xml;base64,${toBase64(`
<svg width="${w ?? "100%"}" height="${
    h ?? "100%"
  }" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w ?? "100%"}" height="${h ?? "100%"}" fill="#333" />
  <rect id="r" width="${w ?? "100%"}" height="${h ?? "100%"}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w ?? "100%"}" to="${
    w ?? "100%"
  }" dur="1s" repeatCount="indefinite"  />
</svg>`)}`;
}

export const formData = (data: Options) => {
  const form = new FormData();
  for (const key in data) {
    if (data[key]) form.append(key, data[key]);
  }
  return form;
};

export const removeUndefined = (o: Options) =>
  Object.entries(o)
    .filter(([, val]) => val !== "false")
    .reduce((result, [key, val]) => {
      (result as any)[key] = val;
      return result;
    }, {});
