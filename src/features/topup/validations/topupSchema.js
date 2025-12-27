import z from "zod";

export const topupSchema = z.object({
  nominal: z.preprocess(
    (val) => {
      if (typeof val === "string") {
        return Number(val.replace(/\D/g, ""));
      }
      return val;
    },
    z
      .number({
        invalid_type_error: "Nominal harus berupa angka",
      })
      .min(10000, "Minimal top up Rp10.000")
      .max(1000000, "Maksimal top up Rp1.000.000")
  ),
});
