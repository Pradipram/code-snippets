"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const [language, setLanguage] = useState(snippet.language);

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code, language);

  return (
    <div>
      <h1 className="font-bold text-2xl">{snippet.title}</h1>
      <div className="flex gap-2 my-2 align-between justify-between">
        <h1>Your Code Editor</h1>
        <div>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
      </div>
      <Editor
        height="40vh"
        defaultLanguage={snippet.language}
        defaultValue={code}
        theme="vs-dark"
        onChange={(value) => setCode(value || "")}
      />
      <form action={saveSnippetAction}>
        <Button type="submit" className="my-2">
          save
        </Button>
      </form>
    </div>
  );
};

export default EditSnippetForm;
