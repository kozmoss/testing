import {render,screen,fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App"

describe("Testin Emoji",() => {
    beforeEach(()=>{
        render(<App/>)
    });

    test("Emoji List Render", () => {
        const items = screen.getAllByText(/Click to copy emoji/i);
        expect(items.length).toEqual(20);
    })


})

