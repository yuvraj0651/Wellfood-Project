const Progress = ({ step }) => {
    return (
        <>
            <div className="flex justify-between mb-6">
                {
                    [1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className={`w-full h-2 mx-1 rounded-full ${step >= item ? "bg-indigo-600" : "bg-gray-300"}`}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Progress