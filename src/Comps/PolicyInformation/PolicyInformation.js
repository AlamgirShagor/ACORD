import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const PolicyInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <h5 className="mb-3">POLICY INFORMATION</h5>
                <hr/>
                <div class="form-row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-3">
                                <h6 style={{fontSize: "14px"}}>PROPOSED EFF DATE</h6>
                                <input
                                type="text"
                                name="PROPOSED EFF DATE:"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <h6 style={{fontSize: "14px"}}>PROPOSED EXP DATE</h6>
                            <input
                                type="text"
                                name="PROPOSED EXP DATE:"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                            <div className="col-3">
                                <h6 style={{fontSize: "14px"}}>BILLING PLAN</h6>
                                <div class="custom-control custom-radio">
                                    <input 
                                    onChange={handleBlur} 
                                    type="radio" 
                                    id="customRadio1" 
                                    name="BILLING_PLAN" 
                                    class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio1">DIRECT</label>
                                    </div>
                                <div class="custom-control custom-radio">
                                    <input 
                                    onChange={handleBlur} 
                                    type="radio" 
                                    id="customRadio2" 
                                    name="BILLING_PLAN"
                                    class="custom-control-input"/>
                                    <label class="custom-control-label" for="customRadio2">AGENCY</label>
                                </div>
                            </div>
                            <div className="col-3">
                            <h6 style={{fontSize: "14px"}}>PAYMENT PLAN</h6>
                            <input
                                type="text"
                                name="PAYMENT PLAN:"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                       <div className="row">
                       <div className="col-3">
                           <h6 style={{fontSize: "13px"}}>METHOD OF PAYMENT</h6>
                            <input
                                type="text"
                                name="METHOD OF PAYMENT"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-5">
                                    <span>AUDIT</span>
                                    <input
                                    type="text"
                                    name="AUDIT"
                                    class="form-control mb-2"
                                    onChange={handleBlur}
                                    />
                                </div>
                                <div className="col-7">
                                <h6 style={{fontSize: "14px"}}>DEPOSIT</h6>
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                                </div>
                            </div>
                        <div className="col-3">
                        <h6 style={{fontSize: "14px"}}>MINIMUM PREMIUM</h6>
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="col-3">
                        <h6 style={{fontSize: "14px"}}>POLICY PREMIUM</h6>
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <input type="button" value="Back" onClick={()=>setStep(3) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(5) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default PolicyInformation;