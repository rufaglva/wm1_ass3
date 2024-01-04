import React, { useState } from "react";
import { Card, Button, message } from "antd";
import { IFlashCard } from "@/types/FlashCard";
import { FiEdit2, FiRotateCcw } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { CgNotes } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

interface FlashCardProps {
  flashcard: IFlashCard;
  changeStatus: (id: number, status: string) => void;

  onRemove: (id: number) => void;
}

const FlashCard: React.FC<FlashCardProps> = ({
  flashcard,
  changeStatus,
  onRemove,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<
    "Want To Learn" | "Learned" | "Noted"
  >(flashcard.status);

  const navigate = useNavigate();

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleLearnedStatus = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setCurrentStatus(
      currentStatus == "Want To Learn" ? "Learned" : "Want To Learn"
    );
    changeStatus(
      flashcard.id,
      currentStatus == "Want To Learn" ? "Learned" : "Want To Learn"
    );
    message.success(
      currentStatus == "Want To Learn"
        ? "Marked as Learned"
        : "Marked as I Want To Learn"
    );
  };

  const handleRemove = () => {
    onRemove(flashcard.id);
    message.success("Flashcard removed");
  };

  return (
    <motion.div
      className="mb-4"
      whileHover={{ scale: 1.05 }}
      onClick={handleFlip}
      animate={{
        rotateY: flipped ? 180 : 0,
      }}
    >
      <Card hoverable>
        {flipped ? (
          <div style={{ transform: "rotateY(180deg)" }}>
            <p>Answer: {flashcard.answer}</p>
            <Button
              type="default"
              className="!mt-5"
              onClick={handleLearnedStatus}
            >
              {currentStatus == "Want To Learn"
                ? "Mark as Learned"
                : "Mark as I Want To Learn"}
            </Button>
          </div>
        ) : (
          <div>
            <p>Status: {currentStatus}</p>
            <p>Created Date: {flashcard.createdAt}</p>
            <p>Question: {flashcard.question}</p>
          </div>
        )}
        <div className="flex justify-between my-5">
          <Button
            onClick={() => navigate("/flashcards/create/" + flashcard.id)}
            icon={<FiEdit2 />}
          />
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentStatus("Noted");
              changeStatus(flashcard.id, "Noted");
              message.success("Noted");
            }}
            icon={<CgNotes />}
          />
          <Button icon={<MdDeleteOutline />} onClick={handleRemove} />
        </div>
      </Card>
    </motion.div>
  );
};

export default FlashCard;
