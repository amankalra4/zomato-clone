import { useState, ChangeEvent } from "react";
import { Tabs, Tab } from "@material-ui/core";
import {
    DELIVERY_ICON_DISABLED,
    DELIVERY_ICON_ENABLED,
    DINEOUT_ICON_DISABLED,
    DINEOUT_ICON_ENABLED,
    NIGHTLIFE_ICON_DISABLED,
    NIGHTLIFE_ICON_ENABLED
} from "@constants/index";
import dynamic from "next/dynamic";
import CardSkeleton from "../card-skeletons";
// import DeliveryInfo from "./delivery-info";
import TabImage from "./tab-image";
import TabPanel from "./tab-panel";
import MyTabScrollButton from "./tab-scroll-button";

const DeliveryInfo = dynamic(() => import("./delivery-info"), {
    loading: () => <CardSkeleton arrayLength={4} />
});

const NightLife = dynamic(() => import("../night-life"), {
    loading: () => <CardSkeleton arrayLength={4} />
});

const DiningOut = dynamic(() => import("../dining-out"), {
    loading: () => <CardSkeleton arrayLength={4} />
});

type Disabled = {
    delivery: boolean;
    dine: boolean;
    nightLife: boolean;
};
export interface IScrollableTabsProps {
    showByCuisine?: boolean;
    queryKey?: string;
    isLocationPage?: boolean;
}

const ScrollableTabs = ({ showByCuisine = false, queryKey, isLocationPage = false }: IScrollableTabsProps) => {
    // const { area, cityName, countryName, cuisineId: cuisineIds } = useLocationInfo();
    const [value, setValue] = useState<number>(0);
    const [disabled, setDisabled] = useState<Disabled>({
        delivery: false,
        dine: true,
        nightLife: true
    });
    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
        // eslint-disable-next-line default-case
        switch (newValue) {
            case 0:
                setDisabled({ delivery: false, dine: true, nightLife: true });
                break;
            case 1:
                setDisabled({ delivery: true, dine: false, nightLife: true });
                break;
            case 2:
                setDisabled({ delivery: true, dine: true, nightLife: false });
                break;
        }
        setValue(newValue);
    };

    return (
        <div>
            <link rel="preload" href={DELIVERY_ICON_ENABLED} as="image" />
            <link rel="preload" href={DINEOUT_ICON_DISABLED} as="image" />
            <link rel="preload" href={NIGHTLIFE_ICON_DISABLED} as="image" />
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
                ScrollButtonComponent={MyTabScrollButton}
                style={{ margin: "20px 0" }}
            >
                {/* alternate way */}
                {/* eslint-disable-next-line max-len */}
                {/* {customTabArray.map((el, index) => <CustomTab key={el.label} nonTabValue={value} index={index} text={el.text!} label={el.label} />)} */}
                <Tab
                    label="Delivery"
                    icon={
                        <TabImage
                            path={!disabled.delivery ? DELIVERY_ICON_ENABLED : DELIVERY_ICON_DISABLED}
                            width="75"
                            height="55"
                            altText="Delivery"
                        />
                    }
                />
                <Tab
                    label="Dining Out"
                    icon={
                        <TabImage
                            path={!disabled.dine ? DINEOUT_ICON_ENABLED : DINEOUT_ICON_DISABLED}
                            width="65"
                            height="60"
                            altText="Dining Out"
                        />
                    }
                />
                <Tab
                    label="Night Life"
                    icon={
                        <TabImage
                            path={!disabled.nightLife ? NIGHTLIFE_ICON_ENABLED : NIGHTLIFE_ICON_DISABLED}
                            altText="Night Life"
                        />
                    }
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                <DeliveryInfo showByCuisine={showByCuisine} queryKey={queryKey} isLocationPage={isLocationPage} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DiningOut />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <NightLife />
            </TabPanel>
        </div>
    );
};

export default ScrollableTabs;
