import React from 'react';
import { Accordion } from 'react-bootstrap';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-lg-6 col-md-12 m-0">
                    <div className="faq-image">
                        <img className="w-100" src="https://templates.envytheme.com/fovia/default/assets/img/faq-img1.jpg" alt="" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-5 ps-0">
                    <p>Frequently Asked Question</p>
                    <h2 className="ps-2">Get Every Single Answers Here That You Want</h2>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>What doctor will I see?</strong></Accordion.Header>
                        <Accordion.Body>
                        All adults should have a primary care doctor. These are usually internal medicine (internists) or family medicine doctors. Getting an annual checkup can help your doctor spot health issues early on. Untreated conditions, such as high blood pressure, can lead to serious problems that are harder to treat.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><strong>My physician is a faculty member—what does that mean?</strong></Accordion.Header>
                        <Accordion.Body>
                        A faculty position is one in which an individual is hired by a school to help educate students. At the university or college level, you may be brought on to conduct research as well. ... Faculty members also include other education professionals like guidance counselors and librarians.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><strong>What is an academic medical center? </strong></Accordion.Header>
                        <Accordion.Body>
                        An academic medical center is a hospital that partners with teaching institutions to provide clinical care, education, and research. AMCs also: Are medical facilities with Joint Commission accreditation and a commitment to training future health care providers.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><strong>What is a medical student? </strong></Accordion.Header>
                        <Accordion.Body>
                        Medical Students are students training to become physicians. In the United States, undergraduate medical education consists of four years of study in an allopathic (MD degree) or osteopathic (DO degree) school of medicine.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><strong>How are residents supervised? </strong></Accordion.Header>
                        <Accordion.Body>
                        Direct Supervision: the supervising physician is physically present with the resident and patient. Indirect Supervision: With direct supervision immediately available – the supervising physician is physically within the hospital or other site of patient care, and is immediately available to provide Direct Supervision.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><strong>How good is the treatment facilities?</strong></Accordion.Header>
                        <Accordion.Body>
                        Controlling for salient client and treatment project characteristics, strong associations between length of stay in treatment and posttreatment abstinence rate were found in all three studies, suggesting that women's length of stay in residential treatment is a major determinant of treatment effectiveness.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQ;