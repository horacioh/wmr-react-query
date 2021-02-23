import { html as $$html } from '/@npm/htm/preact';
import { render } from "/@npm/preact"
import { QueryClient, QueryClientProvider, useQuery } from "/@npm/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    $$html`<${QueryClientProvider} client=${queryClient}>
      <${Example} />
    <//>`
  )
}

function Example() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  )

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error.message

  return (
    $$html`<div>
      <h1>${data.name}</h1>
      <p>${data.description}</p>
      <strong>👀 ${data.subscribers_count}</strong>${" "}
      <strong>✨ ${data.stargazers_count}</strong>${" "}
      <strong>🍴 ${data.forks_count}</strong>
    </div>`
  )
}

render($$html`<${App} />`, document.body)

import { createHotContext as $w_h$ } from '/_wmr.js'; $w_h$(import.meta.url);