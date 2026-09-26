export type SignupData = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
};

export type LoginData = {
  email: string;
  password: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
};

export type MeResponse = {
  success: boolean;
  user: User;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  token: string;
  user: User;
};
