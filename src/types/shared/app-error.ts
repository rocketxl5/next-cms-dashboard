export type FieldErrors = Record<string, string[]>;

export type AppError =
  | {
      type: 'validation';
      message: string;
      fieldErrors: FieldErrors;
      status: 400;
    }
  | {
      type: 'auth';
      message: string;
      code?: string;
      status: 401 | 403;
    }
  | {
      type: 'network';
      message: string;
      status?: number;
    }
  | {
      type: 'server';
      message: string;
      status: number;
    }
  | {
      type: 'unknown';
      message: string;
    };