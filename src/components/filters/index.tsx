/* eslint-disable function-paren-newline */
import { Chip } from "@material-ui/core";
import { Payment, Fastfood, Grade } from "@material-ui/icons";
import { createContext, ReactElement, useContext, useEffect, useMemo, useState, memo } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { CuisineRoot } from "@src/modules/interface/cuisine-interface";
import { getCuisines } from "@src/constants";
import { useRouter } from "next/router";
import orderBy from "lodash-es/orderBy";
import { chip, container } from "./styles";
import { FiltersContext } from "../tabs/delivery-info";
import CircularLoader from "../dynamic-component-loader/circular-loader";
import ModalLoader from "../dynamic-component-loader/modal-loader";

const FilterModal = dynamic(() => import("../filter-modal"), { loading: () => <ModalLoader /> });
const CuisineFilter = dynamic(() => import("../cuisine-filter"), { loading: () => <CircularLoader /> });
const CostPerPersonSlider = dynamic(() => import("../cost-per-person-filter"), { loading: () => <CircularLoader /> });
const RatingFilter = dynamic(() => import("../rating-filter"), { loading: () => <CircularLoader /> });

type dialogNames = "cuisines" | "cost" | "rating";

type ChipData = {
    label: "Cuisines" | "Cost per Person" | "Rating";
    icon: ReactElement;
    state: number;
    name: dialogNames;
};

const chipData: ChipData[] = [
    {
        label: "Cuisines",
        icon: <Fastfood />,
        state: 0,
        name: "cuisines"
    },
    {
        label: "Cost per Person",
        icon: <Payment />,
        state: 1,
        name: "cost"
    },
    {
        label: "Rating",
        icon: <Grade />,
        state: 2,
        name: "rating"
    }
];

export type CuisineInfo = {
    cuisineId: number;
    isChecked: boolean;
};

export type ICuisine = Record<string, CuisineInfo>;

export type ICuisinesContext = {
    data: ICuisine;
    isLoading: boolean;
};

type IHandle = {
    handleClick: (eventName: string, isChecked: boolean, cuisineId: number) => void;
};

export type orderType = "asc" | "desc";

type OrderObject = {
    cost: orderType;
    rating: orderType;
};

export const CuisineContext = createContext<IHandle & ICuisinesContext>({ data: {}, isLoading: true, handleClick: () => {} });
export const OrderContext = createContext<OrderObject>({ cost: "asc", rating: "desc" });

const CustomFilters = () => {
    const { query, push } = useRouter();
    const location: string = query.cityId as string;

    const { isLocationPage, cardData, cuisinesFromQuery, handleData, handleDataChange } = useContext(FiltersContext);

    const [open, setOpen] = useState({ cuisines: false, cost: false, rating: false });
    const [order, setOrder] = useState<OrderObject>({ cost: "asc", rating: "desc" });
    const [cuisines, setCuisines] = useState<ICuisinesContext>({} as ICuisinesContext);

    const { data: cuisineData, isLoading } = useQuery<CuisineRoot>("get-cuisines", () => getCuisines(location));

    useEffect(() => {
        if (!isLoading) {
            const checkBoxCustomObject: ICuisine = {} as ICuisine;
            cuisineData?.cuisines?.forEach((el) =>
                Object.assign(checkBoxCustomObject, {
                    [el.cuisine.cuisine_name]: {
                        isChecked: cuisinesFromQuery?.includes(el.cuisine.cuisine_id.toString()),
                        cuisineId: el.cuisine.cuisine_id
                    }
                })
            );
            setCuisines({ data: checkBoxCustomObject, isLoading });
        }
    }, [isLoading, cuisineData]);

    useEffect(() => {
        handleData(cuisines);
    }, [cuisines]);

    const handleClick = (eventName: string, isChecked: boolean, cuisineId: number) => {
        setCuisines({ isLoading, data: { ...cuisines.data, [eventName]: { isChecked, cuisineId } } });
    };

    const handleOpen = (dialogName: dialogNames) => {
        setOpen({ ...open, [dialogName]: true });
    };

    const handleClose = (dialogName: dialogNames) => {
        setOpen({ ...open, [dialogName]: false });
    };

    const handleApplyCuisinesFilter = () => {
        const filteredCuisines = Object.values(cuisines.data)
            .filter((el) => el.isChecked && el.cuisineId)
            .map((el) => el.cuisineId);
        push({
            query: {
                ...query,
                cuisineId: filteredCuisines.toString()
            }
        });
    };

    const handleApplyCostFilter = () => {
        const restaurants2 = cardData.map((el) => el);
        const filteredRestaurants = orderBy(restaurants2, (item) => item.average_cost_for_two, [order.cost]);
        handleDataChange(filteredRestaurants);
    };

    const handleApplyRateFilter = () => {
        const restaurants2 = cardData.map((el) => el);
        const filteredRestaurants = orderBy(restaurants2, (item) => item.user_rating.aggregate_rating, [order.rating]);
        handleDataChange(filteredRestaurants);
    };

    const handleClearCuisinesFilter = () => {
        const clearAllObject: ICuisine = {} as ICuisine;
        Object.entries(cuisines?.data).forEach((el) =>
            Object.assign(clearAllObject, {
                [el[0]]: {
                    isChecked: false,
                    cuisineId: el[1].cuisineId
                }
            })
        );
        setCuisines({ data: clearAllObject, isLoading });
    };

    const handleRatingChange = (value: orderType) => {
        setOrder({ ...order, rating: value });
    };

    const handleCostChange = (value: orderType) => {
        setOrder({ ...order, cost: value });
    };

    const cuisineValueProvider = useMemo(() => {
        return { data: cuisines.data, isLoading: cuisines.isLoading, handleClick };
    }, [cuisines]);

    const orderValueProvider = useMemo(() => {
        return { cost: order.cost, rating: order.rating };
    }, [order]);

    const sliceChipData = useMemo(() => {
        if (isLocationPage) {
            return [];
        }
        return [1, 3];
    }, [isLocationPage]);

    return (
        <CuisineContext.Provider value={cuisineValueProvider}>
            <OrderContext.Provider value={orderValueProvider}>
                <div className={container}>
                    <h4>Filters</h4>
                    {chipData.slice(...sliceChipData).map((el) => (
                        <Chip
                            key={el.label}
                            avatar={el.icon}
                            label={el.label}
                            className={chip}
                            onClick={() => handleOpen(el.name)}
                        />
                    ))}
                    {/* Check if below can be optimised */}
                    {/* Check on event bubbling and propagation */}
                    {open.cuisines && isLocationPage && (
                        <FilterModal
                            show={open.cuisines}
                            onHide={() => handleClose("cuisines")}
                            handleClearAll={handleClearCuisinesFilter}
                            handleApply={handleApplyCuisinesFilter}
                        >
                            <CuisineFilter />
                        </FilterModal>
                    )}
                    {open.cost && (
                        <FilterModal
                            show={open.cost}
                            onHide={() => handleClose("cost")}
                            handleApply={handleApplyCostFilter}
                            clearAllNotRequired
                        >
                            <CostPerPersonSlider handleCostChange={handleCostChange} />
                        </FilterModal>
                    )}
                    {open.rating && (
                        <FilterModal
                            show={open.rating}
                            onHide={() => handleClose("rating")}
                            handleApply={handleApplyRateFilter}
                            clearAllNotRequired
                        >
                            <RatingFilter handleRatingChange={handleRatingChange} />
                        </FilterModal>
                    )}
                </div>
            </OrderContext.Provider>
        </CuisineContext.Provider>
    );
};

export default memo(CustomFilters);
