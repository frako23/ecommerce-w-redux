
import { useState } from 'react'
import { Stepper } from "./components/stepper";
import { StepperControl } from "./components/StepperControl";
import { StepperContext } from "./context/stepperContext";
import { CarData } from "./components/steps/CarData";
import { Contact } from "./components/steps/Contact";
import { ProductCard } from "./components/steps/ProductCard";

export const Home = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    const steps = [
        "Datos del vehículo",
        "Producto",
        "Contacto",
        "Final"
    ]


    const displayStep = (step) => {
        switch (step) {
            case 1: 
                return <CarData />

            case 2:
                return <ProductCard />
                
            case 3:
                return <Contact />
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        console.log(newStep);
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    }

    return (
        <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
            <div className="container horizontal mt-5">
                {/* stepper */}
            <Stepper
            steps ={steps}
            currentStep = {currentStep}
            />
            </div>
            
            {/* display components */}
            <div className='my-10 p-10'>
                <StepperContext.Provider value={{
                    userData,
                    setUserData,
                    finalData, 
                    setFinalData
                }}>
                    {displayStep(currentStep)}
                </StepperContext.Provider>
            </div>

            {/* {currentStep !== steps.length && */}
            <StepperControl
            handleClick = {handleClick}
            currentStep = {currentStep}
            steps = {steps} />
            {/* } */}
        </div>
    )
}