import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../signup.module.css";
import { OnboardingStepOne } from "./OnboardingStepOne";
import { OnboardingStepTwo } from "./OnboardingStepTwo";
import { OnboardingStepThree } from "./OnboardingStepThree";
import { OnboardingCompleted } from "./OnboardingCompleted";
import UserService from "../../../helper/service/user.service";

export const OnboardingStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [followingTags, setFollowingTags] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);

  // get selected image path and set it to state
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const steps = ["Account profile", "Personalize account", "Wrapping up"];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const saveProfile = () => {
    UserService.saveProfile({
      twitter,
      linkedin,
      github,
      followingTags,
      followingUsers,
      name,
      selectedImage,
      email,
    }).then(() => handleNext());
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const isStepComplete = activeStep === steps.length;

  return (
    <React.Fragment>
      <div className={`${styles.container} min-h-screen`}>
        <section className='w-11/12 px-5 py-10 mx-auto bg-white rounded-sm md:p-10 min-h-96 md:w-2/3 lg:w-2/3 2xl:w-2/4 dark:bg-gray-800'>
          {isStepComplete || (
            <div className='pl-2 mb-3'>
              <h1 className='mb-3 text-xl font-bold dark:text-white'>
                Welcome onboard 👋
              </h1>
              <p className='mb-5'>
                Create a personalised account to save your favourite recipes and
                share them with your friends.
              </p>
            </div>
          )}
          <Box sx={{ width: "100%" }} className='p-0'>
            {isStepComplete || (
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  // if (isStepOptional(index)) {
                  //   labelProps.optional = (
                  //     <Typography variant='caption'>Optional</Typography>
                  //   );
                  // }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            )}
            {isStepComplete ? (
              <OnboardingCompleted />
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }} className='py-4 pl-2'>
                  Step {activeStep + 1}
                </Typography>

                <section>
                  {activeStep === 0 && (
                    <OnboardingStepOne
                      setSelectedImage={setSelectedImage}
                      selectedImage={selectedImage}
                      handleImageChange={handleImageChange}
                      setName={setName}
                      setEmail={setEmail}
                      setTwitter={setTwitter}
                      setLinkedin={setLinkedin}
                      setGithub={setGithub}
                    />
                  )}
                  {activeStep === 1 && (
                    <OnboardingStepTwo
                      setFollowingTags={setFollowingTags}
                      followingTags={followingTags}
                    />
                  )}
                  {activeStep === 2 && (
                    <OnboardingStepThree
                      followingUsers={followingUsers}
                      setFollowingUsers={setFollowingUsers}
                    />
                  )}
                </section>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  {activeStep === 0 || (
                    <Button
                      color='inherit'
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                  )}
                  <Box sx={{ flex: "1 1 auto" }} />
                  {isStepOptional(activeStep) && (
                    <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}

                  {activeStep === steps.length - 1 ? (
                    <button
                      onClick={saveProfile}
                      className='px-4 py-2 text-sm text-white bg-purple-700 rounded hover:bg-purple-800'
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className='px-4 py-2 text-sm text-white bg-purple-700 rounded hover:bg-purple-800'
                    >
                      Next
                    </button>
                  )}
                  {/* <button
                    onClick={handleNext}
                    className='px-4 py-2 text-sm text-white bg-purple-700 rounded hover:bg-purple-800'
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </button> */}
                </Box>
              </React.Fragment>
            )}
          </Box>
        </section>
      </div>
    </React.Fragment>
  );
};
