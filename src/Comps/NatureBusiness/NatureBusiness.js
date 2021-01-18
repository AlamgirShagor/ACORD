import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const NatureBusiness = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <h5 className="mb-3">NATURE OF BUSINESS</h5>
                <hr/>
                <div className="row">
                    <div className="col">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="APARTMENTS" id="APARTMENTS"/>
                            <label class="custom-control-label" for="APARTMENTS">APARTMENTS</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="CONDOMINIUMS" id="CONDOMINIUMS"/>
                            <label class="custom-control-label" for="CONDOMINIUMS">CONDOMINIUMS</label>
                        </div>
                    </div>
                    <div className="col">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="CONTRACTOR" id="CONTRACTOR"/>
                            <label class="custom-control-label" for="CONTRACTOR">CONTRACTOR</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="INSTITUTIONAL" id="INSTITUTIONAL"/>
                            <label class="custom-control-label" for="INSTITUTIONAL">INSTITUTIONAL</label>
                        </div>
                    </div>
                    <div className="col">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="MANUFACTURING" id="MANUFACTURING"/>
                            <label class="custom-control-label" for="MANUFACTURING">MANUFACTURING</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="OFFICE" id="OFFICE"/>
                            <label class="custom-control-label" for="OFFICE">OFFICE</label>
                        </div>
                    </div>
                    <div className="col">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="RESTAURANT" id="RESTAURANT"/>
                            <label class="custom-control-label" for="RESTAURANT">RESTAURANT</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="RETAIL" id="RETAIL"/>
                            <label class="custom-control-label" for="RETAIL">RETAIL</label>
                        </div>
                    </div>
                    <div className="col">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="SERVICE" id="SERVICE"/>
                            <label class="custom-control-label" for="SERVICE">SERVICE</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="WHOLESALE" id="WHOLESALE"/>
                            <label class="custom-control-label" for="WHOLESALE">WHOLESALE</label>
                        </div>
                    </div>
                    <div className="col d-flex">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="NATURE OF BUSINESS" class="custom-control-input" value="" id="Other"/>
                            <label class="custom-control-label" for="WHOLESALE"></label>
                        </div>
                        <input onChange={handleBlur} style={{height: "40px"}} type="text" name="Nature other input" className="form-control" />
                    </div>
                    <div className="col">
                        <label>DATE BUSINESS STARTED (MM/DD/YYYY)</label>
                        <input type="date" onChange={handleBlur} className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="DESCRIPTION">DESCRIPTION OF PRIMARY OPERATIONS</label>
                        <textarea onChange={handleBlur} name="DESCRIPTION_PRIMARY" id="DESCRIPTION" cols="30" rows="10" class="form-control mb-2"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col"><label>RETAIL STORES OR SERVICE OPERATIONS % OF TOTAL SALES:</label></div>
                    <div className="col">
                            <label>INSTALLATION, SERVICE OR REPAIR WORK</label>
                            <div class="input-group mb-2">
                                    <input type="text" name="INSTALLATION" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                    <span class="input-group-text">%</span>
                                </div>
                            </div>
                    </div>
                    <div className="col">
                            <label>OFF PREMISES INSTALLATION, SERVICE OR REPAIR WORK</label>
                            <div class="input-group mb-2">
                                    <input type="text" name="OFF PREMISES INSTALLATION" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                    <span class="input-group-text">%</span>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="DESCRIPTION">DESCRIPTION OF OPERATIONS OF OTHER NAMED INSUREDS</label>
                        <textarea onChange={handleBlur} name="DESCRIPTION_PRIMARY" id="DESCRIPTION" cols="30" rows="10" class="form-control mb-2"></textarea>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <input type="button" value="Back" onClick={()=>setStep(7) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(9) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default NatureBusiness;