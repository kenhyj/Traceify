export const submitSymptoms = (symptoms) => {
  return {
    type: 'SUBMIT_SYMPTOMS',
    selectedSymptoms: symptoms,
  };
};

export const selectedSymptom = (symptom) => {
  return {
    type: 'SELECTED_SYMPTOM',
    symptom,
  };
};

export const generateResult = () => {
  return {
    type: 'GENERATE_RESULT',
  };
};

export const hideResult = () => {
  return {
    type: 'HIDE_RESULT',
  };
};

export const retaketest = () => {
  return {
    type: 'RETAKE_TEST',
  };
};
