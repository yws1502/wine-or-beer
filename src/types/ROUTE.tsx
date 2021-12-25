export interface ROUTE {
  ID: number,
  PATH: string,
  LABEL: string,
  SUBS?: Array<ROUTE>,
}
