import { User } from "../../auth/models/UserTypes";

export interface Employe extends User {
    department: string;
  }
  