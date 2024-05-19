interface List {
  id: string;
  name: string;
  description?: string;
  createdAt?: Date;
  emoji: string | JSX.Element;
  userId?: string | null;
}

export type { List };
