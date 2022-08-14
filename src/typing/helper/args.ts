export type Arg0<T extends (...args: any) => any> = T extends (
  arg0: infer P
) => any
  ? P
  : any;
