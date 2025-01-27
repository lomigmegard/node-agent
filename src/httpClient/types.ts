import { RequestInit, Response } from "node-fetch";

export type RequestInterceptor = (
  url: string,
  request: RequestInit,
) => void | Promise<void>;

export type ResponseTransformer = (res: Response) => any;

export type HttpClientInitOpts = {
  baseUrl: string;
  baseHeaders?: Record<string, string>;
  baseOptions?: Omit<RequestInit, "headers">;
  json?: boolean;
};

export enum HeaderKey {
  Authorization = "authorization",
  Accept = "accept",
  ContentLength = "content-length",
  ContentType = "content-type",
  CorrelationId = "x-correlation-id",
  IdToken = "x-id-token",
  UserAgent = "user-agent",
}

export enum HttpMethod {
  Get = "get",
  Post = "post",
  Patch = "patch",
  Put = "put",
  Delete = "delete",
}
