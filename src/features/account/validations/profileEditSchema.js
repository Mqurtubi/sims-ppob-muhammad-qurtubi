import z from "zod";

const MAX_FILE_SIZE = 100 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png"];

const profileImageSchema = z.object({
  file: z
    .instanceof(File, { message: "File wajib diupload" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Ukuran gambar maksimal 100 KB",
    })
    .refine((file) => ACCEPTED_TYPES.includes(file.type), {
      message: "Format gambar harus JPG atau PNG",
    }),
});

const profileSchema = z.object({
  first_name: z.string().min(1, "Nama depan wajib diisi"),
  last_name: z.string().min(1, "Nama belakang wajib diisi"),
});
export { profileImageSchema, profileSchema };
