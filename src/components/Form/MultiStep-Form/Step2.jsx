const Step2 = ({ formData, handleChange, prevStep, nextStep }) => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Work Details</h2>
            <input
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded-md"
            />

            <input
                name="role"
                placeholder="Job Role"
                value={formData.role}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded-md"
            />

            <input
                name="experience"
                placeholder="Experience (Years)"
                value={formData.experience}
                onChange={handleChange}
                className="w-full mb-5 p-2 border rounded-md"
            />
            <div className="flex justify-between">
                <button
                    onClick={prevStep}
                    className="px-4 py-2 border rounded-md"
                >
                    Back
                </button>
                <button
                    onClick={nextStep}
                    disabled={!formData.company || !formData.role || !formData.experience}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default Step2