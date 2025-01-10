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
    },
    {
      question: "¿Qué debe hacer si recibe un correo electrónico sospechoso?",
      options: [
        "Abrirlo inmediatamente",
        "No abrirlo y eliminarlo",
        "Reenviarlo a amigos",
        "Hacer clic en todos los enlaces",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Exacto! Es mejor no abrir correos sospechosos y eliminarlos directamente.",
        incorrect: "Por seguridad, es mejor no abrir correos sospechosos y eliminarlos directamente."
      }
    },
    {
      question: "¿Cuál es una buena práctica para las contraseñas?",
      options: [
        "Usar la misma para todo",
        "Usar combinaciones de letras, números y símbolos",
        "Compartirlas con amigos",
        "Escribirlas en un papel",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! Las contraseñas seguras deben combinar letras, números y símbolos.",
        incorrect: "Las contraseñas más seguras combinan letras, números y símbolos para mayor protección."
      }
    },
    {
      question: "¿Qué hacer si alguien solicita sus datos bancarios por teléfono?",
      options: [
        "Darlos inmediatamente",
        "Nunca compartirlos y contactar al banco directamente",
        "Compartirlos si parece urgente",
        "Pedir consejo a un amigo",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Bien hecho! Nunca comparta datos bancarios por teléfono y siempre contacte directamente a su banco.",
        incorrect: "Por seguridad, nunca comparta datos bancarios por teléfono. Contacte directamente a su banco."
      }
    },
    {
      question: "¿Cómo proteger sus documentos importantes en la computadora?",
      options: [
        "No hacer nada especial",
        "Crear copias de seguridad y usar contraseñas",
        "Compartirlos por email",
        "Dejarlos sin protección",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Exacto! Es importante tener copias de seguridad y proteger sus documentos con contraseñas.",
        incorrect: "Para proteger sus documentos, es importante crear copias de seguridad y usar contraseñas."
      }
    },
    {
      question: "¿Qué es el phishing?",
      options: [
        "Un deporte",
        "Un intento de robo de información personal",
        "Una red social",
        "Un tipo de correo normal",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! El phishing es un intento de robar su información personal haciéndose pasar por entidades confiables.",
        incorrect: "El phishing es cuando alguien intenta robar su información personal haciéndose pasar por entidades confiables."
      }
    },
    {
      question: "¿Qué hacer si olvida su contraseña?",
      options: [
        "Crear una cuenta nueva",
        "Usar la opción de recuperación oficial",
        "Pedirle a un amigo",
        "No hacer nada",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Bien! Siempre use el proceso oficial de recuperación de contraseña.",
        incorrect: "Use siempre el proceso oficial de recuperación de contraseña del servicio."
      }
    },
    {
      question: "¿Cómo reconocer un sitio web seguro?",
      options: [
        "Por sus colores",
        "Por el candado de seguridad y https",
        "Por su publicidad",
        "Por sus ofertas",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! El candado y https indican que un sitio web es seguro.",
        incorrect: "Los sitios web seguros muestran un candado y usan https en su dirección."
      }
    },
    {
      question: "¿Qué hacer si una página pide actualizar su software?",
      options: [
        "Actualizar inmediatamente",
        "Verificar que sea legítimo y actualizar desde fuentes oficiales",
        "Ignorar siempre",
        "Preguntar en redes sociales",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Exacto! Siempre verifique y actualice desde fuentes oficiales.",
        incorrect: "Es importante verificar y solo actualizar software desde fuentes oficiales."
      }
    },
    {
      question: "¿Cómo proteger su red WiFi doméstica?",
      options: [
        "Dejarla abierta",
        "Usar contraseña fuerte y cambiarla regularmente",
        "Compartir la contraseña",
        "No usar contraseña",
      ],
      correctAnswer: 1,
      feedback: {
        correct: "¡Correcto! Una contraseña fuerte y cambiarla regularmente protege su red WiFi.",
        incorrect: "Para proteger su red WiFi, use una contraseña fuerte y cámbiela regularmente."
      }
    }
  ],
  "mobile-security": [
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
  "wifi-security": [
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
  "banking-security": [
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