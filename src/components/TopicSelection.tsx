import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TopicSelectionProps {
  onSelectTopic: (topicNumber: string) => void;
  onBack: () => void;
}

const topics = [
  { number: "1", nameKey: "topic8" },
  { number: "2", nameKey: "topic9" },
  { number: "3", nameKey: "topic10" },
  { number: "4", nameKey: "topic11" },
  { number: "5", nameKey: "topic12" },
  { number: "6", nameKey: "topic13" },
  { number: "7", nameKey: "topic14" },
  { number: "8", nameKey: "topic15" },
];

export const TopicSelection = ({ onSelectTopic, onBack }: TopicSelectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-6 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button
          variant="outline"
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('backToHome')}
        </Button>

        <Card className="p-6">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{t('practiceMode')}</h1>
            <p className="text-lg text-muted-foreground">{t('selectTopic')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topics.map((topic) => (
              <Card
                key={topic.number}
                className="p-4 cursor-pointer hover:bg-primary/5 hover:border-primary transition-all active:scale-[0.98]"
                onClick={() => onSelectTopic(topic.number)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{topic.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm leading-tight">{t(topic.nameKey)}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};