interface Fields {
  type: string;
  name: string;
  icon: React.ReactNode;
  placeholder: string;
  config: {
    required: boolean | ConfigOptions;
    minLength?: number | ConfigOptions;
    maxLength?: number | ConfigOptions;
    pattern?: any;
  };
  selectOptions?: any;
}

interface ConfigOptions {
  value: string | number | boolean;
  message: string;
}

export type { Fields, ConfigOptions };
