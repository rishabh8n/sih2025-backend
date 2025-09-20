import { Resend } from "resend";
import ApiError from "./ApiError";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTestEmail = async (email: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "<noreply@testdomain.com>",
      to: email,
      subject: "Test Email from Resend",
      html: "<h1>This is a test email sent using Resend!</h1>",
    });
    if (error) {
      console.log("Error sending test email: ", error);
      throw new ApiError(500, error.message);
    }
  } catch (error) {
    const e = error as Error;
    throw new ApiError(500, e.message || "Error sending test email");
  }
};
