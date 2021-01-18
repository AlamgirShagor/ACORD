import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const PriorCarrerInfoContinued = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                        <div className="col-md-6">
                            <h5 className="mb-3">PRIOR CARRIER INFORMATION (continued)</h5>
                        </div>
                        <div className="col-md-6">
                            <div className="row mb-1">
                                <div className="col-4" >
                                    <label>AGENCY CUSTOMER ID:</label>
                                </div>
                                <div className="col-8">
                                    <input type="text" name="AGENCY CUSTOMER ID (continued)" className="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row">
                <div className="row border p-1">
                    <div className="col-3">
                        <div className="row">
                            <div className="col-4">
                                <h6>YEAR</h6>
                                <input type="text" name="Year"class="form-control mt-5" onChange={handleBlur}/>
                            </div>
                        <div className="col-8">
                            <h6>CATEGORY</h6>
                            <label className="my-2">CARRIER</label>
                            <br/>
                            <label className="my-2">POLICY NUMBER</label>
                            <br/>
                            <label className="my-2">PREMIUM</label>
                            <br/>
                            <label className="my-3">EFFECTIVE DATE</label>
                            <br/>
                            <label className="my-2">EXPIRATION DATE</label>
                        </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row justify-content-center">
                            <h6>GENERAL LIABILITY</h6>
                        </div>
                        <input type="text" name="CARRIER" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="text" name="POLICY NUMBER" class="form-control mb-1" onChange={handleBlur}/>
                        <div>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="PREMIUM" class="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                        <input type="date" name="EFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="date" name="GEFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                        
                        
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-center">
                            <h6>AUTOMOBILE</h6>
                        </div>
                        <input type="text" name="CARRIER" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="text" name="POLICY NUMBER" class="form-control mb-1" onChange={handleBlur}/>
                        <div>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="PREMIUM" class="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                        <input type="date" name="EFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="date" name="GEFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-center">
                            <h6>PROPERTY</h6>
                        </div>
                        <input type="text" name="CARRIER" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="text" name="POLICY NUMBER" class="form-control mb-1" onChange={handleBlur}/>
                        <div>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="PREMIUM" class="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                        <input type="date" name="EFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="date" name="GEFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-center">
                            <h6>OTHER</h6>
                        </div>
                        <input type="text" name="CARRIER" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="text" name="POLICY NUMBER" class="form-control mb-1" onChange={handleBlur}/>
                        <div>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="PREMIUM" class="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                        <input type="date" name="EFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="date" name="GEFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                    </div>
               </div>

               <hr/>
               <div className="row border p-1 mt-2">
                    <div className="col-3">
                        <div className="row">
                            <div className="col-4">
                                <h6>YEAR</h6>
                                <input type="text" name="Year"class="form-control mt-5" onChange={handleBlur}/>
                            </div>
                        <div className="col-8">
                            <h6>CATEGORY</h6>
                            <label className="my-2">CARRIER</label>
                            <br/>
                            <label className="my-2">POLICY NUMBER</label>
                            <br/>
                            <label className="my-2">PREMIUM</label>
                            <br/>
                            <label className="my-3">EFFECTIVE DATE</label>
                            <br/>
                            <label className="my-2">EXPIRATION DATE</label>
                        </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row justify-content-center">
                            <h6>GENERAL LIABILITY</h6>
                        </div>
                        <input type="text" name="CARRIER" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="text" name="POLICY NUMBER" class="form-control mb-1" onChange={handleBlur}/>
                        <div>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="PREMIUM" class="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                        <input type="date" name="EFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="date" name="GEFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                        
                        
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-center">
                            <h6>AUTOMOBILE</h6>
                        </div>
                        <input type="text" name="CARRIER" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="text" name="POLICY NUMBER" class="form-control mb-1" onChange={handleBlur}/>
                        <div>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="PREMIUM" class="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                        <input type="date" name="EFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="date" name="GEFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-center">
                            <h6>PROPERTY</h6>
                        </div>
                        <input type="text" name="CARRIER" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="text" name="POLICY NUMBER" class="form-control mb-1" onChange={handleBlur}/>
                        <div>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="PREMIUM" class="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                        <input type="date" name="EFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="date" name="GEFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-center">
                            <h6>OTHER</h6>
                        </div>
                        <input type="text" name="CARRIER" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="text" name="POLICY NUMBER" class="form-control mb-1" onChange={handleBlur}/>
                        <div>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">$</span>
                                </div>
                                <input type="text" name="PREMIUM" class="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                        <input type="date" name="EFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                        <input type="date" name="GEFFECTIVE DATE" class="form-control mb-1" onChange={handleBlur}/>
                    </div>
               </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(11) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(14) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default PriorCarrerInfoContinued;