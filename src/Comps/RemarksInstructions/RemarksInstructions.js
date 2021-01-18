import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const RemarksInstructions = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
            <h5 className="mb-3">REMARKS / PROCESSING INSTRUCTIONS (ACORD 101, Additional Remarks Schedule, may be attached if more space is required)</h5>
                <div className="row">
                    <div className="col">
                        <textarea name="RemarksInstructions" id="" cols="30" rows="10"  className="form-control" onChange={handleBlur}></textarea>
                    </div>
               </div>
               <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(9) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(12) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default RemarksInstructions;