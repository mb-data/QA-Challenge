import {render, screen} from "@testing-library/react";

import Input from "../Input";
import React from "react";

describe("Input COMPONENT",()=>{
    it("should render correctly the INPUT components",()=>{
        render(
        <React.StrictMode>
        <Input label="All files" placeholder="All files" onChange={() => console.log('teste')}/>
        </React.StrictMode>)

        expect(screen.getByText("All files"))
    })
})