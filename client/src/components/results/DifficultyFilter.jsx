const DifficultyFilter = (props) => {

    return (
        <div>
            {Object.entries(props.difficulties).map(([key, value]) =>
                <button
                    className="bg-gray-500 rounded-3xl p-4 mx-2 w-24"
                    onClick={() => props.setDifficultySelected(value)}
                    key={value}>{key}</button>
            )}
            <button
                className="bg-gray-500 rounded-3xl p-4 mx-2  w-24"
                onClick={() => props.setDifficultySelected()}>ALL</button>
        </div>
    )
}

export default DifficultyFilter;