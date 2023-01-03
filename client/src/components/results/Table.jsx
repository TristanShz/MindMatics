import { useEffect, useState } from "react";

const Table = (props) => {

    props.scores.sort((a, b) => (a.score < b.score ? 1 : -1)).map((s, index) => s.id = index + 1);

    const [results, setResults] = useState();

    useEffect(() => {
        if (props.playerSelected && props.difficultySelected) {
            setResults(props.scores.filter(score => (score.user.pseudo === props.playerSelected && score.difficulty === props.difficultySelected)));
        }
        else if (props.playerSelected) {
            setResults(props.scores.filter(score => score.user.pseudo === props.playerSelected))
        }
        else if (props.difficultySelected) {
            setResults(props.scores.filter((score) => score.difficulty === props.difficultySelected))
        }
        else setResults(props.scores)

    }, [props.playerSelected, props.difficultySelected, props.scores])

    return (<>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
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
                            <tbody>
                                {results && results.map((r) =>
                                    <tr className="bg-gray-100 border-b" key={r.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">{r.id}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                                            {r.user.pseudo}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                                            {r.score}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                                            {r.difficulty}
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