// CreateFlashCard.tsx

import React, { useEffect, useState } from "react";
import { Button, Input, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useFetch from "@/hooks/useFetch";
import { IFlashCard } from "@/types/FlashCard";

const CreateFlashCard: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch<IFlashCard>(
    "http://localhost:3001/flashcards/" + id
  );
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    setQuestion(data?.question ?? "");
    setAnswer(data?.answer ?? "");
  }, [id, data]);

  const onSubmit = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const date = new Date().getTime();

      const cardData = {
        question,
        answer,
        createdAt: date,
        updatedAt: date,
        status: "Want To Learn",
      };

      const response = await fetch("http://localhost:3001/flashcards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        toast("Card Created");
      }
      navigate("/flashcards");
    } catch (e: any) {
      console.error(e);
      toast.error(e.message ?? e.data.message);
    }
  };

  const onUpdate = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const date = new Date().getTime();

      const cardData = {
        question,
        answer,
        createdAt: data?.createdAt,
        updatedAt: date,
        status: data?.status,
      };

      const response = await fetch("http://localhost:3001/flashcards/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        toast("Card Updated");
        navigate("/flashcards");
      }
    } catch (e: any) {
      console.error(e);
      toast.error(e.message ?? e.data.message);
    }
  };

  if (!!id && loading) return <div>Laoding...</div>;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Create FlashCard</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Question
        </label>
        <Input
          placeholder="Enter the question"
          value={question}
          onChange={handleQuestionChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Answer
        </label>
        <Input
          placeholder="Enter the answer"
          value={answer}
          onChange={handleAnswerChange}
        />
      </div>
      <div className="mb-4">
        <Input.Group compact>
          <Button
            type="default"
            onClick={id ? onUpdate : onSubmit}
            style={{ width: "20%" }}
          >
            Create
          </Button>
        </Input.Group>
      </div>
    </div>
  );
};

export default CreateFlashCard;
