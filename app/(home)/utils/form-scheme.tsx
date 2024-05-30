import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  client: z.string().min(1, "Client name cannot be empty"),
  task: z.string().min(1, "Task description cannot be empty"),
  contact: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid contact number"),
});
