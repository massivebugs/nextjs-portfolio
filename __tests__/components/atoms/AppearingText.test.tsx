import { mockRequestAnimationFrame } from "@/__tests__/__mocks__/requestAnimationFrame";
import AppearingText from "@/app/components/atoms/AppearingText";
import { render, screen } from "@testing-library/react";
import { act } from "react";

test("does not animate when restore is false", () => {
  render(
    <p>
      <AppearingText
        text="This is a test string!"
        initialPos="left"
        restore={false}
      />
    </p>
  );

  const component = screen.getByRole("paragraph");
  expect(component).toHaveTextContent("");
});

test("renders an empty string at 0 duration", () => {
  const { mockFunc, cleanup } = mockRequestAnimationFrame(5);

  render(
    <p>
      <AppearingText
        text="This is a test string!"
        initialPos="left"
        restore={true}
      />
    </p>
  );

  expect(mockFunc).toHaveBeenCalledTimes(1);

  const component = screen.getByRole("paragraph");
  expect(component).toHaveTextContent("");

  cleanup();
});

test("renders two characters after 5 milliseconds has passed", () => {
  const { cleanup } = mockRequestAnimationFrame(5);

  render(
    <p>
      <AppearingText
        text="This is a test string!"
        initialPos="left"
        restore={true}
      />
    </p>
  );

  act(() => {
    jest.advanceTimersByTime(10);
  });

  expect(requestAnimationFrame).toHaveBeenCalledTimes(3);

  const component = screen.getByText("Th");
  expect(component).toBeInTheDocument();

  cleanup();
});
