
import * as z from "zod";

export const signupFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  contactNumber: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  semester: z.string({ required_error: "Please select a semester." }),
  batch: z.string({ required_error: "Please select your batch." }),
});

export type SignupFormValues = z.infer<typeof signupFormSchema>;
