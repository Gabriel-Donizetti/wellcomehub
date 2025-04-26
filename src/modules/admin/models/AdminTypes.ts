import { User } from "../../auth/models/UserTypes";

export interface Admin extends User {
    permissions: string[];
}
