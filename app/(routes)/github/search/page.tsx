import React from "react";
import CardGrid from "../components/CardGrid";
import Card from "../components/Card";

async function fetchRepo(slug: string) {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${slug}+user:ShinnTNT`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  return response.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { q: searchValue } = searchParams;

  const { items } = await fetchRepo(searchValue);

  const repo = items ? items[0] : null;

  return (
    <main className="w-full">
      <CardGrid>
        {repo ? (
          <Card
            key={repo.id}
            name={repo.name}
            description={repo.description}
            repoType={repo.visibility}
            star={repo.stargazers_count}
            tech={repo.language}
            watcher={repo.watchers}
          />
        ) : (
          <div className="w-[200px] font-bold text-lg text-gray-500">
            No Repository Found!
          </div>
        )}
      </CardGrid>
    </main>
  );
}
