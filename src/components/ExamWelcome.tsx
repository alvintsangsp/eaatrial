import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, FileText, CheckCircle2, AlertCircle } from "lucide-react";

interface ExamWelcomeProps {
  onStart: () => void;
}

export const ExamWelcome = ({ onStart }: ExamWelcomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 shadow-xl">
        <div className="text-center space-y-6">
          <div className="inline-block p-4 bg-primary/10 rounded-full">
            <FileText className="w-12 h-12 text-primary" />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-2">EAA 模擬考試</h1>
            <p className="text-xl text-muted-foreground">地產代理資格考試練習平台</p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 space-y-4 text-left">
            <h2 className="text-lg font-semibold mb-4">考試須知：</h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">題目數量</p>
                  <p className="text-sm text-muted-foreground">20條隨機選擇的題目</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">考試時間</p>
                  <p className="text-sm text-muted-foreground">20分鐘倒數計時</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">題目格式</p>
                  <p className="text-sm text-muted-foreground">多項選擇題（4-5個選項）</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">考試功能</p>
                  <p className="text-sm text-muted-foreground">可在提交前檢閱及修改答案</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <p className="text-sm text-accent-foreground">
              <strong>合格標準：</strong> 答對60%或以上（12題或以上）
            </p>
          </div>

          <Button 
            onClick={onStart}
            size="lg"
            className="w-full text-lg py-6"
          >
            開始考試
          </Button>
        </div>
      </Card>
    </div>
  );
};
