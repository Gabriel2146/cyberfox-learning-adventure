import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import LessonCard from "./lessons/LessonCard";
import { kidLessons, seniorLessons, youthLessons } from "./lessons/lessonData";

const LessonList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age");
  const { toast } = useToast();
  
  console.log(`Rendering LessonList component for age group: ${ageGroup}`);

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
          {getLessons().map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              index={index}
              ageGroup={ageGroup}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonList;