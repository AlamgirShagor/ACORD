import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const GeneraInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
               <div className="row">
                    <div className="col-md-6">
                        <h5 className="mb-3">GENERAL INFORMATION</h5>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="row mb-1">
                            <div className="col-4" >
                                <label>AGENCY CUSTOMER ID:</label>
                            </div>
                            <div className="col-8">
                                <input type="text" name="AGENCY CUSTOMER ID" className="form-control" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
               </div>
               <div className="border p-2">
                   <div className="row">
                       <div className="col-11">
                           <h6>EXPLAIN ALL "YES" RESPONSES</h6>
                       </div>
                       <div className="col-1">
                           <h6>Y / N</h6>
                       </div>
                   </div>
                   <div className="row mb-2">
                       <div className="col-11">
                           <label>1a. IS THE APPLICANT A SUBSIDIARY OF ANOTHER ENTITY ?</label>
                           <div className="row ml-3">
                                <div className="col-5">
                                    <label>PARENT COMPANY NAME</label>
                                    <input type="text" name="PARENT COMPANY NAME" className="form-control" onChange={handleBlur}/>
                                </div>
                                <div className="col-5">
                                    <label>RELATIONSHIP DESCRIPTION</label>
                                    <input type="text" name="RELATIONSHIP DESCRIPTION" className="form-control" onChange={handleBlur}/>
                                </div>
                                <div className="col-2">
                                    <label>% OWNED</label>
                                    <input type="text" name="% OWNED" className="form-control" onChange={handleBlur}/>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="APPLICANT A SUBSIDIARY OF ANOTHER ENTITY" className="form-control" onChange={handleBlur}/>
                       </div>
                       
                   </div>

                   <div className="row mb-2">
                       <div className="col-11">
                           <label>1b. DOES THE APPLICANT HAVE ANY SUBSIDIARIES?</label>
                           <div className="row ml-3">
                                <div className="col-5">
                                    <label>SUBSIDIARY COMPANY NAME</label>
                                    <input type="text" name="PARENT COMPANY NAME" className="form-control" onChange={handleBlur}/>
                                </div>
                                <div className="col-5">
                                    <label>RELATIONSHIP DESCRIPTION</label>
                                    <input type="text" name="RELATIONSHIP DESCRIPTION" className="form-control" onChange={handleBlur}/>
                                </div>
                                <div className="col-2">
                                    <label>% OWNED</label>
                                    <input type="text" name="% OWNED_SUBSIDIARIES" className="form-control" onChange={handleBlur}/>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="APPLICANT HAVE ANY SUBSIDIARIES" className="form-control" onChange={handleBlur}/>
                       </div>
                       
                   </div>

                   <div className="row mb-2">
                       <div className="col-11">
                           <label>2. IS A FORMAL SAFETY PROGRAM IN OPERATION?</label>
                           <div className="row ml-3">
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                        <input onChange={handleBlur} type="checkbox" name="SAFETY MANUAL" class="custom-control-input" value="SAFETY MANUAL" id="SAFETY"/>
                                        <label class="custom-control-label" for="SAFETY">SAFETY MANUAL</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                        <input onChange={handleBlur} type="checkbox" name="SAFETY POSITION" class="custom-control-input" value="SAFETY POSITION" id="SAFETY POSITIONSAFETY"/>
                                        <label class="custom-control-label" for="SAFETY POSITION">SAFETY POSITION</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox">
                                        <input onChange={handleBlur} type="checkbox" name=" MONTHLY MEETINGS" class="custom-control-input" value=" MONTHLY MEETINGS" id=" MONTHLY MEETINGS"/>
                                        <label class="custom-control-label" for=" MONTHLY MEETINGS"> MONTHLY MEETINGS</label>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div class="custom-control custom-checkbox">
                                        <input onChange={handleBlur} type="checkbox" name="OSHAL" class="custom-control-input" value="OSHA" id="OSHA"/>
                                        <label class="custom-control-label" for="SAFETY">OSHA</label>
                                    </div>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="APPLICANT HAVE ANY SUBSIDIARIES" className="form-control" onChange={handleBlur}/>
                       </div>
                       
                   </div>

                   <div className="row mb-2">
                       <div className="col-11">
                           <label>3.  ANY EXPOSURE TO FLAMMABLES, EXPLOSIVES, CHEMICALS?</label>
                           <div className="row">
                                <div className="col">
                                    <textarea name="3.  ANY EXPOSURE" className="form-control" cols="30" rows="3" onChange={handleBlur}></textarea>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name=" ANY EXPOSURE" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>

                   <div className="row mb-2">
                       <div className="col-11">
                           <label>4. ANY OTHER INSURANCE WITH THIS COMPANY? (List policy numbers) </label>
                           <div className="row ml-2">
                                <div className="col-3">
                                    <h6 style={{fontSize: "14px"}}>LINE OF BUSINESS</h6>
                                    <input type="text" name=" LINE OF BUSINESS1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="text" name=" LINE OF BUSINESS2" className="form-control" onChange={handleBlur}/>
                                </div>
                                <div className="col-3">
                                    <h6 style={{fontSize: "14px"}}>POLICY NUMBER</h6>
                                    <input type="text" name=" POLICY NUMBER1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="text" name=" POLICY NUMBER2" className="form-control" onChange={handleBlur}/>
                                </div>

                                <div className="col-3">
                                    <h6 style={{fontSize: "14px"}}>LINE OF BUSINESS</h6>
                                    <input type="text" name=" LINE OF BUSINESS1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="text" name=" LINE OF BUSINESS2" className="form-control" onChange={handleBlur}/>
                                </div>
                                <div className="col-3">
                                    <h6 style={{fontSize: "14px"}}>POLICY NUMBER</h6>
                                    <input type="text" name=" POLICY NUMBER1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="text" name=" POLICY NUMBER2" className="form-control" onChange={handleBlur}/>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name=" ANY EXPOSURE" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>
                   <div className="row mb-2">
                       <div className="col-11">
                           <label>5. ANY POLICY OR COVERAGE DECLINED, CANCELLED OR NON-RENEWED DURING THE PRIOR THREE (3) YEARS FOR ANY PREMISES OR OPERATIONS? <br/> <strong>(Missouri Applicants - Do not answer this question)</strong> </label>
                           <div className="row ml-2">
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox">
                                        <input onChange={handleBlur} type="checkbox" name=" NON-PAYMENT" class="custom-control-input" value=" NON-PAYMENT" id="NON-PAYMENT"/>
                                        <label class="custom-control-label" for="NON-PAYMENT"> NON-PAYMENT</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input onChange={handleBlur} type="checkbox" name="NON-RENEWAL" class="custom-control-input" value=" NON-RENEWAL" id="NON-RENEWAL"/>
                                        <label class="custom-control-label" for="NON-RENEWAL">NON-RENEWAL</label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div class="custom-control custom-checkbox">
                                        <input onChange={handleBlur} type="checkbox" name="AGENT NO LONGER" class="custom-control-input" value=" NON-PAYMENT" id="AGENT NO LONGER"/>
                                        <label class="custom-control-label" for="AGENT NO LONGER">AGENT NO LONGER REPRESENTS CARRIER</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input onChange={handleBlur} type="checkbox" name="UNDERWRITING" class="custom-control-input" value="UNDERWRITING" id="UNDERWRITING"/>
                                        <label class="custom-control-label" for="UNDERWRITING">UNDERWRITING</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div class="custom-control custom-checkbox">
                                        <input onChange={handleBlur} type="checkbox" name="CONDITION CORRECTED" class="custom-control-input" value="CONDITION CORRECTED" id="CONDITION CORRECTED"/>
                                        <label class="custom-control-label" for="CONDITION CORRECTED">CONDITION CORRECTED (Describe):</label>
                                    </div>
                                    <div>
                                        <input type="text" name="CONDITION CORRECTED (Describe):" className="form-control" onChange={handleBlur} id=""/>
                                    </div>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name=" ANY EXPOSURE" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>
                   <div className="row mb-2">
                       <div className="col-11">
                           <label>6. ANY PAST LOSSES OR CLAIMS RELATING TO SEXUAL ABUSE OR MOLESTATION ALLEGATIONS, DISCRIMINATION OR NEGLIGENT HIRING?</label>
                           <div className="row">
                                <div className="col">
                                    <textarea name="6. ANY PAST LOSSES" className="form-control" cols="30" rows="3" onChange={handleBlur}></textarea>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="6. ANY PAST LOSSES" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>
                   <div className="row mb-2">
                       <div className="col-11">
                           <label>7.  DURING THE LAST FIVE YEARS (TEN IN RI), HAS ANY APPLICANT BEEN INDICTED FOR OR CONVICTED OF ANY DEGREE OF THE CRIME OF FRAUD,BRIBERY, ARSON OR ANY OTHER ARSON-RELATED CRIME IN CONNECTION WITH THIS OR ANY OTHER PROPERTY?
                            <br/>
                                <span class="bold">(In RI, this question must be answered by any applicant for property insurance. Failure to disclose the existence of an arson conviction is a misdemeanor punishable
                            by a sentence of up to one year of imprisonment)</span>
                            </label>
                           <div className="row">
                                <div className="col">
                                    <textarea name="DURING THE LAST FIVE YEARS" className="form-control" cols="30" rows="3" onChange={handleBlur}></textarea>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="DURING THE LAST FIVE YEARS" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>

                   <div className="row mb-2">
                       <div className="col-11">
                           <label>8. ANY UNCORRECTED FIRE AND/OR SAFETY CODE VIOLATIONS?</label>
                           <div className="row ml-2">
                                <div className="col-2">
                                    <h6 style={{fontSize: "14px"}}>OCCUR DATE</h6>
                                    <input type="date" name="OCCUR DATE1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="date" name="OCCUR DATE2" className="form-control mb-1" onChange={handleBlur}/>
                                </div>
                                <div className="col-4">
                                    <h6 style={{fontSize: "14px"}}>EXPLANATION</h6>
                                    <input type="text" name=" EXPLANATION1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="text" name=" EXPLANATION2" className="form-control" onChange={handleBlur}/>
                                </div>

                                <div className="col-4">
                                    <h6 style={{fontSize: "14px"}}>RESOLUTION</h6>
                                    <input type="text" name="RESOLUTION1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="text" name="RESOLUTION2" className="form-control" onChange={handleBlur}/>
                                </div>
                                <div className="col-2">
                                    <h6 style={{fontSize: "14px"}}>RESOLVE DATE</h6>
                                    <input type="date" name="RESOLVE DATE1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="date" name=" RESOLVE DATE2" className="form-control" onChange={handleBlur}/>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="ANY UNCORRECTED FIRE" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>
                   <div className="row mb-2">
                       <div className="col-11">
                           <label>9. HAS APPLICANT HAD A FORECLOSURE, REPOSSESSION, BANKRUPTCY OR FILED FOR BANKRUPTCY DURING THE LAST FIVE (5) YEARS?</label>
                           <div className="row ml-2">
                                <div className="col-2">
                                    <h6 style={{fontSize: "14px"}}>OCCUR DATE</h6>
                                    <input type="date" name="9.OCCUR DATE1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="date" name="9.OCCUR DATE2" className="form-control mb-1" onChange={handleBlur}/>
                                </div>
                                <div className="col-4">
                                    <h6 style={{fontSize: "14px"}}>EXPLANATION</h6>
                                    <input type="text" name="9.EXPLANATION1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="text" name="9.EXPLANATION2" className="form-control" onChange={handleBlur}/>
                                </div>

                                <div className="col-4">
                                    <h6 style={{fontSize: "14px"}}>RESOLUTION</h6>
                                    <input type="text" name="9.RESOLUTION1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="text" name="9.RESOLUTION2" className="form-control" onChange={handleBlur}/>
                                </div>
                                <div className="col-2">
                                    <h6 style={{fontSize: "14px"}}>RESOLVE DATE</h6>
                                    <input type="date" name="9.RESOLVE DATE1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="date" name="9.RESOLVE DATE2" className="form-control" onChange={handleBlur}/>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="HAS APPLICANT" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>

                   <div className="row mb-2">
                       <div className="col-11">
                           <label>10. HAS APPLICANT HAD A JUDGEMENT OR LIEN DURING THE LAST FIVE (5) YEARS?</label>
                           <div className="row ml-2">
                                <div className="col-2">
                                    <h6 style={{fontSize: "14px"}}>OCCUR DATE</h6>
                                    <input type="date" name="10.OCCUR DATE1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="date" name="10.OCCUR DATE2" className="form-control mb-1" onChange={handleBlur}/>
                                </div>
                                <div className="col-4">
                                    <h6 style={{fontSize: "14px"}}>EXPLANATION</h6>
                                    <input type="text" name="10.EXPLANATION1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="text" name="10.EXPLANATION2" className="form-control" onChange={handleBlur}/>
                                </div>

                                <div className="col-4">
                                    <h6 style={{fontSize: "14px"}}>RESOLUTION</h6>
                                    <input type="text" name="10.RESOLUTION1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="text" name="10.RESOLUTION2" className="form-control" onChange={handleBlur}/>
                                </div>
                                <div className="col-2">
                                    <h6 style={{fontSize: "14px"}}>RESOLVE DATE</h6>
                                    <input type="date" name="10.RESOLVE DATE1" className="form-control mb-1" onChange={handleBlur}/>
                                    <input type="date" name="10.RESOLVE DATE2" className="form-control" onChange={handleBlur}/>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="10. HAS APPLICANT" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>
                   <div className="row mb-2">
                       <div className="col-11">
                           <div className="row">
                               <div className="col-4">
                                <label>11. HAS BUSINESS BEEN PLACED IN A TRUST?</label>
                               </div>
                                <div className="col-2">
                                    <h6 style={{fontSize: "14px"}}> NAME OF TRUST:</h6>
                               
                                </div>
                                <div className="col-6">
                                    <input type="text" name=" NAME OF TRUST:" onChange={handleBlur} className="form-control" />
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="NAME OF TRUST" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>
                   <div className="row mb-2">
                       <div className="col-11">
                           <label>12. ANY FOREIGN OPERATIONS, FOREIGN PRODUCTS DISTRIBUTED IN USA, OR US PRODUCTS SOLD / DISTRIBUTED IN FOREIGN COUNTRIES?</label>
                            <h6 className="ml-2" style={{fontSize: "14px"}}>(If "YES", attach ACORD 815 for Liability Exposure and/or ACORD 816 for Property Exposure)</h6>
                       </div>
                       <div className="col-1">
                           <input type="text" name="12. ANY FOREIGN OPERATIONS" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>
                   <div className="row mb-2">
                       <div className="col-11">
                           <label>13. DOES APPLICANT HAVE OTHER BUSINESS VENTURES FOR WHICH COVERAGE IS NOT REQUESTED?</label>
                           <div className="row">
                                <div className="col">
                                    <textarea name="13. DOES APPLICANT HAVE OTHER BUSINESS" className="form-control" cols="30" rows="3" onChange={handleBlur}></textarea>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="13. DOES APPLICANT HAVE OTHER BUSINESS" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>
                   <div className="row mb-2">
                       <div className="col-11">
                           <label>14. DOES APPLICANT OWN / LEASE / OPERATE ANY DRONES? (If "YES", describe use)</label>
                           <div className="row">
                                <div className="col">
                                    <textarea name="13. DOES APPLICANT HAVE OTHER BUSINESS" className="form-control" cols="30" rows="2" onChange={handleBlur}></textarea>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="14. DOES APPLICANT OWN" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>
                   <div className="row mb-2">
                       <div className="col-11">
                           <label>15. DOES APPLICANT HIRE OTHERS TO OPERATE DRONES? (If "YES", describe use)</label>
                           <div className="row">
                                <div className="col">
                                    <textarea name="15. DOES APPLICANT HIRE" className="form-control" cols="30" rows="2" onChange={handleBlur}></textarea>
                                </div>
                           </div>
                       </div>
                       <div className="col-1">
                           <input type="text" name="15. DOES APPLICANT HIRE" className="form-control" onChange={handleBlur}/>
                       </div>
                   </div>
               </div>
               <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(9) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(11) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default GeneraInformation;