export interface QuestionBase {
  question: string;
  icon?: string;
  image?: string;
  feedback: {
    correct: string;
    incorrect: string;
    funFact: string;
  };
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: 'multiple-choice';
  options: string[];
  correctAnswer: number;
}

export interface TextQuestion extends QuestionBase {
  type: 'text';
  correctAnswers: string[];
}

export type Question = MultipleChoiceQuestion | TextQuestion;

export interface QuestionSet {
  [key: string]: Question[];
}