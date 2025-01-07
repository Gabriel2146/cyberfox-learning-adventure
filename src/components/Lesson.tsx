import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Lesson = () => {
  const { lessonId } = useParams();
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age");
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  console.log(`Rendering Lesson component for lesson: ${lessonId}, age group: ${ageGroup}`);

  const questions = [
    {
      question: "¿Qué información NO debes compartir en línea?",
      options: [
        "Tu dirección de casa",
        "Tu color favorito",
        "Tu película favorita",
        "Tu comida favorita",
      ],
      correctAnswer: 0,
    },
    {
      question: "Si alguien desconocido te pide información personal, ¿qué debes hacer?",
      options: [
        "Compartir solo un poco de información",
        "Ignorar y bloquear",
        "Preguntar por qué la necesita",
        "Compartir si parece amable",
      ],
      correctAnswer: 1,
    },
    {
      question: "¿Cuál es una buena práctica de seguridad?",
      options: [
        "Usar la misma contraseña siempre",
        "Compartir contraseñas con amigos",
        "Mantener las contraseñas privadas",
        "Usar contraseñas cortas",
      ],
      correctAnswer: 2,
    },
  ];

  const handleAnswer = (selectedIndex: number) => {
    console.log(`Selected answer: ${selectedIndex}`);
    const isCorrect = selectedIndex === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      toast({
        title: "¡Correcto!",
        description: "¡Muy bien! Sigamos aprendiendo.",
        variant: "default",
      });
      setScore(score + 1);
    } else {
      toast({
        title: "Incorrecto",
        description: "¡Inténtalo de nuevo!",
        variant: "destructive",
      });
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/rewards", { state: { score, total: questions.length } });
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-secondary/20 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg animate-scale-in">
          <h2 className="text-2xl font-bold mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="p-4 border-2 border-gray-200 rounded-lg text-left hover:border-primary hover:bg-primary/10 transition-colors button-hover"
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