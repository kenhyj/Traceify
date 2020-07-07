db = db.getSiblingDB('traceify');
db.symptoms.drop();
db.symptoms.insertMany([
  {
    commonstate: {
      fever: false,
      'dry cough': false,
      tiredness: false,
    },
  },
  {
    rarestate: {
      'aches and pains': false,
      'sore throat': false,
      diarrhea: false,
      conjunctivitis: false,
      headache: false,
      'loss of taste': false,
      'loss of smell': false,
      'rash on skin': false,
      'discolouration of fingers or toes': false,
    },
  },
  {
    seriousstate: {
      'difficulty breathing or shortness of breath': false,
      'chest pain or pressure': false,
      'loss of speech': false,
      'loss of movement': false,
    },
  },
  {
    atriskstate: {
      'Older than 64': false,
      'Have Liver Disease': false,
      'Have HIV or immunocompromised': false,
      'Undergoing chemotherapy': false,
      Diabetic: false,
      'Undergoing dialysis': false,
      'BMI 40 and over': false,
      'In need of organ transplant': false,
    },
  },
]);
