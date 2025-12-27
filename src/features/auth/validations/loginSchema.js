import z from "zod";

export const loginSchema = z.object({
  email: z
    .email({ error: "Email tidak sesuai format" })
    .min(1, "Email wajib disini"),
  password: z.string().min(1, "Password wajib diisi"),
});
