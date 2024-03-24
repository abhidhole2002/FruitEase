import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div>
      <div className=" mt-2 w-1/2 mx-auto text-center p-6">
        <h1 className="text-3xl font-bold py-10">
          <span className="text-orange-600">Our</span> News
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.
        </p>
      </div>
      <div className="flex justify-center gap-20 py-10 ">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className="flex justify-center mb-20">
        <button className="py-2 px-4 rounded-3xl bg-orange-600 text-white font-semibold">
          More news
        </button>
      </div>
    </div>
  );
};

export default News;
