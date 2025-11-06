import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft } from "lucide-react";

interface TopicSelectionProps {
  onSelectTopic: (topicNumber: string) => void;
  onBack: () => void;
}

const topics = [
  { number: "1", name: "香港地產代理業簡介" },
  { number: "2", name: "適用於地產代理業務的法律" },
  { number: "3", name: "倫理守則" },
  { number: "4", name: "客戶資金處理規則" },
  { number: "5", name: "利益衝突及相關交易" },
  { number: "6", name: "廣告限制" },
  { number: "7", name: "文件及記錄保存" },
  { number: "8", name: "其他規例及要求" },
];

export const TopicSelection = ({ onSelectTopic, onBack }: TopicSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-6 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button
          variant="outline"
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回主頁
        </Button>

        <Card className="p-6">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">練習模式</h1>
            <p className="text-lg text-muted-foreground">選擇一個主題開始練習</p>
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
                    <h3 className="font-semibold text-sm leading-tight">{topic.name}</h3>
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
