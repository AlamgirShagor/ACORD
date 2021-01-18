import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const ApplicantInformattion = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <h5 className="mb-3">APPLICANT INFORMATION</h5>
                <hr/>
                <div class="form-row">
                    <div className="col-md-6">
                    <h6>NAME (First Named Insured) AND MAILING ADDRESS (including ZIP+4)</h6>
                    <textarea 
                        id="AGENCY"
                        name="NAME"
                        rows="5"
                        cols="50"
                        class="form-control mb-2"
                        onChange={handleBlur}
                    />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>GL CODE</h6>
                                <input
                                type="text"
                                name="GL CODE"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>SIC</h6>
                                <input
                                type="text"
                                name="SIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>NAICS</h6>
                                <input
                                type="text"
                                name="NAICS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>FEIN OR SOC SEC #</h6>
                                <input
                                type="text"
                                name="FEIN OR SOC SEC #"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-3">
                                    <h6>BUSINESS PHONE:</h6>
                                    </div>
                                    <div className="col-9">
                                    <input
                                    type="text"
                                    name="BUSINESS PHONE"
                                    class="form-control mb-2"
                                    onChange={handleBlur}
                                    />
                                    </div>
                                </div>
                            </div>
                            </div>
                        <div className="row">
                            <div className="col">
                                <div className="row ">
                                <div className="col-3">
                                    <h6>WEBSITE ADDRESS</h6>
                                </div>
                                    <div className="col-9">
                                    <input
                                        type="text"
                                        name="WEBSITE_ADDRESS"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="CORPORATION" class="custom-control-input" value="CORPORATION" id="CORPORATION"/>
                                    <label class="custom-control-label" for="CORPORATION">CORPORATION</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="INDIVIDUAL" class="custom-control-input" value="INDIVIDUAL" id="INDIVIDUAL"/>
                                    <label class="custom-control-label" for="INDIVIDUAL">INDIVIDUAL</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="CORPORATION" class="custom-control-input" value=" JOINT VENTURE" id="JOINT"/>
                                    <label class="custom-control-label" for="JOINT"> JOINT VENTURE</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="LLC" class="custom-control-input" value="LLC" id="LLC"/>
                                    <label class="custom-control-label" for="LLC">LLC</label>
                                </div>
                            </div>
                            <div className="col-4">
                            <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="NOT_FOR_PROFIT_ORG" class="custom-control-input" value=" NOT FOR PROFIT ORG" id="NOT_FOR_PROFIT_ORG"/>
                                    <label class="custom-control-label" for="NOT_FOR_PROFIT_ORG"> NOT FOR PROFIT ORG</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="PARTNERSHIP" class="custom-control-input" value="PARTNERSHIP" id="PARTNERSHIP"/>
                                    <label class="custom-control-label" for="LLC">PARTNERSHIP</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="SUBCHAPTER" class="custom-control-input" value="" id="SUBCHAPTER"/>
                                    <label class="custom-control-label" for="SUBCHAPTER">SUBCHAPTER "S" CORPORATION</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="TRUST" class="custom-control-input" value="TRUST" id="TRUST"/>
                                    <label class="custom-control-label" for="INDIVIDUAL">TRUST</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="form-row">
                    <div className="col-md-6">
                    <h6>NAME (First Named Insured) AND MAILING ADDRESS (including ZIP+4)</h6>
                    <textarea 
                        id="AGENCY"
                        name="NAME"
                        rows="5"
                        cols="50"
                        class="form-control mb-2"
                        onChange={handleBlur}
                    />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>GL CODE</h6>
                                <input
                                type="text"
                                name="GL CODE"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>SIC</h6>
                                <input
                                type="text"
                                name="SIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>NAICS</h6>
                                <input
                                type="text"
                                name="NAICS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>FEIN OR SOC SEC #</h6>
                                <input
                                type="text"
                                name="FEIN OR SOC SEC #"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-3">
                                    <h6>BUSINESS PHONE:</h6>
                                    </div>
                                    <div className="col-9">
                                    <input
                                    type="text"
                                    name="BUSINESS PHONE"
                                    class="form-control mb-2"
                                    onChange={handleBlur}
                                    />
                                    </div>
                                </div>
                            </div>
                            </div>
                        <div className="row">
                            <div className="col">
                                <div className="row ">
                                <div className="col-3">
                                    <h6>WEBSITE ADDRESS</h6>
                                </div>
                                    <div className="col-9">
                                    <input
                                        type="text"
                                        name="WEBSITE_ADDRESS"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="CORPORATION" class="custom-control-input" value="CORPORATION" id="CORPORATION"/>
                                    <label class="custom-control-label" for="CORPORATION">CORPORATION</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="INDIVIDUAL" class="custom-control-input" value="INDIVIDUAL" id="INDIVIDUAL"/>
                                    <label class="custom-control-label" for="INDIVIDUAL">INDIVIDUAL</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="CORPORATION" class="custom-control-input" value=" JOINT VENTURE" id="JOINT"/>
                                    <label class="custom-control-label" for="JOINT"> JOINT VENTURE</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="LLC" class="custom-control-input" value="LLC" id="LLC"/>
                                    <label class="custom-control-label" for="LLC">LLC</label>
                                </div>
                            </div>
                            <div className="col-4">
                            <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="NOT_FOR_PROFIT_ORG" class="custom-control-input" value=" NOT FOR PROFIT ORG" id="NOT_FOR_PROFIT_ORG"/>
                                    <label class="custom-control-label" for="NOT_FOR_PROFIT_ORG"> NOT FOR PROFIT ORG</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="PARTNERSHIP" class="custom-control-input" value="PARTNERSHIP" id="PARTNERSHIP"/>
                                    <label class="custom-control-label" for="LLC">PARTNERSHIP</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="SUBCHAPTER" class="custom-control-input" value="" id="SUBCHAPTER"/>
                                    <label class="custom-control-label" for="SUBCHAPTER">SUBCHAPTER "S" CORPORATION</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="TRUST" class="custom-control-input" value="TRUST" id="TRUST"/>
                                    <label class="custom-control-label" for="INDIVIDUAL">TRUST</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div className="col-md-6">
                    <h6>NAME (First Named Insured) AND MAILING ADDRESS (including ZIP+4)</h6>
                    <textarea 
                        id="AGENCY"
                        name="NAME"
                        rows="5"
                        cols="50"
                        class="form-control mb-2"
                        onChange={handleBlur}
                    />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>GL CODE</h6>
                                <input
                                type="text"
                                name="GL CODE"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>SIC</h6>
                                <input
                                type="text"
                                name="SIC"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>NAICS</h6>
                                <input
                                type="text"
                                name="NAICS"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-md-3">
                        <h6 style={{fontSize: "14px"}}>FEIN OR SOC SEC #</h6>
                                <input
                                type="text"
                                name="FEIN OR SOC SEC #"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-3">
                                    <h6>BUSINESS PHONE:</h6>
                                    </div>
                                    <div className="col-9">
                                    <input
                                    type="text"
                                    name="BUSINESS PHONE"
                                    class="form-control mb-2"
                                    onChange={handleBlur}
                                    />
                                    </div>
                                </div>
                            </div>
                            </div>
                        <div className="row">
                            <div className="col">
                                <div className="row ">
                                <div className="col-3">
                                    <h6>WEBSITE ADDRESS</h6>
                                </div>
                                    <div className="col-9">
                                    <input
                                        type="text"
                                        name="WEBSITE_ADDRESS"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="CORPORATION" class="custom-control-input" value="CORPORATION" id="CORPORATION"/>
                                    <label class="custom-control-label" for="CORPORATION">CORPORATION</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="INDIVIDUAL" class="custom-control-input" value="INDIVIDUAL" id="INDIVIDUAL"/>
                                    <label class="custom-control-label" for="INDIVIDUAL">INDIVIDUAL</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="CORPORATION" class="custom-control-input" value=" JOINT VENTURE" id="JOINT"/>
                                    <label class="custom-control-label" for="JOINT"> JOINT VENTURE</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="LLC" class="custom-control-input" value="LLC" id="LLC"/>
                                    <label class="custom-control-label" for="LLC">LLC</label>
                                </div>
                            </div>
                            <div className="col-4">
                            <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="NOT_FOR_PROFIT_ORG" class="custom-control-input" value=" NOT FOR PROFIT ORG" id="NOT_FOR_PROFIT_ORG"/>
                                    <label class="custom-control-label" for="NOT_FOR_PROFIT_ORG"> NOT FOR PROFIT ORG</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="PARTNERSHIP" class="custom-control-input" value="PARTNERSHIP" id="PARTNERSHIP"/>
                                    <label class="custom-control-label" for="LLC">PARTNERSHIP</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="SUBCHAPTER" class="custom-control-input" value="" id="SUBCHAPTER"/>
                                    <label class="custom-control-label" for="SUBCHAPTER">SUBCHAPTER "S" CORPORATION</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="TRUST" class="custom-control-input" value="TRUST" id="TRUST"/>
                                    <label class="custom-control-label" for="INDIVIDUAL">TRUST</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <input type="button" value="Back" onClick={()=>setStep(4) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(6) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default ApplicantInformattion;