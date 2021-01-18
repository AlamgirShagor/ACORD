import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'
const Attachmendts = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <h5 className="mb-3">ATTACHMENTS</h5>
                <hr/>
                <div className="form-row">
                    <div className="col-md-4">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="ACCOUNTS_RECEIVABLE" class="custom-control-input" value="ACCOUNTS RECEIVABLE / VALUABLE PAPERS" id="ACCOUNTS_RECEIVABLE"/>
                            <label class="custom-control-label" for="ACCOUNTS_RECEIVABLE">ACCOUNTS RECEIVABLE / VALUABLE PAPERS</label>
                        </div>

                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="ADDITIONAL_INTEREST" class="custom-control-input" value="ADDITIONAL INTEREST SCHEDULE" id="ADDITIONAL_INTEREST"/>
                            <label class="custom-control-label" for="ADDITIONAL_INTEREST">ADDITIONAL INTEREST SCHEDULE</label>
                        </div>

                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="ADDITIONAL_PREMISES" class="custom-control-input" value="ADDITIONAL PREMISES INFORMATION SCHEDULE" id="ADDITIONAL_PREMISES"/>
                            <label class="custom-control-label" for="ADDITIONAL_PREMISES">ADDITIONAL PREMISES INFORMATION SCHEDULE</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="APARTMENT_BUILDING" class="custom-control-input" value="APARTMENT BUILDING SUPPLEMENT" id="APARTMENT_BUILDING"/>
                            <label class="custom-control-label" for="APARTMENT_BUILDING">APARTMENT BUILDING SUPPLEMENT</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="CONDO_ASSN" class="custom-control-input" value="CONDO ASSN BYLAWS (for D&O Coverage only)" id="CONDO_ASSN"/>
                            <label class="custom-control-label" for="CONDO_ASSN">CONDO ASSN BYLAWS (for D&O Coverage only)</label>
                        </div>

                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="CONTRACTORS_SUPPLEMENT" class="custom-control-input" value="CONTRACTORS_SUPPLEMENT" id="CONTRACTORS_SUPPLEMENT"/>
                            <label class="custom-control-label" for="CONTRACTORS_SUPPLEMENT">CONTRACTORS SUPPLEMENT</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="COVERAGES_SCHEDULE" class="custom-control-input" value="COVERAGES SCHEDULE" id="COVERAGES_SCHEDULE"/>
                            <label class="custom-control-label" for="COVERAGES_SCHEDULE">COVERAGES SCHEDULE</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="DEALERS_SECTION" class="custom-control-input" value="DEALERS SECTION" id="DEALERS_SECTION"/>
                            <label class="custom-control-label" for="DEALERS_SECTION">DEALERS SECTION</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="DRIVER_INFORMATION" class="custom-control-input" value="DRIVER INFORMATION SCHEDULE" id="DRIVER_INFORMATION"/>
                            <label class="custom-control-label" for="DRIVER_INFORMATION">DRIVER INFORMATION SCHEDULE</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="ELECTRONIC_DATA" class="custom-control-input" value="ELECTRONIC DATA PROCESSING SECTION" id="ELECTRONIC_DATA"/>
                            <label class="custom-control-label" for="ELECTRONIC_DATA">ELECTRONIC DATA PROCESSING SECTION</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="GLASS_SIGN" class="custom-control-input" value="GLASS AND SIGN SECTION" id="GLASS_SIGN"/>
                            <label class="custom-control-label" for="GLASS_SIGN">GLASS AND SIGN SECTION</label>
                        </div>

                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="AHOTEL_MOTEL" class="custom-control-input" value="HOTEL / MOTEL SUPPLEMENT" id="HOTEL_MOTEL"/>
                            <label class="custom-control-label" for="HOTEL_MOTEL">HOTEL / MOTEL SUPPLEMENT</label>
                        </div>

                        <div class="custom-control custom-checkbox my-3">
                            <input type="checkbox" name="INSTALLATION" class="custom-control-input" value="INSTALLATION / BUILDERS RISK SECTION" id="INSTALLATION"/>
                            <label class="custom-control-label" for="INSTALLATION">INSTALLATION / BUILDERS RISK SECTION</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="INTERNATIONAL_LIABILITY" class="custom-control-input" value="INTERNATIONAL LIABILITY EXPOSURE SUPPLEMENT" id="INTERNATIONAL_LIABILITY"/>
                            <label class="custom-control-label" for="INTERNATIONAL_LIABILITY">INTERNATIONAL LIABILITY EXPOSURE SUPPLEMENT</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="INTERNATIONAL_PROPERTY" class="custom-control-input" value="INTERNATIONAL PROPERTY EXPOSURE SUPPLEMENT" id="INTERNATIONAL_PROPERTY"/>
                            <label class="custom-control-label" for="INTERNATIONAL_PROPERTY">INTERNATIONAL PROPERTY EXPOSURE SUPPLEMENT</label>
                        </div>

                        <div class="custom-control custom-checkbox my-3">
                            <input type="checkbox" name="LOSS_SUMMARY" class="custom-control-input" value="LOSS SUMMARY" id="LOSS_SUMMARY"/>
                            <label class="custom-control-label" for="LOSS_SUMMARY">LOSS SUMMARY</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="OPEN_CARGO_SECTION" class="custom-control-input" value="OPEN CARGO SECTION" id="OPEN_CARGO_SECTION"/>
                            <label class="custom-control-label" for="OPEN_CARGO_SECTION">OPEN CARGO SECTION</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="PREMIUM_PAYMENT" class="custom-control-input" value="PREMIUM PAYMENT SUPPLEMENT" id="PREMIUM_PAYMENT"/>
                            <label class="custom-control-label" for="PREMIUM_PAYMENT">PREMIUM PAYMENT SUPPLEMENT</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input type="checkbox" name="PROFESSIONAL" class="custom-control-input" value="PROFESSIONAL LIABILITY SUPPLEMENT" id="PROFESSIONAL"/>
                            <label class="custom-control-label" for="PROFESSIONAL">PROFESSIONAL LIABILITY SUPPLEMENT</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="RESTAURANT" class="custom-control-input" value="RESTAURANT / TAVERN SUPPLEMENT" id="RESTAURANT"/>
                            <label class="custom-control-label" for="RESTAURANT">RESTAURANT / TAVERN SUPPLEMENT</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="STATEMENT" class="custom-control-input" value="STATEMENT / SCHEDULE OF VALUES" id="STATEMENT"/>
                            <label class="custom-control-label" for="STATEMENT">STATEMENT / SCHEDULE OF VALUES</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="STATE_SUPPLEMENT" class="custom-control-input" value="STATE SUPPLEMENT (If applicable)" id="STATE_SUPPLEMENT"/>
                            <label class="custom-control-label" for="STATE_SUPPLEMENT">STATE SUPPLEMENT (If applicable)</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="VACANT_BUILDING" class="custom-control-input" value="VACANT BUILDING SUPPLEMENT" id="VACANT_BUILDING"/>
                            <label class="custom-control-label" for="VACANT_BUILDING">VACANT BUILDING SUPPLEMENT</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="VEHICLE_SCHEDULE" class="custom-control-input" value="VEHICLE SCHEDULE" id="VEHICLE_SCHEDULE"/>
                            <label class="custom-control-label" for="VEHICLE_SCHEDULE">VEHICLE SCHEDULE</label>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <input type="button" value="Back" onClick={()=>setStep(2) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(4) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default Attachmendts;