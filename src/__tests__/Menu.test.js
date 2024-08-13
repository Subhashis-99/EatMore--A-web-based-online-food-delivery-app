import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Header from "../components/Header.js";
import { Provider } from "react-redux";
import store from "../utils/store.js"
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../mocks/Mock_data.js";
import RestaurantMenu from "../components/RestaurantMenu.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("add-btn");

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[2]);

  const cart = body.getByTestId("cart-count");

  expect(cart.textContent).toBe("cart- 2");
});