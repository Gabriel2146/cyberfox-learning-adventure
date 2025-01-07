import { useLocation, useNavigate } from "react-router-dom";
import { Trophy, Star, ArrowRight, ArrowLeft } from "lucide-react";

const Rewards = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };
  
  console.log(`Rendering Rewards component with score: ${score}/${total}`);

  const percentage = (score / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark/90 to-dark/80 flex items-center justify-center p-6">
      <button
        onClick={() => navigate('/lessons')}
        className="absolute top-4 left-4 text-white hover:text-primary transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-md w-full text-center animate-scale-in border border-white/20">
        <div className="mb-8">
          {percentage >= 70 ? (
            <Trophy className="w-20 h-20 mx-auto text-accent animate-float" />
          ) : (
            <Star className="w-20 h-20 mx-auto text-highlight animate-float" />
          )}
        </div>

        <h1 className="text-3xl font-bold mb-4 text-white">
          {percentage >= 70
            ? "¡Eres un héroe de la ciberseguridad!"
            : "¡Buen intento!"}
        </h1>

        <p className="text-xl mb-6 text-gray-300">
          Puntuación: {score}/{total}
        </p>

        <div className="mb-8">
          <div className="h-4 bg-gray-700 rounded-full">
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