import { useRouter } from "next/router";

const useLocationInfo = () => {
    const { query } = useRouter();
    const cityId: string = (query.cityId as string) ?? "11307";
    const cityName: string = (query.cityName as string) ?? "Jammu";
    const area: string = (query.area as string) ?? "Jammu";
    const cuisineId: string = query.cuisineId as string;
    const countryName: string = (query.countryName as string) ?? "India";
    return {
        cityId,
        cityName,
        area,
        cuisineId,
        countryName
    };
};

export default useLocationInfo;
