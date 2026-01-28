import { ErrorResponse } from "../../libs/sdk/types.gen";

export type User = {
    email: string;
    token: string;
};

export type MonthInfo = {
    startDate: Date;
    endDate: Date;
    name: string;
};

export type FetchResponse<T> = {
    ok: boolean;
    data?: T;
    error?: string | null;
};

export type ResponseStructure<T> = (
    | {
          data: ErrorResponse | T;
          error: undefined;
      }
    | {
          data: undefined;
          error: unknown;
      }
) & {
    request: Request;
    response: Response;
};
