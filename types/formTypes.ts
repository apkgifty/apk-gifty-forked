interface Fields {
  type: string;
  name: string;
  icon: React.ReactNode;
  placeholder: string;
  config: {
    required: boolean;
  };
}

export type { Fields };
