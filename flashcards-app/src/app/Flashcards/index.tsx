// index.tsx

import React, { useEffect, useState } from "react";
import { Button, Select, message } from "antd";
import useFetch from "@/hooks/useFetch";
import FlashCardList from "./components/FlashCardList";
import * as FlashCardService from "./FlashcardService";
import { IFlashCard } from "@/types/FlashCard";
import { Link } from "react-router-dom";
import Search from "antd/es/input/Search";

const Index: React.FC = () => {
  const [searchValue, setSeearchValue] = useState<string>("");
  const [sortCriteria, setSortCriteria] = useState<string>("asc");
  const [filterCriteria, setFilterCriteria] = useState("");
  const { data, loading, error, refetch } = useFetch<IFlashCard[]>(
    `http://localhost:3001/flashcards?question_like=${searchValue}&_sort=updatedAt&_order=${sortCriteria}&status_like=${filterCriteria}`
  );

  const handleChangeStatus = async (id: number, status: string) => {
    await FlashCardService.changeStatus(id, status);
    refetch();
  };

  const handleRemove = async (id: number) => {
    await FlashCardService.removeFlashcard(id);
    refetch();
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-4">
        <Link to="/flashcards/create" className="mr-4">
          <Button type="default">Create Card</Button>
        </Link>
        <Search
          placeholder="Searzaych by question or answer"
          onChange={(e) => setSeearchValue(e.target.value)}
          className="mr-4"
        />
        <Select
          placeholder="Sort By"
          style={{ width: 120 }}
          onChange={(e) => setSortCriteria(e)}
          className="mr-4"
          defaultValue={"asc"}
        >
          <Select.Option value="asc">Ascending</Select.Option>
          <Select.Option value="desc">Descending</Select.Option>
        </Select>
        <Select
          placeholder="Filter By Status"
          style={{ width: 150 }}
          onChange={(e) => setFilterCriteria(e)}
          defaultValue={""}
        >
          <Select.Option value="">All</Select.Option>
          <Select.Option value="Want To Learn">Want to Learn</Select.Option>
          <Select.Option value="Noted">Noted</Select.Option>
          <Select.Option value="Learned">Learned</Select.Option>
        </Select>
      </div>
      {!loading && (
        <FlashCardList
          flashcards={data!}
          changeStatus={handleChangeStatus}
          onRemove={handleRemove}
        />
      )}
    </div>
  );
};

export default Index;
