export const StepperControl = ({handleClick, currentStep, steps}) => {
    console.log(currentStep);
    
    return (
        <div className="container flex justify-around mt-4 mb-8">

        <button 
            onClick={() => handleClick()}
            className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
           REGRESAR
        </button>

        <button 
            className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
            onClick={() => handleClick("next")}>
            {currentStep === steps.length ? "Confirmar" : "Siguiente"}
        </button>

        </div>
    )
}