import { useNavigate } from "react-router-dom";
export default function ServiceMenu({ dataService, loading }) {
  const navigate = useNavigate();
  if (loading) return <p className="text-center py-10">loading...</p>;

  return (
    <div className="px-5 md:px-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 justify-center">
      {dataService.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center group cursor-pointer"
          onClick={() => navigate(`/payment/${item.service_code}`)}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <img
              src={item.service_icon}
              alt={item.service_name}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="mt-2 text-xs md:text-sm font-medium wrap-break-words w-full">
            {item.service_name}
          </p>
        </div>
      ))}
    </div>
  );
}
