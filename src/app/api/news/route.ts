import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

const newsData: NewsItem[] = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  title: `${index + 1}번째 뉴스`,
  description: faker.lorem.paragraph(),
  content: faker.lorem.lines(5),
  url: faker.internet.url(),
}));

export async function GET() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 3000);
  });
  return NextResponse.json(newsData);
}
