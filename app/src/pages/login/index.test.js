// import { screen } from "@testing-library/react";
import { getPage } from 'next-page-tester';
import { screen } from "@testing-library/react";

describe("Testing the login", _ => {
    it("should items be present in the document", async _ => {
        const { render } = await getPage({
            route: '/login'
        });
        render();      

        expect(screen.getByPlaceholderText("Nome do usuário")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
        expect(screen.getByText("Acessar")).toBeInTheDocument();
    });
});