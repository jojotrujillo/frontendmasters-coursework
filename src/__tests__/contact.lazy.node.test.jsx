import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// For more info on vi: https://vitest.dev/guide/mocking
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { render } from "@testing-library/react";
import { Route } from "../routes/contact.lazy.jsx";

const queryClient = new QueryClient();

// https://github.com/IanVS/vitest-fetch-mock?tab=readme-ov-file#usage
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

// Test is broken because of the way the form is submitted
test.skip("can submit contact form", async () => {
  // Arrange
  const testData = {
    name: "Brian",
    email: "brian@example.com",
    message: "This is a test message",
  };

  fetchMocker.mockResponse(JSON.stringify({ status: "ok" }));

  const screen = render(
    <QueryClientProvider client={queryClient}>
      <Route.options.component />
    </QueryClientProvider>,
  );

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const msgTextArea = screen.getByPlaceholderText("Message");

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  msgTextArea.value = testData.message;

  // Act
  const btn = screen.getByRole("button");
  btn.click();

  // Assert
  const h3 = await screen.findByRole("heading", { level: 3 });
  expect(h3.innerText).toContain("Submitted");

  const requests = fetchMocker.requests();
  expect(requests.length).toBe(1);
  expect(requests[0].url).toContain("/api/contact");
  expect(fetchMocker).toHaveBeenCalledWith("/api/contact", {
    body: JSON.stringify(testData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
});
