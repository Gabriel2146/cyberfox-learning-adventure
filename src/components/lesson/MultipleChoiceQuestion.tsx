import { MultipleChoiceQuestion as MultipleChoiceQuestionType } from "../../types/questions";
import { getIconComponent } from "./IconComponent";

interface MultipleChoiceQuestionProps {
  question: MultipleChoiceQuestionType;
  onAnswer: (selectedIndex: number) => void;
}

export const MultipleChoiceQuestion = ({ question, onAnswer }: MultipleChoiceQuestionProps) => {
  const IconComponent = question.icon ? getIconComponent(question.icon) : null;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-scale-in border border-white/20">
      <div className="flex items-center gap-4 mb-6">
        {IconComponent && <IconComponent className="w-8 h-8 text-primary" />}
        <h2 className="text-2xl font-bold text-white">{question.question}</h2>
      </div>

      {question.image && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <img 
            src={question.image} 
            alt="Imagen ilustrativa" 
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="p-4 border-2 border-white/20 rounded-lg text-left hover:border-primary hover:bg-primary/10 transition-colors button-hover text-white"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};