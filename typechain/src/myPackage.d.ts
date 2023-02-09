interface Config {
  url: string;
}
declare module "myPackage" {
  function init(config: number): boolean;
  function exit(code: number): number;
}
console.log("hi");
