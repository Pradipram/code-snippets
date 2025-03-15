"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const saveSnippet = async (
  id: number,
  code: string,
  language: string
) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
      language,
    },
  });
  revalidatePath(`/snippet/${id}`);
  redirect(`/snippet/${id}`);
};

export const createSnippet = async (
  prevState: { message: string },
  title: string,
  language: string,
  description: string,
  code: string
) => {
  try {
    await prisma.snippet.create({
      data: {
        title,
        language,
        description,
        code,
      },
    });
    revalidatePath("/");
    // throw Error("Oops something went wrong");
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { message: e.message };
    } else {
      return { message: "Some internal server error" };
    }
  }

  redirect("/");
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  redirect("/");
};
