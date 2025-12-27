export default function AuthHeader({ title }) {
  return (
    <>
      <div className="flex items-center justify-center space-x-3">
        <img src="Logo.png" alt="SIMS PPOB Logo" className="h-10" />
        <p className="font-semibold text-2xl md:text-3xl">SIMS-PPOB</p>
      </div>

      <p className="font-semibold text-2xl md:text-3xl">{title}</p>
    </>
  );
}
