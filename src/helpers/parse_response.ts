export function parseResponse(res: string) {
  res = res.replaceAll("/", "");
  res = res.replaceAll("-", "");
  res = res.replaceAll("_", "");
  return res;
}
