import z from "zod";

export const registerSchema = z
  .object({
    email: z
      .email({ error: "Email tidak sesuai format" })
      .min(1, "Email wajib diisi"),
    first_name: z.string().min(1, "Nama depan wajib diisi"),
    last_name: z.string().min(1, "Nama belakang wajib diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string().min(1, "Konfirmasi password wajib diisi"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password harus sama",
    path: ["confirmPassword"],
  });
