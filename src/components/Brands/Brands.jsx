import style from "./Brands.module.css";
import axios from "axios";
import Loading from "../Loading/Loading";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Brands() {
  let { id } = useParams();
  id;
  function getbrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }
  let { data, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: getbrands,
  });
  // const [brands, setBrands] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // function getBrands() {
  //   setIsLoading(true);

  //   return axios
  //     .get("https://ecommerce.routemisr.com/api/v1/brands")
  //     .then((response) => {
  //       setIsLoading(false);

  //       setBrands(response.data.data);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);

  //        (error);
  //     });
  // }
  // useEffect(() => {
  //   getBrands();
  // }, []);
  function specificBrands() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
      .then((data) => {
        data;
      })
      .catch((error) => {
        error;
      });
  }

  if (isLoading)
    return (
      <div className="flex justify-center items-center ">
        <Loading />
      </div>
    );
  return (
    <>
      <div className="container mx-auto">
        {" "}
        <h2 className=" font-bold py-4 mx-3 text-3xl">All Brands</h2>
        <div className="flex flex-wrap justify-center">
          {data?.data.data.map((brand) => (
            <Link
              key={brand._id}
              className={`w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/8 px-4 my-4 ${style.border} overflow-hidden rounded-lg hover:shadow-lg`}
            >
              <div className="border-2">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-auto"
                  style={{ maxHeight: "150px", objectFit: "contain" }}
                />
                <h3 className="text-center py-4">{brand.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
