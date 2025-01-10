import { Shield, Key, User, AlertTriangle, Smartphone, Wifi, CreditCard } from "lucide-react";
import { LessonType } from "./types";

export const youthLessons: LessonType[] = [
  {
    id: "personal-info",
    title: "No compartas información personal",
    description: "Aprende a proteger tus datos personales",
    icon: User,
    progress: 0,
  },
  {
    id: "passwords",
    title: "Crea contraseñas seguras",
    description: "Descubre cómo crear contraseñas fuertes",
    icon: Key,
    progress: 0,
  },
    {
      id: "online-safety",
      title: "Seguridad en línea",
      description: "Navega de forma segura por internet",
      icon: Shield,
      progress: 0,
    },
    {
      id: "scams",
      title: "Detecta estafas",
      description: "Identifica y evita estafas en línea",
      icon: AlertTriangle,
      progress: 0,
    },
    {
      id: "digital-footprint",
      title: "Huella Digital",
      description: "Aprende sobre lo que dejas en internet",
      icon: User,
      progress: 0,
    },
    {
      id: "secure-browsing",
      title: "Navegación Segura",
      description: "Aprende a navegar de forma segura",
      icon: Shield,
      progress: 0,
    },
    {
      id: "cyberbullying",
      title: "Ciberacoso",
      description: "Cómo identificar y evitar el ciberacoso",
      icon: AlertTriangle,
      progress: 0,
    },
    {
      id: "safe-downloads",
      title: "Descargas Seguras",
      description: "Aprende a descargar archivos seguros",
      icon: Shield,
      progress: 0,
    },
    {
      id: "social-media",
      title: "Redes Sociales",
      description: "Uso seguro de redes sociales",
      icon: User,
      progress: 0,
    },
    {
      id: "privacy-settings",
      title: "Configuración de Privacidad",
      description: "Protege tu privacidad en línea",
      icon: Key,
      progress: 0,
    }
];

export const kidLessons: LessonType[] = [
  {
    id: "personal-info",
    title: "No compartas información personal",
    description: "Aprende a proteger tus datos personales",
    icon: User,
    progress: 0,
  },
    {
      id: "passwords",
      title: "Crea contraseñas seguras",
      description: "Descubre cómo crear contraseñas fuertes",
      icon: Key,
      progress: 0,
    },
    {
      id: "online-safety",
      title: "Seguridad en línea",
      description: "Navega de forma segura por internet",
      icon: Shield,
      progress: 0,
    },
    {
      id: "scams",
      title: "Detecta estafas",
      description: "Identifica y evita estafas en línea",
      icon: AlertTriangle,
      progress: 0,
    },
];

export const seniorLessons: LessonType[] = [
  {
    id: "basic-security",
    title: "Seguridad Básica",
    description: "Conceptos fundamentales de seguridad en línea",
    icon: Shield,
    progress: 0,
  },
    {
      id: "mobile-security",
      title: "Seguridad en el Móvil",
      description: "Protege tu teléfono y aplicaciones",
      icon: Smartphone,
      progress: 0,
    },
    {
      id: "wifi-security",
      title: "Seguridad en Redes WiFi",
      description: "Aprende a usar redes WiFi de forma segura",
      icon: Wifi,
      progress: 0,
    },
    {
      id: "banking-security",
      title: "Banca en Línea Segura",
      description: "Realiza operaciones bancarias con seguridad",
      icon: CreditCard,
      progress: 0,
    },
];
