import * as yup from 'yup';

const getSchema = yup.object().shape({
  investmentDate: yup.date(),
  cdbRate: yup.number(),
  currentDate: yup.date(),
});

export default getSchema;
