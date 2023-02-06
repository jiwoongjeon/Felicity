import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {
  MainContainer,
  LoginContainer,
  Logo,
  Title,
  RadioWrapper,
  Label,
  LoginInput,
  PwInput,
  Icon,
  InputBox,
  UrlLink,
  Rowbox,
  PwLabel,
  TextLink,
  Rowbox2,
  SubmitButton,
  Signup,
  SignupLink,
  CheckboxWrapper,
  LabelRed,
  ConsentBox,
  Label1,
  reCapWrapper,
  SubmitButtonDisabled,
  
} from "./styles";

import RadioButton from "./Radiobox.js";
import LogoImg from '../../../Components/assets/Logo.png';
import ConsentForm from './consentform.pdf';
import { BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import RecaptchaWrapper from "react-google-recaptcha/lib/recaptcha-wrapper";


function RegistrationPage({ patientL, doctorL }) {
    const [radioValue, setRadio] = useState(true);
    const [value, setCheckbox] = useState(true);
    const [lang,setLang] = useState(true);
    const [consent,setConsent] = useState(false);
    const [captcha,setCaptcha] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    return (
        <MainContainer>
            <LoginContainer>
            <Logo src={LogoImg} />
            <Title>Registration </Title>
                {/* 
                <RadioWrapper>
                    <RadioButton
                        label="I'm a patient."
                        name="patient"
                        value={radioValue}
                        checked={radioValue}
                        onChange={({ target }) => {
                        console.log(target.value);
                        setRadio(Boolean(target.value));
                        }}
                    />
                    <RadioButton
                        label="I'm a doctor."
                        name="doctor"
                        value={!radioValue}
                        checked={!radioValue}
                        onChange={({ target }) => setRadio(!target.value)}
                    />
                </RadioWrapper> */}

                <Label> Enter Email </Label>
                <InputBox>
                    <Icon> <BsFillPersonFill /> </Icon>
                    <LoginInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputBox>

                <Rowbox>
                <PwLabel>Create Password </PwLabel>

                </Rowbox>
                <InputBox>
                <Icon> <HiLockClosed /> </Icon>
                <PwInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </InputBox>
                

                <Rowbox>
                <PwLabel>Confirm Password </PwLabel>
                </Rowbox>
                {password!=confirmedPassword && <LabelRed>Your confirmed password should match with the original one.</LabelRed>}
                <InputBox>
                <Icon> <HiLockClosed /> </Icon>
                <PwInput
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                />
                </InputBox>
                
                <RadioWrapper>
                    <RadioButton
                        label="English"
                        name="English"
                        value={lang}
                        checked={lang}
                        onChange={({ target }) => {setLang(Boolean(target.value));}}
                    />
                    <RadioButton
                        label="ພາສາລາວ"
                        name="ພາສາລາວ"
                        value={!lang}
                        checked={!lang}
                        onChange={({ target }) => setLang(!target.value)}
                    />
                </RadioWrapper>

                <Label1> Before signing up, you must agree to our patient consent form:</Label1>
                {lang && <ConsentBox>
                    By signing this form, I understand and agree with the following: 

                    Telehealth/Telemedicine involves the use of electronic communications to enable health care providers at different locations to share individual patient medical information for the purpose of improving patient care. Providers include properly licensed and volunteering medical practitioners from the United States. I agree to share my personal information for diagnosis, prescription, and follow-up. 

                    Telehealth/Telemedicine requires transmission via Internet of health information, which may include: 
                    • Progress reports, assessments, or other intervention-related documents 
                    • Videos, pictures, messages, audio and any digital form of data 

                    Information obtained during telemedicine that identifies me will not be given to anyone without my consent except for the purposes of treatment, education, and healthcare operations. By agreeing to use the telehealth/telemedicine services, I understand, agree, and expressly consent to Telepossible obtaining, using, storing, and disseminating to necessary third parties, information about me, including my image, as necessary to provide the telemedicine services. 

                    As with any Internet-based communication, I understand that there is a risk of security breach. Electronic systems used will incorporate network and software security protocols to protect the confidentiality of patient identification and imaging data and will include measures to safeguard the data and to ensure its integrity against intentional or unintentional corruption. 

                    Telepossible employee/provider(s) may also be present and have access to my information for the telemedicine session. This is so they can operate or repair the video or audio equipment used on-site at Ezekiel Center (subject to change). These persons will adhere to applicable privacy and security policies. 

                    I understand that technical difficulties may occur before or during the telehealth sessions and my appointment cannot be started or ended as intended. I hereby release and hold harmless Telepossible from any loss of data or information due to technical failures associated with the telemedicine service. 

                    I further understand that my provider’s advice, recommendations, and/or decisions may be based on factors not within his/her control, including incomplete or inaccurate data provided by me. Given the risk of misdiagnosis/mistreatment based on aforementioned factors, I hereby release and hold harmless Telepossible and its health care providers from legal liabilities arising from acts of ordinary negligence or omissions committed within the scope of their responsibilities. 

                    I hereby consent to the use of telehealth/telemedicine in the provision of care and the above terms and conditions. 
                    By signing below, I certify that I am 18 years of age or older, or otherwise legally authorized to consent. I have carefully read and understood the above statements. I understand that this informed consent will become a part of my medical record. 

                </ConsentBox>}

                {!lang && <ConsentBox>
                    ໂດຍການລົງນາມໃນແບບຟອມນີ້, ຂ້າພະເຈົ້າເຂົ້າໃຈ ແລະຕົກລົງເຫັນດີກັບຕໍ່ໄປນີ້:

                    Telehealth/Telemedicineກ່ຽວຂ້ອງກັບການນໍາໃຊ້ການສື່ສານທາງອີເລັກໂທຣນິກເພື່ອໃຫ້ຜູ້ໃຫ້ບໍລິການດ້ານສຸຂະພາບຢູ່ສະຖານທີ່ຕ່າງໆສາມາດແບ່ງປັນຂໍ້ມູນທາງການແພດຂອງຄົນເຈັບແຕ່ລະຄົນເພື່ອຈຸດປະສົງຂອງການປັບປຸງການດູແລຄົນເຈັບ. ຜູ້ໃຫ້ບໍລິການປະກອບມີຜູ້ປະຕິບັດການແພດທີ່ໄດ້ຮັບອະນຸຍາດຢ່າງຖືກຕ້ອງແລະອາສາສະຫມັກຈາກສະຫະລັດ. ຂ້ອຍຕົກລົງທີ່ຈະແບ່ງປັນຂໍ້ມູນສ່ວນຕົວຂອງຂ້ອຍສໍາລັບການວິນິດໄສ, ຕາມໃບສັ່ງແພດ, ແລະການຕິດຕາມ.

                    Telehealth/Telemedicine ຮຽກຮ້ອງໃຫ້ມີການສົ່ງຜ່ານອິນເຕີເນັດຂອງຂໍ້ມູນສຸຂະພາບ, ເຊິ່ງອາດຈະປະກອບມີ:
                    • ບົດລາຍງານຄວາມຄືບໜ້າ, ການປະເມີນ, ຫຼືເອກະສານທີ່ກ່ຽວຂ້ອງກັບການແຊກແຊງອື່ນໆ
                    • ວິດີໂອ, ຮູບພາບ, ຂໍ້ຄວາມ, ສຽງ ແລະຂໍ້ມູນໃນຮູບແບບດິຈິຕອນໃດໆ

                    ຂໍ້ມູນທີ່ໄດ້ຮັບໃນລະຫວ່າງ telemedicine ທີ່ລະບຸຕົວຂ້ອຍຈະບໍ່ຖືກມອບໃຫ້ໃຜໂດຍບໍ່ມີການຍິນຍອມເຫັນດີຂອງຂ້ອຍຍົກເວັ້ນສໍາລັບຈຸດປະສົງຂອງການປິ່ນປົວ, ການສຶກສາ, ແລະການປະຕິບັດງານດ້ານສຸຂະພາບ. ໂດຍການຕົກລົງທີ່ຈະໃຊ້ບໍລິການ telehealth/telemedicine, ຂ້າພະເຈົ້າເຂົ້າໃຈ, ຕົກລົງເຫັນດີ, ແລະຍິນຍອມຢ່າງຈະແຈ້ງຕໍ່ການໄດ້ຮັບ, ການນໍາໃຊ້, ເກັບຮັກສາ, ແລະເຜີຍແຜ່ Telepossible ກັບພາກສ່ວນທີສາມທີ່ຈໍາເປັນ, ຂໍ້ມູນກ່ຽວກັບຂ້າພະເຈົ້າ, ລວມທັງຮູບພາບຂອງຂ້າພະເຈົ້າ, ຕາມຄວາມຈໍາເປັນເພື່ອໃຫ້ບໍລິການ telemedicine.

                    ເຊັ່ນດຽວກັນກັບການສື່ສານຜ່ານອິນເຕີເນັດໃດກໍ່ຕາມ, ຂ້ອຍເຂົ້າໃຈວ່າມີຄວາມສ່ຽງຕໍ່ການລະເມີດຄວາມປອດໄພ. ລະບົບອີເລັກໂທຣນິກທີ່ໃຊ້ຈະລວມເອົາໂປຣໂຕຄໍຄວາມປອດໄພຂອງເຄືອຂ່າຍ ແລະຊອບແວເພື່ອປົກປ້ອງຄວາມລັບຂອງການລະບຸຕົວຕົນຂອງຄົນເຈັບ ແລະຂໍ້ມູນການຖ່າຍຮູບ ແລະຈະລວມເອົາມາດຕະການຕ່າງໆເພື່ອປົກປ້ອງຂໍ້ມູນ ແລະຮັບປະກັນຄວາມຊື່ສັດຕໍ່ກັບການສໍ້ລາດບັງຫຼວງໂດຍເຈດຕະນາ ຫຼືບໍ່ໄດ້ຕັ້ງໃຈ.

                    ພະນັກງານ/ຜູ້ໃຫ້ບໍລິການທາງໂທລະທັດອາດມີຢູ່ ແລະສາມາດເຂົ້າເຖິງຂໍ້ມູນຂອງຂ້ອຍໄດ້ສໍາລັບກອງປະຊຸມການແພດ. ນີ້ ແມ່ນ ເພື່ອ ໃຫ້ ເຂົາ ເຈົ້າ ສາ ມາດ ປະ ຕິ ບັດ ຫຼື ການ ສ້ອມ ແປງ ວິ ດີ ໂອ ຫຼື ອຸ ປະ ກອນ ສຽງ ທີ່ ໃຊ້ ຢູ່ ໃນ ເວັບ ໄຊ ຂອງ ສູນ Ezekiel (ອາດ ຈະ ມີ ການ ປ່ຽນ ແປງ ) . ບຸກຄົນເຫຼົ່ານີ້ຈະປະຕິບັດຕາມນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ ແລະຄວາມປອດໄພທີ່ກ່ຽວຂ້ອງ.

                    ຂ້ອຍເຂົ້າໃຈວ່າຄວາມຫຍຸ້ງຍາກທາງດ້ານເຕັກນິກອາດຈະເກີດຂຶ້ນກ່ອນ ຫຼືໃນລະຫວ່າງກອງປະຊຸມທາງໂທລະສັບ ແລະການນັດໝາຍຂອງຂ້ອຍບໍ່ສາມາດເລີ່ມຕົ້ນ ຫຼືສິ້ນສຸດໄດ້ຕາມທີ່ຕັ້ງໃຈໄວ້. ຂ້າພະເຈົ້າຂໍປ່ອຍ ແລະຖືເອົາ Telepossible ທີ່ບໍ່ມີອັນຕະລາຍຈາກການສູນເສຍຂໍ້ມູນ ຫຼືຂໍ້ມູນອັນເນື່ອງມາຈາກຄວາມລົ້ມເຫລວທາງດ້ານວິຊາການທີ່ກ່ຽວຂ້ອງກັບການບໍລິການທາງໂທລະເລກ.

                    ຂ້າພະເຈົ້າເຂົ້າໃຈຕື່ມອີກວ່າຄໍາແນະນໍາ, ຄໍາແນະນໍາ, ແລະ/ຫຼືການຕັດສິນໃຈຂອງຜູ້ໃຫ້ບໍລິການຂອງຂ້ອຍອາດຈະອີງໃສ່ປັດໃຈທີ່ບໍ່ຢູ່ໃນການຄວບຄຸມຂອງລາວ, ລວມທັງຂໍ້ມູນທີ່ບໍ່ຄົບຖ້ວນ ຫຼືບໍ່ຖືກຕ້ອງທີ່ສະໜອງໃຫ້ໂດຍຂ້ອຍ. ເນື່ອງຈາກຄວາມສ່ຽງຂອງການວິນິດໄສ / ການປະຕິບັດທີ່ບໍ່ຖືກຕ້ອງໂດຍອີງໃສ່ປັດໃຈທີ່ໄດ້ກ່າວມາຂ້າງເທິງ, ຂ້າພະເຈົ້າຂໍປ່ອຍແລະຖືເອົາ Telepossible ທີ່ບໍ່ມີອັນຕະລາຍແລະຜູ້ໃຫ້ບໍລິການດ້ານສຸຂະພາບຂອງມັນອອກຈາກຄວາມຮັບຜິດຊອບທາງດ້ານກົດຫມາຍທີ່ເກີດຂື້ນຈາກການກະທໍາຂອງການລະເລີຍທໍາມະດາຫຼືການລະເວັ້ນທີ່ເຮັດຢູ່ໃນຂອບເຂດຄວາມຮັບຜິດຊອບຂອງພວກເຂົາ.

                    ຂ້າພະເຈົ້າຍິນຍອມເຫັນດີໃຫ້ນຳໃຊ້ telehealth/ telemedicine ໃນການໃຫ້ການດູແລ ແລະເງື່ອນໄຂຂ້າງເທິງ.
                    ໂດຍການເຊັນຊື່ຂ້າງລຸ່ມນີ້, ຂ້ອຍຂໍຮັບຮອງວ່າຂ້ອຍມີອາຍຸ 18 ປີຂຶ້ນໄປ, ຫຼືອະນຸຍາດຕາມກົດໝາຍໃນການຍິນຍອມ. ຂ້າພະເຈົ້າໄດ້ອ່ານຢ່າງລະມັດລະວັງແລະເຂົ້າໃຈຂໍ້ຄວາມຂ້າງເທິງນີ້. ຂ້ອຍເຂົ້າໃຈວ່າການຍິນຍອມເຫັນດີນີ້ຈະກາຍເປັນສ່ວນໜຶ່ງຂອງບັນທຶກທາງການແພດຂອງຂ້ອຍ.

                </ConsentBox>}

                <RadioWrapper>
                    <RadioButton
                        label="I agree"
                        name="I agree"
                        value={consent}
                        checked={consent}
                        onChange={({ target }) => {setConsent(true);}}
                    />
                    <RadioButton
                        label="I disagree"
                        name="I disagree"
                        value={!consent}
                        checked={!consent}
                        onChange={({ target }) => setConsent(false)}
                    />
                </RadioWrapper>
                
                {/* {radioValue && <SubmitButton to={`/Patient/Home`} onClick={patientL({ email, password })}>Sign Up</SubmitButton>}
                {!radioValue && <SubmitButton to={`/Doctor/Home`} onClick={doctorL({ email, password })}>Sign Up</SubmitButton>} */}
                <reCapWrapper>
                    <ReCAPTCHA 
                            sitekey=""
                            onChange={({ target }) => setCaptcha(true)} 
                        />
                </reCapWrapper>
                {captcha && consent && <SubmitButton to={`/Patient/Home`} onClick={patientL({ email, password })}>Sign Up</SubmitButton>}
                {(!captcha || !consent) && <SubmitButtonDisabled to={`/Doctor/Home`} onClick={doctorL({ email, password })}>Sign Up</SubmitButtonDisabled>}

            </LoginContainer>
        </MainContainer>
    )

}

export default RegistrationPage;