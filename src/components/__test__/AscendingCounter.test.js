import AscendingCounter from "../AscendingCounter.vue";
import { fireEvent, render, screen } from "@testing-library/vue";

describe("ascending counter", () => {
  test("counts from zero, up", async () => {
    expect(AscendingCounter).toBeTruthy();

    // The `render` method renders the component into the document.
    // It also binds to `screen` all the available queries to interact with
    // the component.
    render(AscendingCounter);

    expect(screen.queryByText("0")).toBeTruthy();

    // getByText returns the first matching node for the provided text
    // or throws an error.
    const button = screen.getByText("0");

    await fireEvent.click(button);
    await fireEvent.click(button);

    expect(screen.queryByText("2")).toBeTruthy();
  });
});
