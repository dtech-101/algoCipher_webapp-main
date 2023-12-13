import {
  isValidEmail,
  isValidPassword,
  passwordSalts,
} from "@crispengari/regex-validator";

const useValidator = () => {
  const validEmail = (email: string): boolean => {
    return isValidEmail(email);
  };

  const validPassword = (password: string): boolean => {
    return isValidPassword(password, passwordSalts.M8L1D1S1);
  };

  const validNumber = (num: string) => {
    try {
      Number.parseInt(num);
      return true;
    } catch {
      return false;
    }
  };

  return {
    validEmail,
    validPassword,
    validNumber
  };
};
export default useValidator;
