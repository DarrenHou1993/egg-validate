interface CheckHandlerFunc {
  (rule: any, value: any): string | void;
}

interface ValidateError {
  code: string;
  field?: string;
  message: string;
}

declare module 'egg' {
  export interface Application {
    validator: {
      addRule: (
        type: string,
        check: RegExp | CheckHandlerFunc,
        override?: boolean,
        convertType?: Function | String
      ) => void;
      validate: (rules: any, data: any) => ValidateError[];
    };
  }

  export interface Context {
    validate: (rules: any, data?: any) => void;
  }
  interface EggAppConfig {
    validate: {
      translate: Function;
      validateRoot: boolean;
      convert: boolean;
      widelyUndefined: boolean;
    };
  }
}
