"use client";

import GithubRepos from "@/components/githubRepos";

export default function Portfolio() {
  return (
    <>
      <h1 className="text-secondary text-3xl font-bold">
        Page generated using GitHub REST API
      </h1>
      <GithubRepos username="KuiHua-JAC" />
    </>
  );
}
