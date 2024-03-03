export type State = {
  status: 'empty' | 'loading' | 'error' | 'success';
  data: TResults[];
  error: string | null;
};

export type Action = {
  type: 'request' | 'loading' | 'success' | 'failure';
  payload: [];
  error: string | null;
};

export const initialState: State = {
  status: 'empty',
  data: [],
  error: '',
};

export type TResults = {
  brand: string;
  id: string;
  price: number;
  product: string;
};

// export type filterKeyValue = keyof typeof ;
