export interface Question {
  id: number;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  optionE?: string;
  correctAnswer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "放盤紙有沒有有效期限制？",
    optionA: "沒有",
    optionB: "除非是獨家代理，否則沒有有效期限制。",
    optionC: "有效期不可以超過1個月。",
    optionD: "有效期不可以超過3個月。",
    optionE: "有效期不可以超過6個月。",
    correctAnswer: "A",
    explanation: "放盤紙一般是指表格3 ：出售香港住宅物業用的地產代理協議。放盤紙沒有有效期限制，然而必須明確列明生效日期以及屆滿日。（首尾兩天包括在內）"
  },
  {
    id: 2,
    question: "根據表格4 ，代表買方的地產代理需要 I．為物業估值 II．與有興趣的賣方聯絡並商議 III．安排買家視察物業 IV．協助買方獲得按揭",
    optionA: "I, II",
    optionB: "I,III",
    optionC: "I, IV",
    optionD: "II,III",
    optionE: "II, IV",
    correctAnswer: "D",
    explanation: "根據表格4 ，代理須一 (a)為買方取得關於物業的資料； (b）因應買方的要求安排買方視察物業； (c)進行商議，並按買方的指示向物業的賣方提交所有要約 ；及 (d)協助買方與任何一項或多於一項物業的賣方訂立具約束力的買賣協議。 協助買方獲得按揭雖然是常見的生意手段，但並不是法例要求。"
  },
  {
    id: 3,
    question: "睇樓紙有沒有有效期限制？",
    optionA: "沒有",
    optionB: "除非是獨家代理，否則沒有有效期限制。",
    optionC: "有效期不可以超過1個月。",
    optionD: "有效期不可以超過3個月。",
    optionE: "有效期不可以超過6個月。",
    correctAnswer: "D",
    explanation: "睇樓紙一般是指表格4：購買香港住宅物業用的地產代理協議。睇樓紙沒有有效期限制，然而必須明確列明生效日期以及屆滿日。（首尾兩天包括在內）然而建議的有效期是不超過3個月。"
  },
  {
    id: 4,
    question: "根據表格3 ，代表賣方出售住宅物業的地產代理應該 I．為物業估值 II．與有興趣的買方聯絡並商議 III．親自視察物業 IV．協助買方獲得按揭",
    optionA: "II",
    optionB: "I, II, IV",
    optionC: "I,III, IV",
    optionD: "II, III, IV",
    optionE: "I, II, III, IV",
    correctAnswer: "A",
    explanation: "根據表格3 ，代理須一 (a)代賣方推銷物業； (b）為賣方取得關於物業的資料； (c)安排買方視察物業； (d)進行商議，並向賣方提交所有關於物業的要約；及 (e)協助賣方與買方訂立具約束力的買賣協議。"
  },
  {
    id: 5,
    question: "當地產代理遇上懷疑洗黑錢個案應該向那個機構舉報？",
    optionA: "警務處",
    optionB: "地產代理監管局",
    optionC: "廉政公署",
    optionD: "海關",
    optionE: "聯合財富情報組",
    correctAnswer: "E",
    explanation: "當地產代理遇上懷疑洗黑錢個案應該向聯合財富情報組舉報。"
  },
  {
    id: 6,
    question: "買賣雙方簽臨時買賣合約的時候，臨時買賣協議的中文版本上寫連兩部冷氣機，但英文版本只寫連冷氣機沒有寫兩部。如果這個情況下出現歧異，應該如何處理？",
    optionA: "根據物業轉易及財產條例，如果合約中英文版本有歧異，則以中文版本為準。",
    optionB: "根據物業轉易及財產條例，如果合約中英文版本有歧異，則以英文版本為準。",
    optionC: "根據地產代理條例，如果合約中英文版本有歧異，則以中文版本為準。",
    optionD: "根據地產代理條例，如果合約中英文版本有歧異，則以英文版本為準。",
    optionE: "目前沒有法律規定使用那個版本為準，必須由法庭處理。",
    correctAnswer: "E",
    explanation: "題目沒有提及買賣是否由地產代理促成，而臨時買賣協議與地產代理條例沒有必然關係，因此選項C 和D 是干擾選項。 而物業轉易及財產條例，也沒有說明如果協議的不同語文版本有差異應該如何處理。 因此實際上，這個情況不一定跟英文版本。如臨時買賣協議內同時備有英文版本及中文版本，最佳的作法是在協議內清楚說明如有抵觸或不一致之處時是以哪個版本為準。 如果該買賣由代理促成，則按照執業通告13-06 ，代理應該建議在臨時協議內列出該些物品，並須為此擬備一份書面清單。 如果沒有列明則沒有辦法解決，應該打官司。一般會以買賣雙方溝通的語言為準，如買賣雙方能同時操中文而不能操英文，則以中文為準。如買賣雙方同時操中英文則無從判斷。"
  },
  {
    id: 7,
    question: "余醫生嫁給了一名非香港永久性居民的中國藉的丈夫後在香港首次置業，買入一個住宅物業單位，並以聯權方式聯權擁有，他們的從價印花稅應該怎樣計算？",
    optionA: "按第2標準稅率計算",
    optionB: "按第1標準稅率計算",
    optionC: "分為余醫生及丈夫兩部份，余醫生按第2標準稅率計算，丈夫按第1標準稅率計算",
    optionD: "分為余醫生及丈夫兩部份，余醫生按第1標準稅率計算，丈夫按第2標準稅率計算",
    optionE: "不需要繳交印花稅",
    correctAnswer: "A",
    explanation: "由於該買賣是由多於一名香港永久性居民以分權擁有人或聯權擁有人方式共同購買，而他們在購買有關住宅物業時，各人均是代表自己行事及在香港沒有擁有任何其他住宅物業（及車位，如適用），因此第2標準稅率將適用。"
  },
  {
    id: 8,
    question: "代理收到臨時訂金支票後，什麼時候必須存入臨時訂金？",
    optionA: "臨時買賣合約簽訂後一個工作天內",
    optionB: "臨時買賣合約簽訂後兩個工作天內",
    optionC: "不遲於下一個工作天",
    optionD: "不遲於收到支票後兩個工作天",
    optionE: "不遲於收到支票後三個工作天",
    correctAnswer: "C",
    explanation: "根據《地產代理常規（一般責任及香港住宅物業）規例》第9條，地產代理須在收到該筆款項後，不遲於下一個工作天將款項存入有關帳戶。"
  },
  {
    id: 9,
    question: "根據《地產代理常規（一般責任及香港住宅物業）規例》，地產代理需要盡快向客戶以書面提供物業資料，那「盡快」的定義是？",
    optionA: "不遲於下一個工作天",
    optionB: "實際可行範圍內盡快",
    optionC: "協議簽署後1個工作天內",
    optionD: "協議簽署後2個工作天內",
    optionE: "協議簽署後3個工作天內",
    correctAnswer: "B",
    explanation: "根據《地產代理常規（一般責任及香港住宅物業）規例》第6條，地產代理在實際可行的範圍內，須盡快向有關客戶提供物業資料。"
  },
  {
    id: 10,
    question: "關於土地註冊處的產權負擔檢索，下列哪項陳述是正確的？",
    optionA: "產權負擔檢索可以顯示物業的所有權",
    optionB: "產權負擔檢索可以顯示物業的按揭",
    optionC: "產權負擔檢索可以顯示物業的租約",
    optionD: "以上全部正確",
    optionE: "只有B和C正確",
    correctAnswer: "E",
    explanation: "產權負擔檢索只顯示物業的按揭和租約等產權負擔，不能顯示所有權。所有權需要查閱土地登記冊。"
  }
];

export const getRandomQuestions = (count: number = 20): Question[] => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, questions.length));
};
