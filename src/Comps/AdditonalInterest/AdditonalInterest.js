import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const AdditonalInterest = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <h5 className="mb-3">ADDITIONAL INTEREST (Not all fields apply to all scenarios - provide only the necessary data) Attach ACORD 45 for more Additional Interests</h5>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <h6>INTEREST</h6>
                        <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div class="custom-control custom-checkbox">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="ADDITIONAL INSURED" id="APARTMENTS"/>
                                    <label class="custom-control-label" for="ADDITIONAL_INSURED">ADDITIONAL INSURED</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="BREACH OF WARRANTY" id="BREACH _WARRANTY"/>
                                    <label class="custom-control-label" for="BREACH _WARRANTY">BREACH OF WARRANTY</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="CO-OWNER" id="CO-OWNER"/>
                                    <label class="custom-control-label" for="CO-OWNER">CO-OWNER</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="EMPLOYEE AS LESSOR" id="EMPLOYEE"/>
                                    <label class="custom-control-label" for="EMPLOYEE">EMPLOYEE AS LESSOR</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="LEASEBACK OWNER" id="LEASEBACK"/>
                                    <label class="custom-control-label" for="LEASEBACK">LEASEBACK OWNER</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="LOSS PAYABLE" id="LENDER'S"/>
                                    <label class="custom-control-label" for="LENDER'S">LENDER'S LOSS PAYABLE</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="row">
                                <div class="custom-control custom-checkbox my-2">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input " value="LIENHOLDER" id="LIENHOLDER"/>
                                    <label class="custom-control-label" for="LIENHOLDER">LIENHOLDER</label>
                                </div>
                                <div class="custom-control custom-checkbox my-2">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="LOSS PAYEE" id="LOSS_PAYEE"/>
                                    <label class="custom-control-label" for="LOSS_PAYEE">LOSS PAYEE</label>
                                </div>
                                <div class="custom-control custom-checkbox my-2">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="MORTGAGEE" id="MORTGAGEE"/>
                                    <label class="custom-control-label" for="MORTGAGEE">MORTGAGEE</label>
                                </div>
                                <div class="custom-control custom-checkbox my-2">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="OWNER" id="EMPLOYEE"/>
                                    <label class="custom-control-label" for="OWNER">OWNER</label>
                                </div>
                                <div class="custom-control custom-checkbox my-2">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="REGISTRANT" id="REGISTRANT"/>
                                    <label class="custom-control-label" for="REGISTRANT">REGISTRANT</label>
                                </div>
                                <div class="custom-control custom-checkbox my-2">
                                    <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="TRUSTEE" id="TRUSTEE"/>
                                    <label class="custom-control-label" for="TRUSTEE">TRUSTEE</label>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-sm-4">
                                <h6>NAME AND ADDRESS</h6>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    <div className="col-3">
                                        <label>RANK:</label>
                                        <input type="text" className="form-control" name="RANK" onChange={handleBlur} />
                                    </div>
                                    <div className="col-9">
                                    <h6>EVIDENCE</h6>
                                        <div className="row">
                                        <div className="col-5">
                                        <div class="custom-control custom-checkbox my-2">
                                             <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="CERTIFICATE" id="CERTIFICATE"/>
                                            <label class="custom-control-label" for="CERTIFICATE">CERTIFICATE</label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="custom-control custom-checkbox my-2">
                                             <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="POLICY" id="POLICY"/>
                                            <label class="custom-control-label" for="POLICY">POLICY</label>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div class="custom-control custom-checkbox my-2">
                                             <input onChange={handleBlur} type="checkbox" name="INTEREST" class="custom-control-input" value="SEND BILL" id="SEND BILL"/>
                                            <label class="custom-control-label" for="POLICY">SEND BILL</label>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <textarea name="NAME_ADDRESS" className="form-control mb-1" onChange={handleBlur} cols="30" rows="3"></textarea>
                        </div>
                        <div className="row">
                            <div className="col-sm-6"style={{paddingLeft: "0px"}}>
                                <div className="row mb-1">
                                    <div className="col-4">
                                        <label style={{fontSize: "12px"}}>REFERENCE / LOAN #</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="REFERENCE" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label style={{fontSize: "12px"}} >LIEN AMOUNT:</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="LIEN_AMOUNT" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6" style={{paddingRight: "0px"}}>
                                <div className="row mb-1">
                                    <div className="col-4" >
                                        <label style={{fontSize: "12px"}}>INTEREST END DATE:</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="INTEREST END DATE" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <label style={{fontSize: "12px"}} >PHONE (A/C, No, Ext):</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="PHONE (A/C, No, Ext):" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="row d-flex justify-content-center">
                            <h6 className="text-center">INTEREST IN ITEM NUMBER</h6>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="row mb-1">
                                    <div className="col-4" >
                                        <label style={{fontSize: "14px"}}  >LOCATION:</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="LOCATION" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-4" >
                                        <label style={{fontSize: "14px"}}  >VEHICLE:</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="VEHICLE" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-4" >
                                        <label style={{fontSize: "14px"}}  >AIRPORT:</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="AIRPORT" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-4" >
                                        <label style={{fontSize: "14px"}}  >ITEM CLASS:</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="ITEM CLASS" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="row mb-1">
                                    <div className="col-4" >
                                        <label style={{fontSize: "14px"}} >BUILDING:</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="BUILDING" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-4" >
                                        <label style={{fontSize: "14px"}}  >BOAT:</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="BOAT" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-4" >
                                        <label style={{fontSize: "14px"}}  >AIRCRAFT:</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="AIRCRAFT" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-4" >
                                        <label style={{fontSize: "14px"}}  >ITEM:</label>
                                    </div>
                                    <div className="col-8">
                                        <input type="text" name="ITEM" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label>ITEM DESCRIPTION</label>
                                 <input type="text" name="ITEM_DESCRIPTION" className="form-control" onChange={handleBlur}/>
                            </div>
                            <div className="col">
                                <label style={{fontSize: "14px"}}  >FAX (A/C, No):</label>
                                <input type="text" name="FAX" className="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-2">
                        <div className="col-md-6">
                            <div className="row mb-1">
                                    <div className="col-2" >
                                        <label style={{fontSize: "14px"}}  >REASON FOR INTEREST:</label>
                                    </div>
                                    <div className="col-10">
                                        <input type="text" name="REASON" className="form-control" onChange={handleBlur}/>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row mb-1">
                                    <div className="col-2" >
                                        <label style={{fontSize: "14px"}}  >E-MAIL ADDRESS:</label>
                                    </div>
                                    <div className="col-10">
                                        <input type="text" name="E-MAIL ADDRESS" className="form-control" onChange={handleBlur}/>
                                    </div>
                            </div>
                        </div>
                </div>
                <div class="d-flex justify-content-between">
                    <input type="button" value="Back" onClick={()=>setStep(8) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(10) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default AdditonalInterest;