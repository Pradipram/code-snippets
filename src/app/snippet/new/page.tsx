"use client";
import { createSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";

const styles = {
  labelStyle: "font-bold text-1xl text-center block",
  formField: "space-y-2",
};

const CreateSnippet = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [serverError, setServerError] = useState("");
  // const [serverActionData, action] = useActionState(createSnippet,{message: ""});

  const createSnippetAction = async () => {
    setError("");
    if (!title) {
      setError("Title is required");
      return;
    }
    if (!language) {
      setError("Language is required");
      return;
    }
    if (!description) {
      setError("Description is required");
      return;
    }
    if (!code) {
      setError("Code is required");
      return;
    }
    const serverMessage = await createSnippet(
      { message: "" },
      title,
      language,
      description,
      code
    );
    // console.log(serverMessage);
    if (serverMessage.message) {
      setServerError(serverMessage.message);
    }
  };

  return (
    <form action={createSnippetAction} className="space-y-4 max-w-lg mx-auto">
      {error && <p className="text-red-500">{error}</p>}
      {serverError && <p className="text-red-500">{serverError}</p>}
      <div className={styles.formField}>
        <Label className={styles.labelStyle}>Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          defaultValue={title}
          onChange={(e) => {
            setServerError("");
            setError("");
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className={styles.formField}>
        <Label className={styles.labelStyle}>Language</Label>
        <Input
          type="text"
          name="language"
          defaultValue={language}
          onChange={(e) => {
            setServerError("");
            setLanguage(e.target.value);
            setError("");
          }}
        />
      </div>
      <div className={styles.formField}>
        <Label className={styles.labelStyle}>Description</Label>
        <Textarea
          name="description"
          defaultValue={description}
          onChange={(e) => {
            setServerError("");
            setError("");
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className={styles.formField}>
        <Label className={styles.labelStyle}>Code</Label>
        {/* <Textarea name="code" id="code" /> */}
        <Editor
          height={"40vh"}
          defaultLanguage={language}
          defaultValue={code}
          onChange={(value) => {
            setServerError("");
            setCode(value || "");
            setError("");
          }}
          theme="vs-dark"
        />
      </div>
      <div className="flex justify-center ">
        <Button type="submit">New</Button>
      </div>
    </form>
  );
};

export default CreateSnippet;
