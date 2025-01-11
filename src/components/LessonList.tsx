import { useNavigate, useSearchParams } from "react-router-dom";
import { Lock, Unlock, Shield, Key, User, AlertTriangle, ArrowLeft, Smartphone, Wifi, CreditCard, MessageCircle, Globe, Brain, Heart, Gamepad, Video, Share2, BookOpen, Clock } from "lucide-react";
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
      title: "Privacidad en Redes Sociales",
      description: "Aprende a proteger tu información en redes sociales",
      icon: User,
      progress: 0,
    },
    {
      id: "passwords",
      title: "Contraseñas Seguras",
      description: "Crea y gestiona contraseñas fuertes",
      icon: Key,
      progress: 0,
    },
    {
      id: "online-safety",
      title: "Navegación Segura",
      description: "Protégete mientras navegas en internet",
      icon: Shield,
      progress: 0,
    },
    {
      id: "cyberbullying",
      title: "Prevención del Ciberacoso",
      description: "Identifica y combate el ciberacoso",
      icon: MessageCircle,
      progress: 0,
    },
    {
      id: "digital-footprint",
      title: "Huella Digital",
      description: "Gestiona tu presencia en línea",
      icon: Globe,
      progress: 0,
    },
    {
      id: "critical-thinking",
      title: "Pensamiento Crítico Online",
      description: "Evalúa información en internet",
      icon: Brain,
      progress: 0,
    },
    {
      id: "digital-relationships",
      title: "Relaciones Digitales",
      description: "Mantén relaciones saludables en línea",
      icon: Heart,
      progress: 0,
    },
    {
      id: "gaming-safety",
      title: "Seguridad en Videojuegos",
      description: "Juega en línea de forma segura",
      icon: Gamepad,
      progress: 0,
    },
    {
      id: "content-creation",
      title: "Creación de Contenido",
      description: "Crea contenido responsable",
      icon: Video,
      progress: 0,
    },
    {
      id: "sharing-online",
      title: "Compartir en Línea",
      description: "Comparte contenido de forma segura",
      icon: Share2,
      progress: 0,
    }
  ];

  const kidLessons = [
    {
      id: "internet-basics",
      title: "Introducción a Internet",
      description: "Aprende los conceptos básicos de internet",
      icon: Globe,
      progress: 0,
    },
    {
      id: "safe-websites",
      title: "Sitios Web Seguros",
      description: "Identifica sitios web seguros",
      icon: Shield,
      progress: 0,
    },
    {
      id: "online-friends",
      title: "Amigos en Internet",
      description: "Aprende sobre la amistad en línea",
      icon: User,
      progress: 0,
    },
    {
      id: "screen-time",
      title: "Tiempo en Pantalla",
      description: "Gestiona tu tiempo en internet",
      icon: Clock,
      progress: 0,
    },
    {
      id: "kind-online",
      title: "Amabilidad en Línea",
      description: "Sé amable con otros en internet",
      icon: Heart,
      progress: 0,
    },
    {
      id: "ask-help",
      title: "Pedir Ayuda",
      description: "Cuándo y cómo pedir ayuda",
      icon: AlertTriangle,
      progress: 0,
    },
    {
      id: "safe-games",
      title: "Juegos Seguros",
      description: "Juega de forma segura en línea",
      icon: Gamepad,
      progress: 0,
    },
    {
      id: "protect-info",
      title: "Protege tu Información",
      description: "Mantén tus datos seguros",
      icon: Lock,
      progress: 0,
    },
    {
      id: "digital-manners",
      title: "Buenos Modales Digitales",
      description: "Comportamiento adecuado en línea",
      icon: MessageCircle,
      progress: 0,
    },
    {
      id: "learning-online",
      title: "Aprendizaje en Línea",
      description: "Usa internet para aprender",
      icon: BookOpen,
      progress: 0,
    }
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
