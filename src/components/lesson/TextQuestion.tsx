import { TextQuestion as TextQuestionType } from "../types/questions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconComponent } from "./IconComponent";
import { useState } from "react";

interface TextQuestionProps {
  question: TextQuestionType;
  onAnswer: (answer: string) => void;
}

export const TextQuestion = ({ question, onAnswer }: TextQuestionProps) => {
  const [textAnswer, setTextAnswer] = useState("");
  const IconComponent = question.icon ? getIconComponent(question.icon) : null;

  const handleSubmit = () => {
    onAnswer(textAnswer);
    setTextAnswer("");
  };

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

      <div className="space-y-4">
        <Input
          value={textAnswer}
          onChange={(e) => setTextAnswer(e.target.value)}
          placeholder="Escribe tu respuesta aquí..."
          className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
        />
        <Button onClick={handleSubmit} className="w-full">
          Enviar Respuesta
        </Button>
      </div>
    </div>
  );
};