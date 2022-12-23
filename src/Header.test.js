import {render,screen} from "@testing-library/react";
import Header from "./Header";


let header;
test("Header Test",() =>{
 render(<Header/>)
 header = screen.getByText(/Emoji Search/i);
 expect(header).toBeInTheDocument(); 
})