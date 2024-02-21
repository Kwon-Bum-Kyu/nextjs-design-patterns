import { faker } from "@faker-js/faker";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  content: string;
  url: string;
}
const newsData: NewsItem[] = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  title: `${index + 1}번째 뉴스`,
  description: faker.lorem.paragraph(),
  content: faker.lorem.lines(5),
  url: faker.internet.url(),
}));

export async function GET() {
  return Response.json(newsData);
}
