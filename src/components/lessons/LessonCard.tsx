import { Lock, Unlock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LessonType } from "./types";

interface LessonCardProps {
  lesson: LessonType;
  index: number;
  ageGroup: string | null;
}

const LessonCard = ({ lesson, index, ageGroup }: LessonCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg flex items-center space-x-4 card-hover w-full text-white border border-white/20"
      onClick={() => navigate(`/lesson/${lesson.id}?age=${ageGroup}`)}
      style={{ cursor: 'pointer' }}
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
  );
};

export default LessonCard;