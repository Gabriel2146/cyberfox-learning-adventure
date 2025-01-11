import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { youthQuestions } from "./questions/YouthQuestions";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: {
    correct: string;
    incorrect: string;
  };
}

interface QuestionSet {
  [key: string]: Question[];
}

const seniorQuestions: QuestionSet = {
  "basic-security": [
    {
      question: "¿Qué es un antivirus y por qué es importante tenerlo?",
      options: [
        "Un programa para jugar",
        "Un programa que protege contra software malicioso",
        "Una aplicación de redes sociales",
        "Un tipo de virus",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! Un antivirus es esencial para proteger su computadora contra programas maliciosos.",
        incorrect: "Un antivirus es un programa que protege su computadora contra software malicioso, virus y otras amenazas."
      }
    }
  ],
  "mobile-security": [
    {
      question: "¿Qué precauciones debe tomar al usar su teléfono móvil?",
      options: [
        "No usar contraseña",
        "Usar contraseña y no instalar apps de fuentes desconocidas",
        "Compartir su ubicación siempre",
        "Dar acceso a todas las apps",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Exacto! Es importante proteger su teléfono con contraseña y ser cuidadoso con las apps que instala.",
        incorrect: "Debe proteger su teléfono con contraseña y solo instalar apps de fuentes confiables."
      }
    }
  ],
  "wifi-security": [
    {
      question: "¿Cómo identificar una red WiFi segura?",
      options: [
        "Todas las redes son seguras",
        "Buscar el candado de seguridad y usar redes conocidas",
        "Conectarse a cualquier red gratis",
        "Compartir la contraseña con todos",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! Las redes seguras muestran un candado y es mejor usar redes conocidas.",
        incorrect: "Las redes WiFi seguras muestran un candado y es más seguro usar redes conocidas y confiables."
      }
    }
  ],
  "banking-security": [
    {
      question: "¿Qué medidas debe tomar al usar banca en línea?",
      options: [
        "Usar WiFi público",
        "Usar conexiones seguras y verificar el sitio web oficial",
        "Compartir credenciales",
        "Guardar contraseñas en el navegador",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Bien! Es importante usar conexiones seguras y verificar que esté en el sitio oficial del banco.",
        incorrect: "Para usar la banca en línea de forma segura, use conexiones seguras y verifique que esté en el sitio oficial."
      }
    }
  ],
  "password-management": [
    {
      question: "¿Cómo crear y mantener contraseñas seguras?",
      options: [
        "Usar la misma para todo",
        "Usar contraseñas únicas y complejas para cada servicio",
        "Usar fechas de nacimiento",
        "Compartirlas con amigos",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! Es importante usar contraseñas únicas y complejas para cada servicio.",
        incorrect: "Las contraseñas seguras deben ser únicas para cada servicio y combinar letras, números y símbolos."
      }
    }
  ],
  "email-security": [
    {
      question: "¿Cómo identificar un correo electrónico fraudulento?",
      options: [
        "Abrir todos los enlaces",
        "Verificar remitente, errores y enlaces sospechosos",
        "Descargar todos los archivos",
        "Responder inmediatamente",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Exacto! Debe verificar el remitente y ser cauteloso con enlaces y archivos sospechosos.",
        incorrect: "Los correos fraudulentos suelen tener remitentes sospechosos, errores y enlaces maliciosos."
      }
    }
  ],
  "social-networks": [
    {
      question: "¿Qué configuración de privacidad debe usar en redes sociales?",
      options: [
        "Perfil público",
        "Configuración privada y solo aceptar conocidos",
        "Aceptar todas las solicitudes",
        "No usar configuración",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! Es importante mantener su perfil privado y solo conectar con personas conocidas.",
        incorrect: "En redes sociales, use configuración privada y solo acepte conexiones de personas que conoce."
      }
    }
  ],
  "online-shopping": [
    {
      question: "¿Cómo realizar compras seguras en internet?",
      options: [
        "Usar cualquier sitio",
        "Usar sitios seguros y verificados",
        "Compartir datos bancarios",
        "Ignorar las reseñas",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Bien! Debe usar sitios seguros y verificados para comprar en línea.",
        incorrect: "Para comprar de forma segura, use sitios web verificados y con buena reputación."
      }
    }
  ],
  "digital-services": [
    {
      question: "¿Cómo usar servicios digitales gubernamentales de forma segura?",
      options: [
        "Usar cualquier sitio",
        "Verificar sitios oficiales y usar conexiones seguras",
        "Compartir credenciales",
        "Ignorar la seguridad",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! Debe usar solo sitios oficiales y conexiones seguras.",
        incorrect: "Para trámites gubernamentales en línea, use solo sitios oficiales y conexiones seguras."
      }
    }
  ],
  "scam-prevention": [
    {
      question: "¿Cómo identificar y evitar estafas comunes en línea?",
      options: [
        "Confiar en todos",
        "Ser escéptico y verificar ofertas sospechosas",
        "Compartir datos personales",
        "Ignorar las advertencias",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Exacto! Es importante ser escéptico y verificar ofertas que parecen demasiado buenas.",
        incorrect: "Para evitar estafas, sea escéptico y verifique ofertas que parecen demasiado buenas para ser verdad."
      }
    }
  ]
};

const Lesson = () => {
  const { lessonId } = useParams();
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age");
  const mode = searchParams.get("mode");
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);

  console.log(`Rendering Lesson component for lesson: ${lessonId}, age group: ${ageGroup}, mode: ${mode}`);

  useEffect(() => {
    if (mode === "sequential") {
      // Combinar todas las preguntas de todas las lecciones
      const questions = ageGroup === "seniors" 
        ? Object.values(seniorQuestions).flat()
        : Object.values(youthQuestions).flat();
      setAllQuestions(questions);
    } else {
      // Modo normal: solo preguntas de la lección actual
      const questions = ageGroup === "seniors" 
        ? (lessonId && seniorQuestions[lessonId] ? seniorQuestions[lessonId] : [])
        : (lessonId && youthQuestions[lessonId as keyof typeof youthQuestions] || []);
      setAllQuestions(questions);
    }
  }, [lessonId, ageGroup, mode]);

  if (!allQuestions.length) {
    console.log("No questions found, redirecting to lessons page");
    navigate('/lessons');
    return null;
  }

  const handleAnswer = (selectedIndex: number) => {
    console.log(`Selected answer: ${selectedIndex}`);
    const isCorrect = selectedIndex === allQuestions[currentQuestion].correctAnswer;
    const feedback = allQuestions[currentQuestion].feedback;
    
    if (isCorrect) {
      toast({
        title: "¡Correcto! 🎉",
        description: feedback.correct,
        variant: "default",
      });
      setScore(score + 1);
    } else {
      toast({
        title: "Incorrecto ❌",
        description: feedback.incorrect,
        variant: "destructive",
      });
    }

    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/rewards", { state: { score, total: allQuestions.length } });
    }
  };

  const progress = ((currentQuestion + 1) / allQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark/90 to-dark/80 p-6">
      <button
        onClick={() => navigate('/lessons')}
        className="absolute top-4 left-4 text-white hover:text-primary transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <div className="max-w-4xl mx-auto pt-16">
        <div className="mb-8">
          <div className="h-2 bg-gray-700 rounded-full">
            <div
              className="h-2 bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-scale-in border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-white">
            {allQuestions[currentQuestion].question}
          </h2>

          <div className="grid gap-4">
            {allQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="p-4 border-2 border-white/20 rounded-lg text-left hover:border-primary hover:bg-primary/10 transition-colors button-hover text-white"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
