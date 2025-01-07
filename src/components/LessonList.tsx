import { useNavigate, useSearchParams } from "react-router-dom";
import { Lock, Unlock, Shield, Key, User, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LessonList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age");
  const { toast } = useToast();
  
  console.log(`Rendering LessonList component for age group: ${ageGroup}`);

  const lessons = [
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

  const handleLessonSelect = (lessonId: string) => {
    console.log(`Selected lesson: ${lessonId}`);
    if (lessonId === "personal-info") {
      navigate(`/lesson/${lessonId}?age=${ageGroup}`);
    } else {
      toast({
        title: "Lección bloqueada",
        description: "Completa las lecciones anteriores primero",
        variant: "default",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-secondary/20 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-scale-in">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Lecciones</h1>
          <p className="text-lg text-gray-600">
            Selecciona una lección para comenzar
          </p>
        </div>

        <div className="grid gap-6">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => handleLessonSelect(lesson.id)}
              className="bg-white rounded-xl p-6 shadow-lg flex items-center space-x-4 card-hover button-hover w-full"
            >
              <div className={`p-3 rounded-full ${index === 0 ? "bg-primary" : "bg-gray-200"}`}>
                <lesson.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <h2 className="text-xl font-semibold mb-1">{lesson.title}</h2>
                <p className="text-sm text-gray-600">{lesson.description}</p>
              </div>
              {index === 0 ? (
                <Unlock className="w-6 h-6 text-primary" />
              ) : (
                <Lock className="w-6 h-6 text-gray-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonList;