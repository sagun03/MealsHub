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
  console.log(keyValue, action);
  const { keyAction } = useKey();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    keyAction(keyValue, action);
  }, [keyValue, action]);

  return (
    <div className="flex items-center flex-col">
      <label className="mr-2">Search:</label>
      <div className="bg-white flex">
        <input
          type="text"
          id="input-search"
          value={searchTerm}
          onChange={handleInputChange}
          className="border text-black p-2"
        />
        <div className="text-black flex w-8 flex w-full p-2">
          <div className="border w-full text-center text-black border-gray-800">{keyValue}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
