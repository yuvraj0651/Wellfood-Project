import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Progress from "./Progress";

const MultiStepForm = () => {

    const [formStep, setFormStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        company: "",
        role: "",
        experience: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const nextStep = () => {
        setFormStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setFormStep((prev) => prev - 1);
    }

    return (
        <>
            <div className="bg-white w-[420px] p-6 rounded-xl shadow-lg">
                <Progress step={formStep} />
                {
                    formStep === 1 && (
                        <Step1
                            formData={formData}
                            handleChange={handleChange}
                            nextStep={nextStep}
                        />
                    )
                }
                {
                    formStep === 2 && (
                        <Step2
                            formData={formData}
                            handleChange={handleChange}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                    )
                }
                {
                    formStep === 3 && (
                        <Step3
                            formData={formData}
                            prevStep={prevStep}
                            setFormData={setFormData}
                            setFormStep={setFormStep}
                        />
                    )
                }
            </div>
        </>
    )
}

export default MultiStepForm;