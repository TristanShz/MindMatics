import { render, screen, waitFor } from "@testing-library/react"
import { Home } from "../pages"

test('presence of button easy difficulty', async () => {
    render(<Home />);
    await waitFor(()=> {
        expect(screen.getByText('EASY')).toBeInTheDocument()
    })    
})
