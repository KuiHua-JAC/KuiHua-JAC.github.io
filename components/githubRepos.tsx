import { request } from "@octokit/request";
import { OctokitResponse } from "@octokit/types";
import { useEffect, useState } from "react";

export default function GithubRepos({ username }: { username: string }) {
  const [repos, setRepos] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await request("GET /users/{username}/repos", {
          username: `${username}`,
          type: "owner",
        });
        console.log(response);
        setRepos(response.data); // Assuming the response has a `data` property
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    }

    fetchData();
  }, [username]);

  return <></>; // Add your component rendering logic here
}
