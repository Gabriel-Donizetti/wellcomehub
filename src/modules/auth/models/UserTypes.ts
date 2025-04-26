import { Company } from "../../company/models/companyTypes";
import { UserRole } from "./UserRoleTypes";

export interface User {
    id: string;
    name: string;
    email: string;
    company: Company
    role: UserRole;
    createdAt: Date;
  }