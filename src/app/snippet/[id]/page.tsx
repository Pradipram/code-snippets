import { deleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const SnippetDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  const delteSnippetAction = deleteSnippet.bind(null, id);

  return (
    <div className="flex justify-between items-center flex-col  rounded">
      <div>
        <h1 className="font-bold text-2xl pt-2">{snippet.title}</h1>
        <div className="gap-2 flex items-center py-2">
          <h1 className="bg-gray-300 rounded-2xl px-2">{snippet.language}</h1>
          <span className="bg-gray-300 rounded-2xl px-2">
            {snippet.updatedAt.toLocaleDateString()}
          </span>
        </div>
        <p className="m-2">{snippet.description}</p>
      </div>
      <pre className="bg-gray-200 p-4 rounded-md min-w-100">{snippet.code}</pre>
      <div className="py-2 flex gap-2">
        <Link href={`/snippet/${snippet.id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <Button variant={"destructive"} onClick={delteSnippetAction}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SnippetDetailPage;

export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();
  return snippets.map((snippet) => {
    return { id: snippet.id.toString() };
  });
};
