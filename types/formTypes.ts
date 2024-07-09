interface Fields {
  type: string;
  name: string;
  icon: React.ReactNode;
  placeholder: string;
  config: {
    required: boolean;
  };
  selectOptions?: any;
}

export type { Fields };
