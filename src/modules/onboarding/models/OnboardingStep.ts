import { StepType } from "./StepTypes";

export interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  type: StepType;
  mediaUrl: string;
  order: number;
}
