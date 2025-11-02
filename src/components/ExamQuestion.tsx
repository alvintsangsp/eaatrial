import { Question } from "@/data/questions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ExamQuestionProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: string;
  onAnswerSelect: (answer: string) => void;
  onPrevious: () => void;
  onNext: () => void;
  onReview: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export const ExamQuestion = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onPrevious,
  onNext,
  onReview,
  canGoPrevious,
  canGoNext,
}: ExamQuestionProps) => {
  const options = [
    { value: "A", label: question.optionA },
    { value: "B", label: question.optionB },
    { value: "C", label: question.optionC },
    { value: "D", label: question.optionD },
  ];

  if (question.optionE) {
    options.push({ value: "E", label: question.optionE });
  }

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Section */}
      <Card className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium">題目進度</span>
            <span className="text-muted-foreground">
              第 {currentIndex + 1} 題 / 共 {totalQuestions} 題
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </Card>

      {/* Question Card */}
      <Card className="p-8">
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl font-semibold leading-relaxed flex-1">
              {currentIndex + 1}. {question.question}
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={onReview}
              className="flex-shrink-0"
            >
              <List className="w-4 h-4 mr-2" />
              檢閱答案
            </Button>
          </div>

          <RadioGroup value={selectedAnswer} onValueChange={onAnswerSelect}>
            <div className="space-y-3">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-muted/50 ${
                    selectedAnswer === option.value
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  }`}
                  onClick={() => onAnswerSelect(option.value)}
                >
                  <RadioGroupItem
                    value={option.value}
                    id={`option-${option.value}`}
                    className="mt-1"
                  />
                  <Label
                    htmlFor={`option-${option.value}`}
                    className="flex-1 cursor-pointer text-base leading-relaxed"
                  >
                    <span className="font-semibold mr-2">{option.value}.</span>
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          size="lg"
          onClick={onPrevious}
          disabled={!canGoPrevious}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          上一題
        </Button>
        <Button
          size="lg"
          onClick={onNext}
          disabled={!canGoNext}
        >
          {currentIndex === totalQuestions - 1 ? "完成" : "下一題"}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
