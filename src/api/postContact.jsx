async function postContact(name, email, message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  // No need to write something like return await response.json() because TanStack Query
  // handles the Promise chaining.
  // https://tanstack.com/query/latest/docs/framework/react/guides/query-functions
  return response.json();
}

export default postContact;
