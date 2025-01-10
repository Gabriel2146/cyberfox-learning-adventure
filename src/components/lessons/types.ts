import { LucideIcon } from "lucide-react";

export interface LessonType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
}