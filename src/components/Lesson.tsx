import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { youthQuestions } from "./questions/YouthQuestions";
import { seniorQuestions } from "./questions/SeniorQuestions";
import { ProgressBar } from "./lesson/ProgressBar";
import { MultipleChoiceQuestion } from "./lesson/MultipleChoiceQuestion";
import { TextQuestion } from "./lesson/TextQuestion";
import { Question } from "../types/questions";

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
      const questions = ageGroup === "seniors" 
        ? Object.values(seniorQuestions).flat()
        : Object.values(youthQuestions).flat();
      setAllQuestions(questions);
    } else {
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

  const handleAnswerFeedback = (isCorrect: boolean) => {
    const feedback = allQuestions[currentQuestion].feedback;
    
    toast({
      title: isCorrect ? "¡Correcto! 🎉" : "Incorrecto ❌",
      description: isCorrect ? feedback.correct : feedback.incorrect,
      variant: isCorrect ? "default" : "destructive",
    });

    setTimeout(() => {
      toast({
        title: "¿Sabías que...? 🤔",
        description: feedback.funFact,
        variant: "default",
      });
    }, 1000);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/rewards", { state: { score, total: allQuestions.length } });
    }
  };

  const handleMultipleChoiceAnswer = (selectedIndex: number) => {
    const question = allQuestions[currentQuestion] as MultipleChoiceQuestion;
    const isCorrect = selectedIndex === question.correctAnswer;
    handleAnswerFeedback(isCorrect);
  };

  const handleTextAnswer = (answer: string) => {
    const question = allQuestions[currentQuestion] as TextQuestion;
    const normalizedAnswer = answer.toLowerCase().trim();
    const isCorrect = question.correctAnswers.some(
      correctAnswer => normalizedAnswer.includes(correctAnswer.toLowerCase())
    );
    handleAnswerFeedback(isCorrect);
  };

  const currentQuestionData = allQuestions[currentQuestion];

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
        <ProgressBar current={currentQuestion} total={allQuestions.length} />

        {currentQuestionData.type === 'multiple-choice' ? (
          <MultipleChoiceQuestion
            question={currentQuestionData}
            onAnswer={handleMultipleChoiceAnswer}
          />
        ) : (
          <TextQuestion
            question={currentQuestionData}
            onAnswer={handleTextAnswer}
          />
        )}
      </div>
    </div>
  );
};

export default Lesson;