import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const ContactInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="mb-3">CONTACT INFORMATION</h5>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-4">
                                <h5 style={{fontSize: "18px"}}>AGENCY CUSTOMER ID:</h5>
                            </div>
                            <div className="col-8">
                                <input
                                type="text"
                                name="AGENCY Id"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">CONTACT TYPE:</label>
                        <div class="col-sm-9">
                            <input
                                type="text"
                                name="CONTACT TYPE"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>

                        <label class="col-sm-3 col-form-label">CONTACT NAME:</label>
                        <div class="col-sm-9">
                            <input
                                type="text"
                                name="CONTACT NAME:"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                    </div>
                    <div className=" form-group row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-4">
                                    <label class="col-form-label">PRIMARY PHONE #</label>
                                </div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="HOME" class="custom-control-input" value="HOME" id="HOME"/>
                                        <label class="custom-control-label" for="HOME">HOME</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="BUS" class="custom-control-input" value="BUS" id="BUS"/>
                                        <label class="custom-control-label" for="BUS">BUS</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="CELL" class="custom-control-input" value="CELL" id="CELL"/>
                                        <label class="custom-control-label" for="CELL">CELL</label>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="phone"
                                name="PRIMARY PHONE:"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-sm-6">
                        <div className="row">
                                <div className="col-4">
                                    <label class="col-form-label">SECONDARY PHONE #</label>
                                </div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="HOME" class="custom-control-input" value="SECONDARY_HOME" id="SECONDARY_HOME"/>
                                        <label class="custom-control-label" for="SECONDARY_HOME">HOME</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="SECONDARY_BUS" class="custom-control-input" value="SECONDARY_BUS" id="SECONDARY_BUS"/>
                                        <label class="custom-control-label" for="SECONDARY_BUS">BUS</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="SECONDARY_CELL" class="custom-control-input" value="SECONDARY_CELL" id="SECONDARY_CELL"/>
                                        <label class="custom-control-label" for="SECONDARY_CELL">CELL</label>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="phone"
                                name="PRIMARY PHONE:"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                                <label class="col-form-label">PRIMARY E-MAIL ADDRESS:</label>
                            </div>
                            <div className="col-8">
                                <div class="custom-control custom-checkbox my-3">
                                    <input
                                        type="phone"
                                        name="PRIMARY_E-MAIL:"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                    />
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                                <label class="col-form-label">SECONDARY E-MAIL ADDRESS:</label>
                            </div>
                            <div className="col-7">
                                <div class="custom-control custom-checkbox my-3">
                                    <input
                                        type="phone"
                                        name="SECONDARY_E-MAIL"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                    />
                                </div>
                            </div>
                    </div>
                    
                    </div>
                    <div className="col-md-6">
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">CONTACT TYPE:</label>
                        <div class="col-sm-9">
                            <input
                                type="text"
                                name="CONTACT TYPE"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>

                        <label class="col-sm-3 col-form-label">CONTACT NAME:</label>
                        <div class="col-sm-9">
                            <input
                                type="text"
                                name="CONTACT NAME:"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                    </div>
                    <div className=" form-group row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-4">
                                    <label class="col-form-label">PRIMARY PHONE #</label>
                                </div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="HOME" class="custom-control-input" value="HOME" id="HOME"/>
                                        <label class="custom-control-label" for="HOME">HOME</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="BUS" class="custom-control-input" value="BUS" id="BUS"/>
                                        <label class="custom-control-label" for="BUS">BUS</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="CELL" class="custom-control-input" value="CELL" id="CELL"/>
                                        <label class="custom-control-label" for="CELL">CELL</label>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="phone"
                                name="PRIMARY PHONE:"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                        <div className="col-sm-6">
                        <div className="row">
                                <div className="col-4">
                                    <label class="col-form-label">SECONDARY PHONE #</label>
                                </div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="HOME" class="custom-control-input" value="SECONDARY_HOME" id="SECONDARY_HOME"/>
                                        <label class="custom-control-label" for="SECONDARY_HOME">HOME</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="SECONDARY_BUS" class="custom-control-input" value="SECONDARY_BUS" id="SECONDARY_BUS"/>
                                        <label class="custom-control-label" for="SECONDARY_BUS">BUS</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox my-3">
                                        <input onChange={handleBlur} type="checkbox" name="SECONDARY_CELL" class="custom-control-input" value="SECONDARY_CELL" id="SECONDARY_CELL"/>
                                        <label class="custom-control-label" for="SECONDARY_CELL">CELL</label>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="phone"
                                name="PRIMARY PHONE:"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                                <label class="col-form-label">PRIMARY E-MAIL ADDRESS:</label>
                            </div>
                            <div className="col-8">
                                <div class="custom-control custom-checkbox my-3">
                                    <input
                                        type="phone"
                                        name="PRIMARY_E-MAIL:"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                    />
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                                <label class="col-form-label">SECONDARY E-MAIL ADDRESS:</label>
                            </div>
                            <div className="col-7">
                                <div class="custom-control custom-checkbox my-3">
                                    <input
                                        type="phone"
                                        name="SECONDARY_E-MAIL"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                    />
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <input type="button" value="Back" onClick={()=>setStep(5) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(7) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default ContactInformation;