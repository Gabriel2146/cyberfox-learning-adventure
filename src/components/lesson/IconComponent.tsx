import { Shield, Lock, AlertTriangle, Wifi, CreditCard, KeyRound, Mail, Users, ShoppingCart, FileCheck } from "lucide-react";

const icons = {
  Shield,
  Lock,
  AlertTriangle,
  Wifi,
  CreditCard,
  KeyRound,
  Mail,
  Users,
  ShoppingCart,
  FileCheck
};

export const getIconComponent = (iconName: string) => {
  return icons[iconName as keyof typeof icons];
};