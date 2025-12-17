const Step1 = ({ formData, handleChange, nextStep }) => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
            <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded-md"
            />
            <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-3 p-2 border rounded-md"
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mb-5 p-2 border rounded-md"
            />
            <button
                onClick={nextStep}
                disabled={!formData.name || !formData.email || !formData.password}
                className="w-full bg-indigo-600 text-white py-2 rounded-md disabled:opacity-50"
            >
                Next
            </button>
        </>
    )
}

export default Step1;