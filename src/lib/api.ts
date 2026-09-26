import type {
  AuthResponse,
  LoginData,
  MeResponse,
  SignupData,
} from "@/types/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  signup: async (data: SignupData): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Signup failed");
    }

    return result;
  },

  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Login failed");
    }

    return result;
  },

  getMe: async (): Promise<MeResponse> => {
    const response = await fetch(`${API_URL}/me`, {
      method: "GET",
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to get user");
    }

    return result;
  },
  logout: async () => {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Logout failed");
    }

    return result;
  },
};
