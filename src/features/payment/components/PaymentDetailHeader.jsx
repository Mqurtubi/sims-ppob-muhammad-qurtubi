export default function PaymentDetailHeader({ service }) {
  return (
    <div className="space-y-1">
      <p className="text-lg ">PemBayaran</p>
      <div className="flex space-x-5 items-center">
        <img src={service.service_icon} alt="" className="w-10" />
        <p className="font-semibold text-lg">{service.service_name} Prabayar</p>
      </div>
    </div>
  );
}
