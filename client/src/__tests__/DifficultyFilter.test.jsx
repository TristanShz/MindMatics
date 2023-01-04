import { fireEvent, screen, waitFor, within } from "@testing-library/react"
import { Home } from "../pages"
import { render } from "../utils/test-utils";

// const user = {
//     pseudo: "player 1",
//   };
  
//   const scores = [
//     {
//       user: {
//         pseudo: "player 1",
//       },
//       score: 24,
//       difficulty: 'NORMAL',
//     },
//     {
//       user: {
//         pseudo: "player 2",
//       },
//       score: 45,
//       difficulty: 'HARD',
//     },
//     {
//       user: {
//         pseudo: "player 1",
//       },
//       score: 5,
//       difficulty: 'EASY',
//     },
//     {
//       user: {
//         pseudo: "player 1",
//       },
//       score: 67,
//       difficulty: 'NORMAL',
//     },
//     {
//       user: {
//         pseudo: "player 1",
//       },
//       score: 78,
//       difficulty: 'NORMAL',
//     },
//     {
//       user: {
//         pseudo: "player 2",
//       },
//       score: 2,
//       difficulty: 'HARD',
//     },
//     {
//       user: {
//         pseudo: "player 1",
//       },
//       score: 167,
//       difficulty: 'HARD',
//     },
//     {
//       user: {
//         pseudo: "player 3",
//       },
//       score: 90,
//       difficulty: 'HARD',
//     },
//   ];

test('presence of button easy difficulty', async () => {
    render(<Home />);
    await waitFor(() => {
        expect(screen.getByRole('button', { name: 'EASY' })).toBeInTheDocument()
    })
})

test('presence of results table', async () => {
    render(<Home />);
    const results = screen.getByTestId('resultsTable');
    expect(results).toBeInTheDocument()
})

test('verify table head', async () => {
    render(<Home />);
    const results = screen.getByTestId('resultsTable');
    within(results.getAttributeNames('Classement'));
    within(results.getAttributeNames('Pseudo'));
    within(results.getAttributeNames('Score'));
    within(results.getAttributeNames('Difficulty'));
})

test('count of results', async () => {
    render(<Home />);
    expect(screen.getAllByTestId('gridRow').length).toBe(8);
})

test('display of easy difficulty results when click on button easy',
    async () => {
        render(<Home />);
        const easyButton = screen.getByRole('button', { name: 'EASY' });
        fireEvent.click(easyButton);
        const resultsCount = screen.getAllByTestId('gridRow').length;
        const easyResults = screen.getAllByTestId('easyCell');
        expect(easyResults).toHaveLength(resultsCount);
    }
)

test('display of normal difficulty results when click on button normal',
    async () => {
        render(<Home />);
        const normalButton = screen.getByRole('button', { name: 'NORMAL' });
        fireEvent.click(normalButton);
        const resultsCount = screen.getAllByTestId('gridRow').length;
        const normalResults = screen.getAllByTestId('normalCell');
        expect(normalResults).toHaveLength(resultsCount);
    }
)

test('display of hard difficulty results when click on button hard',
    async () => {
        render(<Home />);
        const hardButton = screen.getByRole('button', { name: 'HARD' });
        fireEvent.click(hardButton);
        const resultsCount = screen.getAllByTestId('gridRow').length;
        const hardResults = screen.getAllByTestId('hardCell');
        expect(hardResults).toHaveLength(resultsCount);
    }
)

test('display of all difficulty results when click on button all',
    async () => {
        render(<Home />);
        const hardButton = screen.getByRole('button', { name: 'HARD' });
        const allButton = screen.getByRole('button', { name: 'ALL' });
        fireEvent.click(hardButton);
        const hardResults = screen.getAllByTestId('hardCell');
        expect(hardResults).toHaveLength(4);
        fireEvent.click(allButton);
        const resultsCount = screen.getAllByTestId('gridRow');
        expect(resultsCount).toHaveLength(8);
    }
)

test('display scores of player 1 when click on button Voir mes résultats',
    async () => {
        render(<Home />);
        const playerResultsButton = screen.getByRole('button', { name: 'Voir mes résultats' });
        fireEvent.click(playerResultsButton);
        const resultsCount = screen.getAllByTestId('gridRow').length;
        const playerResults = screen.getAllByTestId('player 1');
        expect(playerResults).toHaveLength(resultsCount);
    }
)