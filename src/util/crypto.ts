import { AES, enc } from "crypto-js";

export const encrypt = (text: string, secret: string) => {
  return AES.encrypt(text, secret).toString();
};

export const decrypt = (ciphertext: string, secret: string) => {
  const bytes = AES.decrypt(ciphertext, secret);
  return bytes.toString(enc.Utf8);
};
