import { render, waitFor, fireEvent } from "@testing-library/react";
import { Body } from "../components/Body.js";
import { Provider } from "react-redux";
import store from "../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../mocks/Mock_data.js";
import "@testing-library/jest-dom";

// mocking the fetch func
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

// test-case
test("Search results on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(Body);

  const searchBtn = body.getByTestId("search-btn");
  console.log(searchBtn);
});

// test-case
test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(12);
  expect(shimmer).toBeInTheDocument();

  console.log(shimmer);
});

// Test case: Restaurants should load on Homepage
test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("res-list")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(8);
});

// test-case
test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });

  const inputt = body.getByTestId("search-input");

  fireEvent.change(inputt, {
    target: {
      value: "Burger",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(1);
});
