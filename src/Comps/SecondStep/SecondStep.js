import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'
const SecondStep = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <h5 className="mb-3">LINES OF BUSINESS</h5>
                <hr/>
                <div className="form-row">
                    <div className="col-md-3">
                        <h6>INDICATE LINES OF BUSINESS</h6>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="BOILER" value="BOILER & MACHINERY" class="custom-control-input" id="customCheck1"/>
                            <label class="custom-control-label" for="customCheck1">BOILER & MACHINERY</label>
                            </div>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="BUSINESS" value="BUSINESS AUTO" class="custom-control-input" id="customCheck2"/>
                            <label class="custom-control-label" for="customCheck2">BUSINESS AUTO</label>
                            </div>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="BUSINESS_OWNERS" class="custom-control-input" value="BUSINESS OWNERS" id="customCheck3"/>
                            <label class="custom-control-label" for="customCheck3">BUSINESS OWNERS</label>
                            </div>

                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="COMMERCIAL_GENERAL_LIABILITY" class="custom-control-input" value="COMMERCIAL GENERAL LIABILITY" id="customCheck4"/>
                            <label class="custom-control-label" for="customCheck4">COMMERCIAL GENERAL LIABILITY</label>
                            </div>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="COMMERCIAL_INLAND_MARINE" class="custom-control-input" value="COMMERCIAL INLAND MARINE" id="customCheck5"/>
                            <label class="custom-control-label" for="customCheck5">COMMERCIAL INLAND MARINE</label>
                            </div>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="COMMERCIAL_PROPERTY" class="custom-control-input" value="COMMERCIAL PROPERTY" id="customCheck6"/>
                            <label class="custom-control-label" for="customCheck6">COMMERCIAL PROPERTY</label>
                            </div>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="CRIME" class="custom-control-input" value="CRIME" id="customCheck7"/>
                            <label class="custom-control-label" for="customCheck7">CRIME</label>
                            </div>
                    </div>
                    <div className="col-md-4">
                    <h6>PREMIUM</h6>
                        <div className="row">
                            <div className="col-6">
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur}  type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            </div>
                            <div className="col-6">
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="CYBER_PRIVACY" value="CYBER AND PRIVACY" class="custom-control-input" id="CYBER_PRIVACY"/>
                            <label class="custom-control-label" for="CYBER_PRIVACY">CYBER AND PRIVACY</label>
                            </div>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="FIDUCIARY_LIABILITY" value="BUSINESS AUTO" class="custom-control-input" id="FIDUCIARY_LIABILITY"/>
                            <label class="custom-control-label" for="FIDUCIARY_LIABILITY">FIDUCIARY LIABILITY</label>
                            </div>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="GARAGE_DEALERS" class="custom-control-input" value="GARAGE _DEALERS" id="GARAGE_DEALERS"/>
                            <label class="custom-control-label" for="GARAGE_DEALERS">GARAGE AND DEALERS</label>
                            </div>

                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="LIQUOR_LIABILITY" class="custom-control-input" value="LIQUOR LIABILITY" id="LIQUOR_LIABILITY"/>
                            <label class="custom-control-label" for="LIQUOR_LIABILITY">LIQUOR LIABILITY</label>
                            </div>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="MOTOR CARRIER" class="custom-control-input" value="MOTOR CARRIER" id="MOTOR_CARRIER"/>
                            <label class="custom-control-label" for="MOTOR_CARRIER">MOTOR CARRIER</label>
                            </div>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="TRUCKERS" class="custom-control-input" value="TRUCKERS" id="TRUCKERS"/>
                            <label class="custom-control-label" for="TRUCKERS">TRUCKERS</label>
                            </div>
                            <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="UMBRELLA" class="custom-control-input" value="UMBRELLA" id="UMBRELLA"/>
                            <label class="custom-control-label" for="UMBRELLA">UMBRELLA</label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <h6>PREMIUM</h6>
                    <div className="row">
                            <div className="col-4">
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input onChange={handleBlur} type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            </div>
                            <div className="col-4">
                                <div class="custom-control custom-checkbox my-3">
                                <input onChange={handleBlur} type="checkbox" name="YACHT" value="YACHT" class="custom-control-input" id="YACHT"/>
                                <label class="custom-control-label" for="YACHT">YACHT</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" class="form-control" aria-describedby="basic-addon1"/>
                                </div>
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" class="form-control" aria-describedby="basic-addon1"/>
                                </div>
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" class="form-control" aria-describedby="basic-addon1"/>
                                </div>
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" class="form-control" aria-describedby="basic-addon1"/>
                                </div>
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" class="form-control" aria-describedby="basic-addon1"/>
                                </div>
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" class="form-control" aria-describedby="basic-addon1"/>
                                </div>
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" class="form-control" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(1) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(3) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default SecondStep;