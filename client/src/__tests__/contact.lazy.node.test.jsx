import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// For more info on vi: https://vitest.dev/guide/mocking
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { render } from "@testing-library/react";
import { Route } from "../routes/contact.lazy.jsx";

const queryClient = new QueryClient();

vi.stubEnv("VITE_API_URL", "http://localhost:3000");
// https://github.com/IanVS/vitest-fetch-mock?tab=readme-ov-file#usage
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

// TODO: Fix this test to accommodate form actions
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
  expect(fetchMocker).toHaveBeenCalledWith(
    "http://localhost:3000/api/contact",
    {
      body: JSON.stringify(testData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );
});
