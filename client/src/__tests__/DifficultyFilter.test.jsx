import { fireEvent, screen, waitFor, within } from "@testing-library/react";
import { Home } from "../pages";
import { render } from "../utils/test-utils";

test("presence of button easy difficulty", async () => {
  render(<Home />);
  await waitFor(() => {
    expect(screen.getByRole("button", { name: "EASY" })).toBeInTheDocument();
  });
});

test("presence of results table", async () => {
  render(<Home />);
  const results = screen.getByTestId("resultsTable");
  expect(results).toBeInTheDocument();
});

test("verify table head", async () => {
  render(<Home />);
  const results = screen.getByTestId("resultsTable");
  within(results.getAttributeNames("Classement"));
  within(results.getAttributeNames("Pseudo"));
  within(results.getAttributeNames("Score"));
  within(results.getAttributeNames("Difficulty"));
});

test('verify the number of results and number of each difficulty', async () => {
    render(<Home />);
    const allResults = () => screen.findAllByTestId('gridRow');
    const numberOfResults = await allResults();
    expect(numberOfResults).toHaveLength(8);

    const findEasyResults = () => screen.findAllByTestId('easyCell');
    const easyResults = await findEasyResults();
    expect(easyResults).toHaveLength(1)

    const findNormalResults = () => screen.findAllByTestId('normalCell');
    const normalResults = await findNormalResults();
    expect(normalResults).toHaveLength(3);

    const findHardResults = () => screen.findAllByTestId('hardCell');
    const hardResults = await findHardResults();
    expect(hardResults).toHaveLength(4);
})

test('display of easy difficulty results when click on button easy',
    async () => {
        render(<Home />);

        const allResults = () => screen.findAllByTestId('gridRow');
        const numberOfResults = await allResults();
        expect(numberOfResults).toHaveLength(8);

        const findEasyButton = () => screen.findByRole('button', { name: 'EASY' });
        const easyButton = await findEasyButton();
        fireEvent.click(easyButton);

        const allEasyResults = () => screen.findAllByTestId('gridRow');
        const numberOfEasyResults = await allEasyResults();

        const findEasyResults = () => screen.findAllByTestId('easyCell');
        const easyResults = await findEasyResults();
        expect(easyResults).toHaveLength(numberOfEasyResults.length);
    }
)

test('display of normal difficulty results when click on button normal',
    async () => {
        render(<Home />);
        const allResults = () => screen.findAllByTestId('gridRow');
        const numberOfResults = await allResults();
        expect(numberOfResults).toHaveLength(8);

        const findNormalButton = () => screen.findByRole('button', { name: 'NORMAL' });
        const normalButton = await findNormalButton();
        fireEvent.click(normalButton);

        const allNormalResults = () => screen.findAllByTestId('gridRow');
        const numberOfNormalResults = await allNormalResults();

        const findNormalResults = () => screen.findAllByTestId('normalCell');
        const normalResults = await findNormalResults();
        expect(normalResults).toHaveLength(numberOfNormalResults.length);
    }
)

test('display of hard difficulty results when click on button hard',
    async () => {
        render(<Home />);
        const allResults = () => screen.findAllByTestId('gridRow');
        const numberOfResults = await allResults();
        expect(numberOfResults).toHaveLength(8);

        const findHardButton = () => screen.findByRole('button', { name: 'HARD' });
        const hardButton = await findHardButton();
        fireEvent.click(hardButton);

        const allHardResults = () => screen.findAllByTestId('gridRow');
        const numberOfHardResults = await allHardResults();

        const findHardResults = () => screen.findAllByTestId('hardCell');
        const hardResults = await findHardResults();
        expect(hardResults).toHaveLength(numberOfHardResults.length);
    }
)

test('display of all difficulty results after click on hard button then on all button',
    async () => {
        render(<Home />);
        const allResults = () => screen.findAllByTestId('gridRow');
        const numberOfResults = await allResults();
        expect(numberOfResults).toHaveLength(8);

        const findHardButton = () => screen.findByRole('button', { name: 'HARD' });
        const hardButton = await findHardButton();
        fireEvent.click(hardButton);

        const allHardResults = () => screen.findAllByTestId('gridRow');
        const numberOfHardResults = await allHardResults();

        const findHardResults = () => screen.findAllByTestId('hardCell');
        const hardResults = await findHardResults();
        expect(hardResults).toHaveLength(numberOfHardResults.length);

        const findAllButton = () => screen.findByRole('button', { name: 'ALL' });
        const allButton = await findAllButton();
        fireEvent.click(allButton);

        const resultsCount = screen.getAllByTestId('gridRow');
        expect(resultsCount).toHaveLength(8);
    }
)

test('display scores of player 1 when click on button See my results',
    async () => {
        render(<Home />);

        const allResults = () => screen.findAllByTestId('gridRow');
        const numberOfResults = await allResults();
        expect(numberOfResults).toHaveLength(8);

        const getPlayerResultsButton = () => screen.findByRole('button', { name: 'See my results' });
        const playerResultButton = await getPlayerResultsButton();
        fireEvent.click(playerResultButton);

        const getResultsCount = () => screen.findAllByTestId('gridRow');
        const resultsCount = await getResultsCount();
        expect(resultsCount).toHaveLength(5);

        // const getPlayerResults = () => screen.findAllByTestId('user-test');
        // const playerResults = await getPlayerResults();
        // expect(playerResults).toHaveLength(resultsCount.length);
    }
)
