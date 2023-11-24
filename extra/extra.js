import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { fetchGitHubUsername } from '../utils/fetchClosedPullRequests'
import Spinner from "../components/Spinner";

async function fetchStoredPullRequests(username) {
  const res = await fetch(`/api/getStoredPullRequests?username=${username}`)
  const data = await res.json()

  return data
}

export default function Dashboard() {
  const user = useUser()
  const [pullRequests, setPullRequests] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setIsLoading(true)
        try {
          const username = await fetchGitHubUsername(user.user.emailAddresses)
          const storedPRs = await fetchStoredPullRequests(username)
          setPullRequests(storedPRs.pullRequests || [])
          const response = await axios.get(
            `/api/closedPullRequests?username=${username}`
          )
          setPullRequests(response.data)
        } catch (error) {
          console.error('Error:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }
    fetchData()
  }, [])

  if (user) {
    return (
      <>
        <div className='pb-4 text-center'>
          <h3 className='pb-6 text-2xl'>Successfully Merged Pull Requests:</h3>
        </div>
        <div className='-50 text-center'>
          {isLoading && (
            <div className='flex h-[200px] items-center justify-center'>
              <Spinner />
            </div>
          )}

          {pullRequests.length > 0 && (
            <div className='py-4 text-center'>
              <table className='min-w-full bg-slate-900'>
                <thead>
                  <tr>
                    <th className='border-b border-gray-200 bg-gray-900 px-4 py-2 text-left text-xs font-medium uppercase leading-4 tracking-wider '>
                      Title
                    </th>
                    <th className='border-b border-gray-200 bg-gray-900 px-4 py-2 text-left text-xs font-medium uppercase leading-4 tracking-wider '>
                      Issue
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pullRequests.map((pr, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'
                      }
                    >
                      <td className='whitespace-no-wrap px-4 py-4 text-sm leading-5 '>
                        {pr.title}
                      </td>
                      <td className='whitespace-no-wrap px-4 py-4 text-sm leading-5 '>
                        {pr.issue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </>
    )
  }
}

export async function fetchGitHubUsername(email) {
  const url = `https://api.github.com/search/users?q=${email}+in:email`;
  const headers = {
    Authorization: process.env.GITHUB_TOKEN,
  };

  const response = await fetch(url, { headers });
  const data = await response.json();

  return data.items[0]?.login;
}

export async function fetchClosedPullRequests(username) {
  let url = `https://api.github.com/repos/nikohoffren/fork-commit-merge/pulls?state=closed&per_page=100`;
  const headers = {
    Authorization: process.env.GITHUB_TOKEN,
  };

  let allPullRequests = [];

  while (url) {
    const response = await fetch(url, { headers });
    const data = await response.json();
    allPullRequests = allPullRequests.concat(data);
    const linkHeader = response.headers.get("Link");
    const match = linkHeader?.match(/<([^>]+)>;\s*rel="next"/);
    url = match ? match[1] : null;
  }

  const filteredPullRequests = allPullRequests.filter(
    (pr) => pr.user.login === username
  );

  return filteredPullRequests.map((pr) => ({
    title: pr.title,
    issue: pr.body,
  }));
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { fetchGitHubUsername } from '../utils/fetchClosedPullRequests'
import Spinner from "../components/Spinner";

async function fetchStoredPullRequests(username) {
  const res = await fetch(`/api/getStoredPullRequests?username=${username}`)
  const data = await res.json()

  return data
}

export default function Dashboard() {
  const user = useUser()
  const [pullRequests, setPullRequests] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setIsLoading(true)
        try {
          const username = await fetchGitHubUsername(user.user.emailAddresses)
          const storedPRs = await fetchStoredPullRequests(username)
          setPullRequests(storedPRs.pullRequests || [])
          const response = await axios.get(
            `/api/closedPullRequests?username=${username}`
          )
          setPullRequests(response.data)
        } catch (error) {
          console.error('Error:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }
    fetchData()
  }, [])

  if (user) {
    return (
      <>
        <div className='pb-4 text-center'>
          <h3 className='pb-6 text-2xl'>Successfully Merged Pull Requests:</h3>
        </div>
        <div className='-50 text-center'>
          {isLoading && (
            <div className='flex h-[200px] items-center justify-center'>
              <Spinner />
            </div>
          )}

          {pullRequests.length > 0 && (
            <div className='py-4 text-center'>
              <table className='min-w-full bg-slate-900'>
                <thead>
                  <tr>
                    <th className='border-b border-gray-200 bg-gray-900 px-4 py-2 text-left text-xs font-medium uppercase leading-4 tracking-wider '>
                      Title
                    </th>
                    <th className='border-b border-gray-200 bg-gray-900 px-4 py-2 text-left text-xs font-medium uppercase leading-4 tracking-wider '>
                      Issue
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pullRequests.map((pr, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'
                      }
                    >
                      <td className='whitespace-no-wrap px-4 py-4 text-sm leading-5 '>
                        {pr.title}
                      </td>
                      <td className='whitespace-no-wrap px-4 py-4 text-sm leading-5 '>
                        {pr.issue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </>
    )
  }
}

export async function fetchGitHubUsername(email) {
  const url = `https://api.github.com/search/users?q=${email}+in:email`;
  const headers = {
    Authorization: process.env.GITHUB_TOKEN,
  };

  const response = await fetch(url, { headers });
  const data = await response.json();

  return data.items[0]?.login;
}

export async function fetchClosedPullRequests(username) {
  let url = `https://api.github.com/repos/nikohoffren/fork-commit-merge/pulls?state=closed&per_page=100`;
  const headers = {
    Authorization: process.env.GITHUB_TOKEN,
  };

  let allPullRequests = [];

  while (url) {
    const response = await fetch(url, { headers });
    const data = await response.json();
    allPullRequests = allPullRequests.concat(data);
    const linkHeader = response.headers.get("Link");
    const match = linkHeader?.match(/<([^>]+)>;\s*rel="next"/);
    url = match ? match[1] : null;
  }

  const filteredPullRequests = allPullRequests.filter(
    (pr) => pr.user.login === username
  );

  return filteredPullRequests.map((pr) => ({
    title: pr.title,
    issue: pr.body,
  }));
}
