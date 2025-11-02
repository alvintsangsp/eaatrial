import { Question } from "@/data/questions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, Trophy, Clock, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExamResultsProps {
  questions: Question[];
  answers: Record<number, string>;
  timeTaken: number; // in seconds
  onRetake: () => void;
  onExit: () => void;
}

export const ExamResults = ({
  questions,
  answers,
  timeTaken,
  onRetake,
  onExit,
}: ExamResultsProps) => {
  const correctCount = questions.filter(
    (q, i) => answers[i] === q.correctAnswer
  ).length;
  const totalQuestions = questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 60;

  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;

  const handleReportError = () => {
    const subject = encodeURIComponent(
      `[EAA Mock Exam] Question Feedback - ${new Date().toLocaleDateString()}`
    );
    const body = encodeURIComponent(
      "題目編號：\n問題描述：\n"
    );
    window.location.href = `mailto:cs@lazydads.net?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Card */}
        <Card
          className={cn(
            "p-8 text-center",
            passed ? "bg-success/10 border-success/20" : "bg-destructive/10 border-destructive/20"
          )}
        >
          <div className="space-y-4">
            <div className="inline-block p-4 bg-background rounded-full">
              <Trophy
                className={cn(
                  "w-12 h-12",
                  passed ? "text-success" : "text-destructive"
                )}
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-2">
                {passed ? "✓ 合格" : "✗ 不合格"}
              </h1>
              <p className="text-xl text-muted-foreground">
                你的得分：{correctCount}/{totalQuestions} ({percentage}%)
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">總題數</p>
                <p className="text-2xl font-bold">{totalQuestions}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">答對</p>
                <p className="text-2xl font-bold text-success">{correctCount}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">答錯</p>
                <p className="text-2xl font-bold text-destructive">
                  {totalQuestions - correctCount}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">用時</p>
                <p className="text-2xl font-bold">
                  {minutes}:{String(seconds).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Questions Review */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">逐題檢閱</h2>
          <Accordion type="multiple" className="w-full">
            {questions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <AccordionItem key={question.id} value={`question-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      )}
                      <span className="flex-1">
                        {index + 1}. {question.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        {["A", "B", "C", "D", "E"].map((option) => {
                          const optionKey = `option${option}` as keyof Question;
                          const optionText = question[optionKey];
                          
                          if (!optionText) return null;

                          const isUserAnswer = userAnswer === option;
                          const isCorrectAnswer = question.correctAnswer === option;

                          return (
                            <div
                              key={option}
                              className={cn(
                                "p-3 rounded-lg border-2",
                                isCorrectAnswer && "bg-success/10 border-success",
                                isUserAnswer && !isCorrect && "bg-destructive/10 border-destructive",
                                !isCorrectAnswer && !isUserAnswer && "bg-muted/30 border-border"
                              )}
                            >
                              <div className="flex items-start gap-2">
                                <span className="font-semibold">{option}.</span>
                                <span className="flex-1">{optionText}</span>
                                {isCorrectAnswer && (
                                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                                )}
                                {isUserAnswer && !isCorrect && (
                                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">解釋：</h4>
                        <p className="text-sm leading-relaxed">{question.explanation}</p>
                      </div>

                      {!isCorrect && (
                        <div className="bg-destructive/10 border border-destructive/20 p-3 rounded-lg">
                          <p className="text-sm">
                            <strong>你的答案：</strong> {userAnswer || "未作答"}{" "}
                            <strong className="ml-4">正確答案：</strong>{" "}
                            {question.correctAnswer}
                          </p>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Card>

        {/* Action Buttons */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div className="flex-1">
                <p className="font-medium mb-1">發現題目有錯誤或想提供意見？</p>
                <p className="text-sm text-muted-foreground mb-3">
                  請聯絡客戶服務回報問題
                </p>
                <Button variant="outline" size="sm" onClick={handleReportError}>
                  回報問題
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button size="lg" onClick={onRetake}>
                重新考試
              </Button>
              <Button size="lg" variant="outline" onClick={onExit}>
                返回主頁
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
