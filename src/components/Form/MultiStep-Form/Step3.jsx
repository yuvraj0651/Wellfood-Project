const Step3 = ({ formData, prevStep, setFormData, setFormStep }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Successfully 🎉");
        console.log(formData);

        setFormData({
            name: "",
            email: "",
            password: "",
            company: "",
            role: "",
            experience: "",
        });
        setFormStep(1);
    }

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Review Details</h2>
            <ul className="text-sm space-y-2 mb-5">
                <li><b>Name:</b> {formData.name}</li>
                <li><b>Email:</b> {formData.email}</li>
                <li><b>Company:</b> {formData.company}</li>
                <li><b>Role:</b> {formData.role}</li>
                <li><b>Experience:</b> {formData.experience}</li>
            </ul>
            <div className="flex justify-between">
                <button
                    onClick={prevStep}
                    className="px-4 py-2 border rounded-md"
                >
                    Back
                </button>
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-600 text-white rounded-md"
                >
                    Submit
                </button>
            </div>
        </>
    )
}

export default Step3