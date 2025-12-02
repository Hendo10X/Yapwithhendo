import type {
  MarbleAuthorListResponse,
  MarbleCategoryListResponse,
  MarblePostResponse,
  MarblePostListResponse,
  MarbleTagListResponse,
} from "@/types/marble";

const url = process.env.MARBLE_API_URL;
const key = process.env.MARBLE_WORKSPACE_KEY;

export async function getPosts() {
  try {
    const raw = await fetch(`${url}/${key}/posts`);
    const data: MarblePostListResponse = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTags() {
  try {
    const raw = await fetch(`${url}/${key}/tags`);
    const data: MarbleTagListResponse = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSinglePost(slug: string) {
  try {
    const raw = await fetch(`${url}/${key}/posts/${slug}`);
    const data: MarblePostResponse = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories() {
  try {
    const raw = await fetch(`${url}/${key}/categories`);
    const data: MarbleCategoryListResponse = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthors() {
  try {
    const raw = await fetch(`${url}/${key}/authors`);
    const data: MarbleAuthorListResponse = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
