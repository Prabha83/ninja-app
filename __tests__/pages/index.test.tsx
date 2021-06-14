import React from "react";
import { render } from "@testing-library/react";
import Index from "../../pages/index";

describe("Index page", () => {
    test("should show the title", () => {
        const { getByText } = render(<Index />);

        // Assert
        expect(getByText(/Ninja app page/)).toBeDefined();
    });
});
