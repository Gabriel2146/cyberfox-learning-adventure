import { useLocation, useNavigate } from "react-router-dom";
import { Trophy, Star, ArrowRight } from "lucide-react";

const Rewards = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };
  
  console.log(`Rendering Rewards component with score: ${score}/${total}`);

  const percentage = (score / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-secondary/20 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full text-center animate-scale-in">
        <div className="mb-8">
          {percentage >= 70 ? (
            <Trophy className="w-20 h-20 mx-auto text-accent animate-float" />
          ) : (
            <Star className="w-20 h-20 mx-auto text-highlight animate-float" />
          )}
        </div>

        <h1 className="text-3xl font-bold mb-4">
          {percentage >= 70
            ? "¡Eres un héroe de la ciberseguridad!"
            : "¡Buen intento!"}
        </h1>

        <p className="text-xl mb-6">
          Puntuación: {score}/{total}
        </p>

        <div className="mb-8">
          <div className="h-4 bg-gray-200 rounded-full">
            <div
              className="h-4 bg-primary rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => navigate("/lessons")}
          className="bg-primary text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 mx-auto button-hover"
        >
          <span>Siguiente lección</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Rewards;