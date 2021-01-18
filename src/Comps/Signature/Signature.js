import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const Signature = ({handleBlur,handleSubmit}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row mb-2">
                    <div className="col">
                    <h5>LOSS HISTORY</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div class="custom-control custom-checkbox my-3">
                        <input onChange={handleBlur} type="checkbox" name="Copy of the Notice" class="custom-control-input" value="Copy of the Notice" id="Copy of the Notice"/>
                        <label class="custom-control-label" for="Copy of the Notice">Copy of the Notice of Information Practices (Privacy) has been given to the applicant. (Not required in all states, contact your agent or broker for your state's requirements.)</label>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="lead text-justify"  style={{lineHeight: "30px"}}>
                        PERSONAL INFORMATION ABOUT YOU, INCLUDING INFORMATION FROM A CREDIT OR OTHER INVESTIGATIVE REPORT, MAY BE COLLECTED FROM PERSONS OTHER THAN YOU IN CONNECTION WITH THIS APPLICATION FOR INSURANCE AND SUBSEQUENT AMENDMENTS AND RENEWALS. SUCH INFORMATION AS WELL AS OTHER PERSONAL AND PRIVILEGED INFORMATION COLLECTED BY US OR OUR AGENTS MAY IN CERTAIN CIRCUMSTANCES BE DISCLOSED TO THIRD PARTIES WITHOUT YOUR AUTHORIZATION CREDIT SCORING INFORMATION MAY BE USED TO HELP DETERMINE EITHER YOUR ELIGIBILITY FOR INSURANCE OR THE
                        PREMIUM YOU WILL BE CHARGED. WE MAY USE A THIRD PARTY IN CONNECTION WITH THE DEVELOPMENT OF YOUR SCORE. YOU MAY HAVE THE RIGHT TO REVIEW YOUR PERSONAL INFORMATION IN OUR FILES AND REQUEST CORRECTION OF ANY INACCURACIES. YOU MAY ALSO HAVE THE RIGHT TO REQUEST IN WRITING THAT WE CONSIDER EXTRAORDINARY LIFE CIRCUMSTANCES IN CONNECTION WITH THE DEVELOPMENT OF YOUR CREDIT SCORE. THESE RIGHTS MAY BE LIMITED IN SOME STATES. PLEASE CONTACT YOUR AGENT OR BROKER TO LEARN HOW THESE RIGHTS MAY APPLY IN YOUR STATE OR FOR INSTRUCTIONS ON HOW TO SUBMIT A REQUEST TO US FOR A MORE DETAILED DESCRIPTION OF YOUR RIGHTS AND OUR PRACTICES REGARDING PERSONAL INFORMATION.
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <span className="lead text-justify" >(Not applicable in AZ, CA, DE, KS, MA, MN, ND, NY, OR, VA, or WV. Specific ACORD 38s are available for applicants in these states.)</span>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col">
                                <label>(Applicant's Initials):</label>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" onChange={handleBlur} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                    <p className="lead text-justify" ><strong>Applicable in AL, AR, DC, LA, MD, NM, RI and WV:</strong> Any person who knowingly (or willfully)* presents a false or fraudulent claim for payment of a loss or benefit or knowingly (or willfully)* presents false information in an application for insurance is guilty of a crime and may be subject to fines and confinement in prison. *Applies in MD Only.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p className="lead text-justify"><strong>Applicable in CO:</strong> It is unlawful to knowingly provide false, incomplete, or misleading facts or information to an insurance company for the purpose of defrauding or attempting to defraud the company. Penalties may include imprisonment, fines, denial of insurance and civil damages. Any insurance company or agent of an insurance company who knowingly provides false, incomplete, or misleading facts or information to a policyholder or claimant for the purpose of defrauding or attempting to defraud the policyholder or claimant with regard to a settlement or award payable from insurance proceeds shall be reported to the Colorado Division of Insurance within the Department of Regulatory Agencies.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p className="lead text-justify"><strong>Applicable in FL and OK:</strong> Any person who knowingly and with intent to injure, defraud, or deceive any insurer files a statement of claim or an application containing any false, incomplete, or misleading information is guilty of a felony (of the third degree)*. *Applies in FL Only.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p className="lead text-justify"><strong>Applicable in KS:</strong> Any person who, knowingly and with intent to defraud, presents, causes to be presented or prepares with knowledge or belief that it will be presented to or by an insurer, purported insurer, broker or any agent thereof, any written statement as part of, or in support of, an application for the issuance of, or the rating of an insurance policy for personal or commercial insurance, or a claim for payment or other benefit pursuant to an insurance policy for commercial or personal insurance which such person knows to contain materially false information concerning any fact material thereto; or conceals, for the purpose of misleading, information concerning any fact material thereto commits a fraudulent insurance act.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p className="lead text-justify"><strong>Applicable in KY, NY, OH and PA: </strong> Any person who knowingly and with intent to defraud any insurance company or other person files an application for insurance or statement of claim containing any materially false information or conceals for the purpose of misleading, information concerning any fact material thereto commits a fraudulent insurance act, which is a crime and subjects such person to criminal and civil penalties (not to exceed five thousand dollars and the stated value of the claim for each such violation)*. *Applies in NY Only.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p className="lead text-justify"><strong>Applicable in ME, TN, VA and WA: </strong> It is a crime to knowingly provide false, incomplete or misleading information to an insurance company for the purpose of defrauding the company. Penalties (may)* include imprisonment, fines and denial of insurance benefits. *Applies in ME Only.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p className="lead text-justify"><strong>Applicable in NJ: </strong> Any person who includes any false or misleading information on an application for an insurance policy is subject to criminal and civil penalties</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p className="lead text-justify"><strong>Applicable in OR:</strong> Any person who knowingly and with intent to defraud or solicit another to defraud the insurer by submitting an application containing a false statement as to any material fact may be violating state law.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <p className="lead text-justify"><strong>Applicable in PR: </strong> Any person who knowingly and with the intention of defrauding presents false information in an insurance application, or presents, helps, or causes the presentation of a fraudulent claim for the payment of a loss or any other benefit, or presents more than one claim for the same damage or loss,shall incur a felony and, upon conviction, shall be sanctioned for each violation by a fine of not less than five thousand dollars ($5,000) and not more than ten thousand dollars ($10,000), or a fixed term of imprisonment for three (3) years, or both penalties. Should aggravating circumstances [be] present, the penalty thus established may be increased to a maximum of five (5) years, if extenuating circumstances are present, it may be reduced to a minimum of two (2) years.</p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col">
                    <p className="lead text-justify">
                    THE UNDERSIGNED IS AN AUTHORIZED REPRESENTATIVE OF THE APPLICANT AND REPRESENTS THAT REASONABLE INQUIRY HAS BEEN MADE TO OBTAIN THE ANSWERS TO QUESTIONS ON THIS APPLICATION. HE/SHE REPRESENTS THAT THE ANSWERS ARE TRUE, CORRECT AND COMPLETE TO THE BEST OF HIS/HER KNOWLEDGE.
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="" className="bold">PRODUCER'S SIGNATURE</label>
                        <input type="text" name="PRODUCER'S SIGNATURE" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="bold">PRODUCER'S NAME (Please Print) </label>
                        <input type="text" name="PRODUCER'S NAME (Please Print) " className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="bold">STATE PRODUCER LICENSE NO (Required in Florida)</label>
                        <input type="text" name="PRODUCER'S SIGNATURE" className="form-control" onChange={handleBlur}/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="" className="bold">APPLICANT'S SIGNATURE</label>
                        <input type="text" name="APPLICANT'S SIGNATURE" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="" className="bold">DATE</label>
                        <input type="date" name="DATE" className="form-control" onChange={handleBlur}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="" className="bold">NATIONAL PRODUCER NUMBER</label>
                        <input type="text" name="NATIONAL PRODUCER NUMBER" className="form-control" onChange={handleBlur}/>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(14) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Submit" onClick={handleSubmit} className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default Signature;