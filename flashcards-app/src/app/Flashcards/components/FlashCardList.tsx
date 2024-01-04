import React from "react";
import { Row, Col } from "antd";
import FlashCard from "./Flashcard";
import { IFlashCard } from "@/types/FlashCard";
import { changeStatus } from "../FlashcardService";

interface FlashCardListProps {
  flashcards: IFlashCard[];
  changeStatus: (id: number, status: string) => void;
  onRemove: (id: number) => void;
}

const FlashCardList: React.FC<FlashCardListProps> = ({
  flashcards,
  onRemove,
}) => {
  return (
    <div className="grid grid-cols-4 gap-5 items-center">
      {flashcards.map((flashcard) => (
        <Col key={flashcard.id}>
          <FlashCard
            flashcard={flashcard}
            changeStatus={changeStatus}
            onRemove={onRemove}
          />
        </Col>
      ))}
    </div>
  );
};

export default FlashCardList;
