import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  
  // Print the header object
// console.log(header);

  // Check if logo is loaded
  const logo = header.getAllByTestId("logo");
  // console.log(logo);
  // console.log(logo[0]);
  expect(logo[0].src).toBe("http://localhost/dummy.png"); // Assuming "dummy.png" is the expected source
});


test("Online Status should be green on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );


  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.className).toBe("text-green-600");
});

test("Cart should have 0 items on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart-count");
  // console.log(cart.innerHTML);

  expect(cart.textContent).toBe("cart- 0");
});