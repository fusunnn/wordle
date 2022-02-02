import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

export function hashWord(message: string) {
  const key = randomBytes(32);
  const iv = randomBytes(16);

  const cipher = createCipheriv("aes256", key, iv);

  const encryptedMessage =
    cipher.update(message, "utf8", "hex") + cipher.final("hex");
}
