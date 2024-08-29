import { User } from "@/app/_redux/features/authApiSlice";
import ArticleItem from "../profile/ArticleItem";

interface ProfileArticlesProps {
  user: User | undefined;
}

export default function ProfileArticlesCreator({ user }: ProfileArticlesProps) {
  return (
    <div className="px-8 mt-10 sm:px-12 lg:px-20 lg1200:px-12 max-w-[1200px] mx-auto bg-white md900:mt-0 md900:py-8 lg1200:py-10 lg1200:mt-4 lg1200:rounded-2xl lg1200:shadow-lg ">
      <div className="flex w-full justify-between items-start flex-col sm500:items-center sm500:flex-row gap-3">
        <div className="flex justify-center items-center gap-2">
          <h4 className="text-2xl font-medium">
            Materiały <span className="h-1 w-1 bg-stone-300 rounded-full" />{" "}
          </h4>
          <span className="h-1 w-1 bg-stone-400 rounded-full" />
          <span className="font-normal text-xl text-slate-400">
            {user?.article_count}{" "}
          </span>
        </div>
      </div>
      <div className="py-4">
        {user?.article_count === 0 && (
          <div className="flex w-full justify-center items-center gap-6 flex-col text-center py-32">
            <p>Twórca nie utworzył żadnych materiałów</p>
          </div>
        )}
        <div className="grid grid-cols-1 sm550:grid-cols-2 md800:grid-cols-3 lg1100:grid-cols-4 gap-x-3 gap-y-6 pb-10">
          {user?.articles.map((article, i) => (
            <ArticleItem article={article} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}