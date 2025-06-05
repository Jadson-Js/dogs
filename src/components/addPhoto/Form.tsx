"use client";

import React from "react";
import { Button } from "../ui/Button";
import { InputText } from "../ui/InputText";
import Image from "next/image";

export function Form() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col gap-12 md:flex-row">
      <form className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-600">
            Name
          </label>
          <InputText id="name" name="name" className="text-gray-700" />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="weight" className="text-gray-600">
            Weight
          </label>
          <InputText
            id="weight"
            type="number"
            name="weight"
            className="text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="age" className="text-gray-600">
            Age
          </label>
          <InputText
            id="age"
            type="number"
            name="age"
            className="text-gray-700"
          />
        </div>
        <input
          type="file"
          name="img"
          id="img"
          className="border rounded w-57 p-2 text-center cursor-pointer"
          onChange={handleFileChange}
        />
        <Button text="Send" className="w-50 text-lg mb-4" />
      </form>

      {previewUrl && (
        <Image
          src={previewUrl}
          alt="Image preview"
          width={400}
          height={200}
          className="self-center rounded"
        />
      )}
    </div>
  );
}
