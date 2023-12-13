export interface IApi {
  get: GetApiType;
  post: PostApiType;
}

export type PostApiType = (url: string, payload?: any) => Promise<any>;
export type GetApiType = (url: string) => Promise<any>;
export type DeleteApiType = (url: string) => Promise<any>;
export type RequestApiType = (
  url: string,
  type: string,
  payload: any | null
) => Promise<any>;
export type GetFileApiType = (url: string) => Promise<any>;
