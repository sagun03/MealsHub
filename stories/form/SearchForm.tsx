// SearchForm.tsx
import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import useKey from "../../app/components/useKey";
import "../../app/globals.css";

interface SearchFormProps {
  keyValue: string;
  action: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ keyValue, action }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { keyAction } = useKey();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    keyAction(keyValue, action);
  }, [keyValue, action])

  return (
    <div className="grid gap-4 grid-cols-2 bg-red-900 items-center">
      <label className="mr-2">Search:</label>
      <input
        type="text"
        id="input-search"
        value={searchTerm}
        onChange={handleInputChange}
        className="border border-green-400 text-black p-2"
      />
    </div>
  );
};

export default SearchForm;
