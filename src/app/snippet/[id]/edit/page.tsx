import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";

const EditSnippetPage = async ({
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
  // console.log("snippet", snippet);

  if (!snippet) {
    return <h1>Snippet not found</h1>;
  }

  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default EditSnippetPage;
