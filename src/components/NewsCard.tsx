import { Card } from "./ui/card";

export default function NewsCard(props: { newsList: NewsItem[] }) {
  return (
    <div className="space-y-5 mt-5">
      {props.newsList.map((news) => (
        <Card
          className="relative w-full md:w-1/2 bg-white shadow-lg p-6"
          key={`newsId_${news.id}`}
        >
          <div className="flex justify-between items-center">
            <ul>
              <li>{news.title}</li>
              <li>{news.description}</li>
              <li>{news.content}</li>
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
}
