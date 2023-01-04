import { appConfig } from "../_config/appConfig";
import {
  getSessionCookie,
  removeSessionCookie,
  setSessionCookie,
} from "../context/SessionContext";

class AuthUtils {
  token = undefined;
  headers = undefined;
  constructor() {
    this.token = getSessionCookie()?.token;
    if (this.token) {
      this.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      };
    }
  }

  async login(username, password) {
    console.log("LOGIN");
    const response = await fetch(`${appConfig.apiPath}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.status !== 200) throw new Error("Login failed");
    const { data, error } = await response.json();
    if (error) throw new Error(error);
    if (data) {
      setSessionCookie(data);
    }
    return data;
  }

  async register(username, password) {
    const response = await fetch(`${appConfig.apiPath}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.status !== 201) throw new Error("Registration failed");
    const { data, error } = await response.json();
    if (error) throw new Error(error);
    if (data) {
      setSessionCookie(data);
    }
    return data;
  }

  async logout() {
    removeSessionCookie();
    window.location.reload();
  }
}

export const authUtils = new AuthUtils();
