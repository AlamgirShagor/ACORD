import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const LossHistory = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row mb-2">
                        <div className="col-md-7">
                            <h5>LOSS HISTORY</h5>
                        </div>
                        <div className="col-md-5">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="COMMERCIAL_GENERAL_LIABILITY" class="custom-control-input" value="COMMERCIAL GENERAL LIABILITY" id="Check if none"/>
                                        <label class="custom-control-label" for="Check if none">Check if none (Attach Loss Summary for Additional Loss Information)</label>
                                    </div>
                        </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <span>ENTER ALL CLAIMS OR LOSSES (REGARDLESS OF FAULT AND WHETHER OR NOT INSURED) <br/> OR OCCURRENCES THAT MAY GIVE RISE TO CLAIMS</span>
                        <div className="row mt-1">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="">FOR THE LAST</label>
                                    </div>
                                    <div className="col-5">
                                        <input type="text" name="FOR THE LAST year" className="form-control" onChange={handleBlur}/>
                                    </div>
                                    <div className="col-2">
                                        <label htmlFor="">YEARS</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-6">
                                <h6>TOTAL LOSSES: $</h6>
                            </div>
                            <div className="col-6">
                                <input type="text" name="TOTAL LOSSES" className="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <div className="row">
                        <div className="col-3">
                            <div className="m-1">
                            <div className="row d-flex justify-content-center">
                                <h6 style={{fontSize: "14px"}}>DATE OF OCCURRENCE</h6>
                            </div>
                            <div className="row mt-3">
                                <input type="text" name="DATE OF OCCURRENCE1" className="form-control my-1" onChange={handleBlur}/>
                                <input type="text" name="DATE OF OCCURRENCE2" className="form-control my-1" onChange={handleBlur}/>
                                <input type="text" name="DATE OF OCCURRENCE3" className="form-control my-1" onChange={handleBlur}/>
                            </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="m-1">
                            <div className="row d-flex justify-content-center">
                                <h6 style={{fontSize: "14px"}}>LINE</h6>
                            </div>
                            <div className="row mt-3">
                                <input type="text" name="LINE1" className="form-control my-1" onChange={handleBlur}/>
                                <input type="text" name="LINE2" className="form-control my-1" onChange={handleBlur}/>
                                <input type="text" name="LINE3" className="form-control my-1" onChange={handleBlur}/>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="m-1">
                            <div className="row d-flex justify-content-center">
                                <h6 style={{fontSize: "14px"}}>TYPE / DESCRIPTION OF OCCURRENCE OR CLAIM</h6>
                            </div>
                            <div className="row mt-3">
                                <input type="text" name="TYPE1" className="form-control my-1" onChange={handleBlur}/>
                                <input type="text" name="TYPE2" className="form-control my-1" onChange={handleBlur}/>
                                <input type="text" name="TYPE3" className="form-control my-1" onChange={handleBlur}/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-2">
                                <div className="m-1">
                                <div className="row d-flex justify-content-center">
                                    <h6 style={{fontSize: "14px"}}>DATE OF CLAIM</h6>
                                </div>
                                <div className="row mt-3">
                                    <input type="text" name="DATE OF CLAIM1" className="form-control my-1" onChange={handleBlur}/>
                                    <input type="text" name="DATE OF CLAIM2" className="form-control my-1" onChange={handleBlur}/>
                                    <input type="text" name="DATE OF CLAIM3" className="form-control my-1" onChange={handleBlur}/>
                                </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="m-1">
                                <div className="row d-flex justify-content-center">
                                    <h6 style={{fontSize: "14px"}}>AMOUNT PAID</h6>
                                </div>
                                <div className="row mt-3">
                                    <input type="text" name="AMOUNT PAID1" className="form-control my-1" onChange={handleBlur}/>
                                    <input type="text" name="AMOUNT PAID2" className="form-control my-1" onChange={handleBlur}/>
                                    <input type="text" name="AMOUNT PAID3" className="form-control my-1" onChange={handleBlur}/>
                                </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                    <div className="col-6">
                                    <div className="m-1">
                                        <div className="row d-flex justify-content-center">
                                            <h6 style={{fontSize: "14px"}}>AMOUNT RESERVED</h6>
                                        </div>
                                        <div className="row mt-3">
                                            <input type="text" name="AMOUNT RESERVED1" className="form-control my-1" onChange={handleBlur}/>
                                            <input type="text" name="AMOUNT RESERVED2" className="form-control my-1" onChange={handleBlur}/>
                                            <input type="text" name="AMOUNT RESERVED3" className="form-control my-1" onChange={handleBlur}/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-6">
                                            <div className="m-1">
                                                <div className="row d-flex justify-content-center">
                                                    <h6 style={{fontSize: "14px"}}>SUBRO- GATION Y / N</h6>
                                                </div>
                                                <div className="row">
                                                    <input type="text" name="SUBRO- GATION1" className="form-control my-1" onChange={handleBlur}/>
                                                    <input type="text" name="SUBRO- GATION2" className="form-control my-1" onChange={handleBlur}/>
                                                    <input type="text" name="SUBRO- GATION3" className="form-control my-1" onChange={handleBlur}/>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-6">
                                            <div className="m-1">
                                                <div className="row d-flex justify-content-center">
                                                    <h6 style={{fontSize: "14px"}}>CLAIM OPEN Y / N</h6>
                                                </div>
                                                <div className="row">
                                                    <input type="text" name="CLAIM OPEN1" className="form-control my-1" onChange={handleBlur}/>
                                                    <input type="text" name="CLAIM OPEN2" className="form-control my-1" onChange={handleBlur}/>
                                                    <input type="text" name="CLAIM OPEN3" className="form-control my-1" onChange={handleBlur}/>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(13) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(15) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default LossHistory;