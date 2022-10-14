export const NumSeparate = (number: number) =>
  number
    .toString()
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    ?.map((item) => item.toString().split("").reverse().join(""))
    ?.reverse()
    ?.join(",");
