export type IFlashCard = {
  id: number;
  status: "Want To Learn" | "Noted" | "Learned";
  question: string;
  answer: string;
  createdAt: number;
  updatedAt: number;
};
