const Table = (props) => {

    props.scores.sort((a, b) => (a.score < b.score ? 1 : -1));
    let results = [];

    if (props.playerSelected) {
        results = props.scores.filter((score)=> score.user.pseudo === props.playerSelected);
    }
    else results = props.scores;

    return (<>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="bg-white border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Classement
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Pseudo
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Score
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Difficulty
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {results && results.map((r, index) =>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">{index}</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                                            {r.user.pseudo}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                                            {r.score}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
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