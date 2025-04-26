import { ProgressStatus } from "./ProgressStatusTypes";

export interface UserOnboardingProgress {
  id: number;
  status: ProgressStatus;
  completedAt: string;
}
