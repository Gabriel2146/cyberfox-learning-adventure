import { useNavigate, useSearchParams } from "react-router-dom";
import { Lock, Unlock, Shield, Key, User, AlertTriangle, ArrowLeft, Smartphone, Wifi, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const LessonList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age");
  const { toast } = useToast();
  
  console.log(`Rendering LessonList component for age group: ${ageGroup}`);

  const youthLessons = [
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

  const kidLessons = [
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

  const seniorLessons = [
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

  const getLessons = () => {
    switch(ageGroup) {
      case "teens":
        return youthLessons;
      case "seniors":
        return seniorLessons;
      default:
        return kidLessons;
    }
  };

  const lessons = getLessons();

  const handleStartLearning = () => {
    console.log("Starting learning journey");
    navigate(`/lesson/personal-info?age=${ageGroup}&mode=sequential`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark/90 to-dark/80 p-6">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-white hover:text-primary transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-scale-in">
          <h1 className="text-4xl font-bold mb-4 text-white">Lecciones</h1>
          <p className="text-lg text-gray-300 mb-8">
            Selecciona una lección para comenzar o comienza el curso completo
          </p>
          <Button 
            onClick={handleStartLearning}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg mb-12"
          >
            Comenzar a Aprender
          </Button>
        </div>

        <div className="grid gap-6">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg flex items-center space-x-4 card-hover w-full text-white border border-white/20"
            >
              <div className={`p-3 rounded-full ${index === 0 ? "bg-primary" : "bg-gray-600"}`}>
                <lesson.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <h2 className="text-xl font-semibold mb-1">{lesson.title}</h2>
                <p className="text-sm text-gray-300">{lesson.description}</p>
              </div>
              {index === 0 ? (
                <Unlock className="w-6 h-6 text-primary" />
              ) : (
                <Lock className="w-6 h-6 text-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonList;
