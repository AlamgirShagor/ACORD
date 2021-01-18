import React, { useContext } from 'react';
import Attachmendts from '../Attachments/Attachmendts';
import FirstStep from '../FirstStep/FirstStep';
import Header from '../Header/Header';
import SecondStep from '../SecondStep/SecondStep';
import {StepLabel,  Stepper, Step} from '@material-ui/core'
import {multiStepContext} from '../StepContext/StepContext'
import PolicyInformation from '../PolicyInformation/PolicyInformation';
import ApplicantInformattion from '../ApplicantInformattion/ApplicantInformattion';
import ContactInformation from '../ContactInformation/ContactInformation';
import PremisesInformation from '../PremisesInformation/PremisesInformation';
import NatureBusiness from '../NatureBusiness/NatureBusiness';
import AdditonalInterest from '../AdditonalInterest/AdditonalInterest';
import GeneraInformation from '../GeneraInformation/GeneraInformation';
import RemarksInstructions from '../RemarksInstructions/RemarksInstructions';
import PriorCarrierInformation from '../PriorCarrierInformation/PriorCarrierInformation';
import PriorCarrerInfoContinued from '../PriorCarrerInfoContinued/PriorCarrerInfoContinued';
import LossHistory from '../LossHistory/LossHistory';
import Signature from '../Signature/Signature';

const FormMin = () => {
    const {currentStep,setStep, finalData, setUserData, userData} = useContext(multiStepContext);
    const handleBlur = e =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e =>{

        console.log(userData);
        setUserData('')
        setStep(1)
    }

    function showStep(step){
        switch(step){
            case 1:
                return <FirstStep handleBlur={handleBlur}/>
            case 2:
                return <SecondStep handleBlur={handleBlur}/>
            case 3:
                 return <Attachmendts handleBlur={handleBlur}/>
            case 4:
                  return <PolicyInformation handleBlur={handleBlur}/>
            case 5:
                return <ApplicantInformattion handleBlur={handleBlur}/>
            case 6:
                return <ContactInformation handleBlur={handleBlur}/>
            case 7:
                return <PremisesInformation handleBlur={handleBlur}/>
            case 8:
                return <NatureBusiness handleBlur={handleBlur}/>
            case 9:
                return <AdditonalInterest handleBlur={handleBlur}/>
            case 10:
                return <GeneraInformation handleBlur={handleBlur}/>
            case 11:
                return <RemarksInstructions  handleBlur={handleBlur}/>
            case 12:
                return <PriorCarrierInformation handleBlur={handleBlur}/>
            case 13:
                return <PriorCarrerInfoContinued handleBlur={handleBlur}/>
            case 14:
                return <LossHistory handleBlur={handleBlur} />
            case 15:
                return <Signature handleBlur={handleBlur} handleSubmit={handleSubmit}/>
        }
    }

    return (
        <>
            <Header/>
            <Stepper style={{width: '100%'}} activeStep={currentStep - 1} orientation="horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
            {showStep(currentStep)}
        </>
    );
};

export default FormMin;