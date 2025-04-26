import { Company } from "../../company/models/companyTypes";
import { UserRole } from "./UserRoleTypes";

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  company: Company;
}