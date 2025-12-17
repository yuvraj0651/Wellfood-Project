import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Name from "./Name";

test("Now I am testing my Name component", () => {
    render(<Name />);
    expect(screen.getByText(/My Name is Yuvraj Ganshi/i))
        .toBeInTheDocument();
    // Input Field Present Or Not
    expect(screen.getByRole("textbox"))
        .toBeInTheDocument();
    // Testing Your Placeholder
    expect(screen.getByPlaceholderText(/this is Text Field/i))
        .toBeInTheDocument();
    // Input Field Label
    expect(screen.getByLabelText("Name"))
        .toBeInTheDocument();
    // Input Field Id
    expect(screen.getByTestId("name"))
        .toBeInTheDocument();
    // expect(screen.getByText(/error/i)).toBeInTheDocument();
    screen.debug();
    // expect(screen.getByRole("button", { name: "Show Error" }));

    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("a");
});

test("Get Sna[shot before retesting:", () => {
    let container = render(<Name />);
    expect(container).toMatchSnapshot();
})