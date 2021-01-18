import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const PremisesInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <h5 className="mb-3">PREMISES INFORMATION (Attach ACORD 823 for Additional Premises)</h5>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-3">
                                <label>LOC #</label>
                                <input
                                        type="text"
                                        name="LOC"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                                <label>BLD #</label>
                                <input
                                        type="text"
                                        name="BLD"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                            </div>
                            <div className="col-sm-7">
                                <label>STREET</label>
                                <input
                                        type="text"
                                        name="STREET"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                                <div className="row">
                                    <div className="col-6">
                                    <div className="row">
                                    <div className="col-2">
                                        <label>CITY:</label>
                                    </div>
                                    <div className="col-10">
                                    <input
                                            type="text"
                                            name="CITY"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-4">
                                        <label>COUNTY:</label>
                                    </div>
                                    <div className="col-8">
                                    <input
                                            type="text"
                                            name="COUNTY"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-6">
                                    <div className="row">
                                    <div className="col-4">
                                        <label>STATE:</label>
                                    </div>
                                    <div className="col-8">
                                    <input
                                            type="text"
                                            name="STATE"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-2">
                                        <label>ZIP:</label>
                                    </div>
                                    <div className="col-10">
                                    <input
                                            type="text"
                                            name="ZIP"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <label>CITY LIMITS</label>
                                <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="INSIDE" 
                                    value="INSIDE"/>
                                <label class="form-check-label" for="INSIDE">
                                    INSIDE
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="OUTSIDE" 
                                    value="OUTSIDE"/>
                                <label class="form-check-label" for="OUTSIDE">
                                OUTSIDE
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="other" 
                                    value=""/>
                                <input 
                                    class="form-control" 
                                    onChange={handleBlur}
                                    type="text" 
                                    name="CITY_LIMITS"
                                    id="other" 
                                    value=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-2">
                                <label>INTEREST</label>
                                <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="OWNER" 
                                    value="OWNER"/>
                                <label class="form-check-label" for="OWNER">
                                OWNER
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="TENANT" 
                                    value="TENANT"/>
                                <label class="form-check-label" for="TENANT">
                                TENANT
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="other" 
                                    value=""/>
                                <input 
                                    class="form-control" 
                                    onChange={handleBlur}
                                    type="text" 
                                    name="INTEREST-input" 
                                    id="other" 
                                    value=""/>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            <label># FULL TIME EMPL</label>
                                <input
                                        type="text"
                                        name="FULL TIME EMPL"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />

                                <label># PART TIME EMPL</label>
                                <input
                                        type="text"
                                        name="PART TIME EMP"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                            </div>
                            <div className="col-sm-7">
                            <div className="row">
                                <div className="col-6">
                                        <label>ANNUAL REVENUES:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="ANNUAL_REVENUES" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>OCCUPIED AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                    <input type="text" name="OCCUPIED AREA" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>OPEN TO PUBLIC AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                    <input type="text" name="OPEN_PUBLIC_AREA:" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>TOTAL BUILDING AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-1">
                                    <input type="text" name="TOTAL BUILDING AREA" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-4">
                                <label>DESCRIPTION OF OPERATIONS:</label>
                            </div>
                            <div className="col-8">
                                <input
                                type="text"
                                name="DESCRIPTION"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="row">
                            <div className="col-9">
                                    <label>ANY AREA LEASED TO OTHERS? Y / N</label>
                                </div>
                                <div className="col-3">
                                <div class="input-group mb-2">
                                    <input type="text" name="ANY AREA LEASED" class="form-control" onChange={handleBlur}></input>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-3">
                                <label>LOC #</label>
                                <input
                                        type="text"
                                        name="LOC"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                                <label>BLD #</label>
                                <input
                                        type="text"
                                        name="BLD"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                            </div>
                            <div className="col-sm-7">
                                <label>STREET</label>
                                <input
                                        type="text"
                                        name="STREET"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                                <div className="row">
                                    <div className="col-6">
                                    <div className="row">
                                    <div className="col-2">
                                        <label>CITY:</label>
                                    </div>
                                    <div className="col-10">
                                    <input
                                            type="text"
                                            name="CITY"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-4">
                                        <label>COUNTY:</label>
                                    </div>
                                    <div className="col-8">
                                    <input
                                            type="text"
                                            name="COUNTY"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-6">
                                    <div className="row">
                                    <div className="col-4">
                                        <label>STATE:</label>
                                    </div>
                                    <div className="col-8">
                                    <input
                                            type="text"
                                            name="STATE"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-2">
                                        <label>ZIP:</label>
                                    </div>
                                    <div className="col-10">
                                    <input
                                            type="text"
                                            name="ZIP"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <label>CITY LIMITS</label>
                                <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="INSIDE" 
                                    value="INSIDE"/>
                                <label class="form-check-label" for="INSIDE">
                                    INSIDE
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="OUTSIDE" 
                                    value="OUTSIDE"/>
                                <label class="form-check-label" for="OUTSIDE">
                                OUTSIDE
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="other" 
                                    value=""/>
                                <input 
                                    class="form-control" 
                                    onChange={handleBlur}
                                    type="text" 
                                    name="CITY_LIMITS"
                                    id="other" 
                                    value=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-2">
                                <label>INTEREST</label>
                                <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="OWNER" 
                                    value="OWNER"/>
                                <label class="form-check-label" for="OWNER">
                                OWNER
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="TENANT" 
                                    value="TENANT"/>
                                <label class="form-check-label" for="TENANT">
                                TENANT
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="other" 
                                    value=""/>
                                <input 
                                    class="form-control" 
                                    onChange={handleBlur}
                                    type="text" 
                                    name="INTEREST-input" 
                                    id="other" 
                                    value=""/>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            <label># FULL TIME EMPL</label>
                                <input
                                        type="text"
                                        name="FULL TIME EMPL"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />

                                <label># PART TIME EMPL</label>
                                <input
                                        type="text"
                                        name="PART TIME EMP"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                            </div>
                            <div className="col-sm-7">
                            <div className="row">
                                <div className="col-6">
                                        <label>ANNUAL REVENUES:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="ANNUAL_REVENUES" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>OCCUPIED AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                    <input type="text" name="OCCUPIED AREA" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>OPEN TO PUBLIC AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                    <input type="text" name="OPEN_PUBLIC_AREA:" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>TOTAL BUILDING AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-1">
                                    <input type="text" name="TOTAL BUILDING AREA" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-4">
                                <label>DESCRIPTION OF OPERATIONS:</label>
                            </div>
                            <div className="col-8">
                                <input
                                type="text"
                                name="DESCRIPTION"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="row">
                            <div className="col-9">
                                    <label>ANY AREA LEASED TO OTHERS? Y / N</label>
                                </div>
                                <div className="col-3">
                                <div class="input-group mb-2">
                                    <input type="text" name="ANY AREA LEASED" class="form-control" onChange={handleBlur}></input>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-3">
                                <label>LOC #</label>
                                <input
                                        type="text"
                                        name="LOC"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                                <label>BLD #</label>
                                <input
                                        type="text"
                                        name="BLD"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                            </div>
                            <div className="col-sm-7">
                                <label>STREET</label>
                                <input
                                        type="text"
                                        name="STREET"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                                <div className="row">
                                    <div className="col-6">
                                    <div className="row">
                                    <div className="col-2">
                                        <label>CITY:</label>
                                    </div>
                                    <div className="col-10">
                                    <input
                                            type="text"
                                            name="CITY"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-4">
                                        <label>COUNTY:</label>
                                    </div>
                                    <div className="col-8">
                                    <input
                                            type="text"
                                            name="COUNTY"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-6">
                                    <div className="row">
                                    <div className="col-4">
                                        <label>STATE:</label>
                                    </div>
                                    <div className="col-8">
                                    <input
                                            type="text"
                                            name="STATE"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-2">
                                        <label>ZIP:</label>
                                    </div>
                                    <div className="col-10">
                                    <input
                                            type="text"
                                            name="ZIP"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <label>CITY LIMITS</label>
                                <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="INSIDE" 
                                    value="INSIDE"/>
                                <label class="form-check-label" for="INSIDE">
                                    INSIDE
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="OUTSIDE" 
                                    value="OUTSIDE"/>
                                <label class="form-check-label" for="OUTSIDE">
                                OUTSIDE
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="other" 
                                    value=""/>
                                <input 
                                    class="form-control" 
                                    onChange={handleBlur}
                                    type="text" 
                                    name="CITY_LIMITS"
                                    id="other" 
                                    value=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-2">
                                <label>INTEREST</label>
                                <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="OWNER" 
                                    value="OWNER"/>
                                <label class="form-check-label" for="OWNER">
                                OWNER
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="TENANT" 
                                    value="TENANT"/>
                                <label class="form-check-label" for="TENANT">
                                TENANT
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="other" 
                                    value=""/>
                                <input 
                                    class="form-control" 
                                    onChange={handleBlur}
                                    type="text" 
                                    name="INTEREST-input" 
                                    id="other" 
                                    value=""/>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            <label># FULL TIME EMPL</label>
                                <input
                                        type="text"
                                        name="FULL TIME EMPL"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />

                                <label># PART TIME EMPL</label>
                                <input
                                        type="text"
                                        name="PART TIME EMP"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                            </div>
                            <div className="col-sm-7">
                            <div className="row">
                                <div className="col-6">
                                        <label>ANNUAL REVENUES:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="ANNUAL_REVENUES" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>OCCUPIED AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                    <input type="text" name="OCCUPIED AREA" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>OPEN TO PUBLIC AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                    <input type="text" name="OPEN_PUBLIC_AREA:" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>TOTAL BUILDING AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-1">
                                    <input type="text" name="TOTAL BUILDING AREA" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-4">
                                <label>DESCRIPTION OF OPERATIONS:</label>
                            </div>
                            <div className="col-8">
                                <input
                                type="text"
                                name="DESCRIPTION"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="row">
                            <div className="col-9">
                                    <label>ANY AREA LEASED TO OTHERS? Y / N</label>
                                </div>
                                <div className="col-3">
                                <div class="input-group mb-2">
                                    <input type="text" name="ANY AREA LEASED" class="form-control" onChange={handleBlur}></input>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-3">
                                <label>LOC #</label>
                                <input
                                        type="text"
                                        name="LOC"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                                <label>BLD #</label>
                                <input
                                        type="text"
                                        name="BLD"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                            </div>
                            <div className="col-sm-7">
                                <label>STREET</label>
                                <input
                                        type="text"
                                        name="STREET"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                                <div className="row">
                                    <div className="col-6">
                                    <div className="row">
                                    <div className="col-2">
                                        <label>CITY:</label>
                                    </div>
                                    <div className="col-10">
                                    <input
                                            type="text"
                                            name="CITY"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-4">
                                        <label>COUNTY:</label>
                                    </div>
                                    <div className="col-8">
                                    <input
                                            type="text"
                                            name="COUNTY"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-6">
                                    <div className="row">
                                    <div className="col-4">
                                        <label>STATE:</label>
                                    </div>
                                    <div className="col-8">
                                    <input
                                            type="text"
                                            name="STATE"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-2">
                                        <label>ZIP:</label>
                                    </div>
                                    <div className="col-10">
                                    <input
                                            type="text"
                                            name="ZIP"
                                            class="form-control mb-2"
                                            onChange={handleBlur}
                                    />
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <label>CITY LIMITS</label>
                                <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="INSIDE" 
                                    value="INSIDE"/>
                                <label class="form-check-label" for="INSIDE">
                                    INSIDE
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="OUTSIDE" 
                                    value="OUTSIDE"/>
                                <label class="form-check-label" for="OUTSIDE">
                                OUTSIDE
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="CITY_LIMITS" 
                                    id="other" 
                                    value=""/>
                                <input 
                                    class="form-control" 
                                    onChange={handleBlur}
                                    type="text" 
                                    name="CITY_LIMITS"
                                    id="other" 
                                    value=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-2">
                                <label>INTEREST</label>
                                <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="OWNER" 
                                    value="OWNER"/>
                                <label class="form-check-label" for="OWNER">
                                OWNER
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="TENANT" 
                                    value="TENANT"/>
                                <label class="form-check-label" for="TENANT">
                                TENANT
                                </label>
                                </div>
                                <div class="form-check my-2">
                                <input 
                                    class="form-check-input" 
                                    onChange={handleBlur}
                                    type="radio" 
                                    name="INTEREST" 
                                    id="other" 
                                    value=""/>
                                <input 
                                    class="form-control" 
                                    onChange={handleBlur}
                                    type="text" 
                                    name="INTEREST-input" 
                                    id="other" 
                                    value=""/>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            <label># FULL TIME EMPL</label>
                                <input
                                        type="text"
                                        name="FULL TIME EMPL"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />

                                <label># PART TIME EMPL</label>
                                <input
                                        type="text"
                                        name="PART TIME EMP"
                                        class="form-control mb-2"
                                        onChange={handleBlur}
                                />
                            </div>
                            <div className="col-sm-7">
                            <div className="row">
                                <div className="col-6">
                                        <label>ANNUAL REVENUES:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input type="text" name="ANNUAL_REVENUES" class="form-control" onChange={handleBlur}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>OCCUPIED AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                    <input type="text" name="OCCUPIED AREA" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>OPEN TO PUBLIC AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-2">
                                    <input type="text" name="OPEN_PUBLIC_AREA:" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                        <label>TOTAL BUILDING AREA:</label>
                                </div>
                                <div className="col-6">
                                <div class="input-group mb-1">
                                    <input type="text" name="TOTAL BUILDING AREA" class="form-control" onChange={handleBlur}/>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon1">SQ FT</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-4">
                                <label>DESCRIPTION OF OPERATIONS:</label>
                            </div>
                            <div className="col-8">
                                <input
                                type="text"
                                name="DESCRIPTION"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="row">
                            <div className="col-9">
                                    <label>ANY AREA LEASED TO OTHERS? Y / N</label>
                                </div>
                                <div className="col-3">
                                <div class="input-group mb-2">
                                    <input type="text" name="ANY AREA LEASED" class="form-control" onChange={handleBlur}></input>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <input type="button" value="Back" onClick={()=>setStep(6) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(8) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default PremisesInformation;