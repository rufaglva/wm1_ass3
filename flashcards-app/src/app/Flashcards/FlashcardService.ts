import axios from "axios";
import { IFlashCard } from "@/types/FlashCard";

const API_BASE_URL = "http://localhost:3001/flashcards";

export const getFlashcards = async (): Promise<IFlashCard[]> => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching flashcards:", error);
    throw error;
  }
};

export const changeStatus = async (
  id: number,
  status: string
): Promise<void> => {
  try {
    await axios.patch(`${API_BASE_URL}/${id}`, { status });
  } catch (error) {
    console.error("Error marking as learned:", error);
    throw error;
  }
};

export const removeFlashcard = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error removing flashcard:", error);
    throw error;
  }
};
