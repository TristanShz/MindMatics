import { useEffect, useState } from "react";

function difficultyLevel(level) {
    let levelTraduction = level === 1 ? 'EASY' : level === 2 ? 'NORMAL' : 'HARD';
    return levelTraduction
  }

const Table = (props) => {

    if (props.scores !== undefined) props.scores.sort((firstObject, secondObject) => (firstObject.score < secondObject.score ? 1 : -1)).map((score, index) => score.id = index + 1);

    const [results, setResults] = useState();

    useEffect(() => {
        if (props.playerSelected && props.difficultySelected) {
            setResults(props.scores.filter(score => (score.user.pseudo === props.playerSelected && score.difficulty === props.difficultySelected)));
        }
        else if (props.playerSelected) {
            setResults(props.scores.filter(score => score.user.pseudo === props.playerSelected))
        }
        else if (props.difficultySelected) {
            setResults(props.scores.filter((score) => difficultyLevel(score.difficulty) === props.difficultySelected))
        }
        else setResults(props.scores)

    }, [props.playerSelected, props.difficultySelected, props.scores])

    return (<>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full" data-testid="resultsTable">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Classement
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Pseudo
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Score
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Difficulty
                                    </th>
                                </tr>
                            </thead>
                            <tbody data-testid="tableBody">
                                {results && results.map((r) =>
                                    <tr className="bg-gray-100 border-b" key={r.id} data-testid="gridRow">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">{r.id}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left" data-testid={r.user.pseudo}>
                                            {r.user.pseudo}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                                            {r.score}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left" data-testid={r.difficulty === 'EASY' ? 'easyCell' : r.difficulty === 'NORMAL' ? 'normalCell' : 'hardCell'} >
                                            {difficultyLevel(r.difficulty)}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Table;