import { useEffect, useState, useRef } from 'react'

export const Stepper = ({steps, currentStep}) => {
    console.log(steps);
    console.log(currentStep);
    const [newStep, setNewStep] = useState([]);
    // const [count, setCount] = useState(0)
    const stepRef = useRef();
    const updateStep = (stepNumber, steps) => {
            console.log(stepNumber);
            const newSteps = [...steps];
            let count = 0;
            // pru
            console.log(count);
            while (count < newSteps.length) {
                // actual
                console.log(count);
                console.log(stepNumber);
                // paso actual
                if(count === stepNumber) {
                    newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true
                };
                count++; 
                console.log(count);
                console.log(stepNumber);
                } 
                // completado
                else if (count < stepNumber) {
                    console.log(count);
                    console.log(stepNumber);
                    newSteps[count+1] ={
                     
                        ...newSteps[count+1],
                        highlighted: true,
                        selected: true,
                        completed: true
                    };
                    newSteps[count] = {
                        ...newSteps[count],
                        highlighted: false,
                        selected: true,
                        completed: true
                    };
                   
                    count++;
                    console.log(count);
                    console.log(stepNumber);
                } 
                   else if (count < stepNumber) {
                    console.log(count);
                    console.log(stepNumber);
                    newSteps[count+1] ={
                     
                        ...newSteps[count+1],
                        highlighted: true,
                        selected: true,
                        completed: true
                    };
                    newSteps[count] = {
                        ...newSteps[count],
                        highlighted: false,
                        selected: true,
                        completed: true
                    };
                   
                    count++;
                    console.log(count);
                    console.log(stepNumber);
                } 
                else {
                    console.log(count);
                    newSteps[count] = {
                        ...newSteps[count],
                        highlighted: false,
                        selected: false,
                        completed: false
                    };
                    count++;
                    console.log(stepNumber);
                    console.log(count);
                }
                console.log(newSteps);
                return newSteps;
            }
    }

    useEffect(() => {
        const stepsState = steps.map((step, index) => 
            Object.assign(
                {},
                {
                    description: step,
                    completed: false,
                    highlighted: index === 0 ? true : false,
                    selected: index === 0 ? true : false,
                }))
        stepRef.current = stepsState;
    console.log(stepRef.current);
        const current = updateStep(currentStep - 1, stepRef.current);
        // console.log(current);
        setNewStep(current)
        console.log(newStep);
    }, [steps,currentStep])

    const displaySteps =  newStep.map((step, index) => {
        return(<div 
            key={index} className={index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"}>
            <div className="relative flex flex-col items-center text-teal-600">
                <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 
                ${step.selected ? "bg-green-600 text-white font-bold border border-green-600" : ""}`}>
                    {step.completed ? (<span className='text-white font-bold text-xl'><i className="fa-solid fa-check"></i></span>) : ( index + 1)}</div>
                <div className={` ${step.highlighted ? "text-gray-900 font-bold" : "text-gray-400"}`}>{step.description}</div>
            </div>
            <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-green-600" : "border-gray-300"}`}></div>
        </div>
    )})
        
    return (
        <div className="mx-4 p-4 flex justify-between items-center">
            {displaySteps}
        </div>
        
    )
}