import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const FirstStep = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div class="form-row">
                    <div class="col">
                    <textarea 
                    id="AGENCY"
                    name="AGENCY"
                    rows="5"
                    cols="50"
                    class="form-control mb-2"
                    placeholder="AGENCY"
                    onChange={handleBlur}

                    />

                    <input
                        type="text"
                        name="CONTACT NAME"
                        class="form-control mb-2"
                        placeholder="CONTACT NAME:"
                        onChange={handleBlur}
                    />

                    <input
                        type="text"
                        name="PHONE"
                        class="form-control mb-2"
                        placeholder="PHONE (A/C, No, Ext):"
                        onChange={handleBlur}
                    />

                    <input
                        type="text"
                        name="E-MAIL ADDRESS"
                        class="form-control mb-2"
                        placeholder="E-MAIL ADDRESS:"
                        onChange={handleBlur}
                    />
                    <div className="row">
                        <div className="col-6">
                            <input
                            type="text"
                            name="CODE"
                            class="form-control mb-2"
                            placeholder="CODE: "
                            onChange={handleBlur}
                            />
                        </div>
                        <div className="col-6">
                            <input
                            type="text"
                            name="SUBCODE"
                            class="form-control mb-2"
                            placeholder="SUBCODE:"
                            onChange={handleBlur}
                            />
                        </div>
                    </div>
                    <input
                        type="text"
                        name="AGENCY CUSTOMER ID"
                        class="form-control mb-2"
                        placeholder="AGENCY CUSTOMER ID:"
                        onChange={handleBlur}
                    />
                    </div>
                    <div class="col">
                    <div className="row">
                        <div className="col-9">
                            <input
                            type="text"
                            name="CARRIER"
                            class="form-control mb-2"
                            placeholder="CARRIER"
                            onChange={handleBlur}
                            />
                        </div>
                        <div className="col-3">
                            <input
                            name="NAIC CODE"
                            type="text"
                            class="form-control mb-2"
                            placeholder="NAIC CODE"
                            onChange={handleBlur}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <input
                            type="text"
                            class="form-control mb-2"
                            placeholder="COMPANY POLICY OR PROGRAM NAME"
                            onChange={handleBlur}
                            />
                        </div>
                        <div className="col-4">
                            <input
                            type="text"
                            class="form-control mb-2"
                            placeholder="PROGRAM CODE"
                            onChange={handleBlur}
                            />
                        </div>
                    </div>
                    <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="CARRIER"
                        onChange={handleBlur}
                    />

                    <div className="row">
                        <div className="col-6">
                            <input
                            type="text"
                            class="form-control mb-2"
                            placeholder="UNDERWRITER"
                            onChange={handleBlur}
                            />
                        </div>
                        <div className="col-6">
                            <input
                            type="text"
                            class="form-control mb-2"
                            placeholder="UNDERWRITER OFFICE"
                            onChange={handleBlur}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 mt-2">
                            <h6>STATUS OF RANSACTION</h6>

                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="status"
                            class="custom-control-input"
                            id="customCheck1"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="customCheck1">QUOTE</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="status" 
                            class="custom-control-input" 
                            id="customCheck2"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="customCheck2">BOUND (Give Date and/or Attach Copy):</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            name="status"
                            class="custom-control-input" 
                            id="customCheck3"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="customCheck3">CHANGE</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                            <input
                            name="CANCEL"
                            type="checkbox"
                            name="status" class="custom-control-input"
                            id="customCheck4"
                            onChange={handleBlur}
                            />
                            <label class="custom-control-label" for="customCheck4">CANCEL</label>
                            </div>

                        </div>
                        <div className="col-4">
                            <div class="custom-control custom-radio">
                            <input 
                            onChange={handleBlur} 
                            type="radio" 
                            id="customRadio1" 
                            name="POLICY" 
                            class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadio1">ISSUE POLICY</label>
                            </div>
                            <div class="custom-control custom-radio">
                            <input 
                            onChange={handleBlur} 
                            type="radio" 
                            id="customRadio2" 
                            name="POLICY" 
                            class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadio2">RENEW</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            
                            <input 
                            type="date" 
                            class="form-control mb-2"
                            name="date"
                            onChange={handleBlur} 
                            />
                            
                        </div>
                        <div className="col-6">
                           
                            <input type="time" 
                            class="form-control mb-2"
                            name="time"
                            onChange={handleBlur} 
                            />
                            
                        </div>
                    </div>
                    </div>
                </div>
                <button onClick={()=>setStep(2) } className="btn btn-success ml-auto" style={{width: "100px"}} >Next</button>
            </form>
        </div>
    );
};

export default FirstStep;