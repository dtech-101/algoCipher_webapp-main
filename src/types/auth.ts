export interface IPasswordResetPayload {
  email: string;
}

export interface IValidateOtpCodePayload {
  userId: string;
  code: string;
}

export interface ICompletePasswordResetPayload {
  userId: string;
  code: string;
  password: string;
}

export interface IStartRegistrationPayload {
  email: string;
}

export interface ICompleteRegistrationPayload {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    code: string
}