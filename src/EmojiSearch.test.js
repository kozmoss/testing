import {fireEvent, render , screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe("Search Input Testing",() => {
    let input;
    
    beforeEach(()=> {
        render(<App/>)
        input = screen.getByPlaceholderText("Search")
    })

    test("input Test", () => {
        const def = "Kiss";
        fireEvent.change(input,{target: {value: def}});
        expect(screen.getByText(def)).toBeInTheDocument();
    });
    
    test("Copy Testing",()=>{
        let grimacing = screen.getByText(/grimacing/i);
        let text = "Grimacing"
        userEvent.click(grimacing)
        expect(grimacing).toHaveTextContent(text);
    })



})