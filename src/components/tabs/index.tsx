import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  TabScrollButton,
  withStyles
} from "@material-ui/core";
import Image from "next/image";
import {
  DELIVERY_ICON_DISABLED,
  DELIVERY_ICON_ENABLED,
  DINEOUT_ICON_DISABLED,
  DINEOUT_ICON_ENABLED,
  NIGHTLIFE_ICON_DISABLED,
  NIGHTLIFE_ICON_ENABLED
} from "@src/constants";
import MediaCard from "@src/modules/restaurant-cards";
import { changeToCamelCase } from "@src/modules/camel-case";
import useDevice from "@src/custom-hooks/use-is-Phone";
import classes from "./style.module.scss";
import FirstOrderSection from "../first-order";
import { RestaurantRootInterface } from "../../modules/interface/restuarant";
import CustomFilters from "../filters";

interface TabPanelProps {
  text?: string;
  index: any;
  value: any;
  children?: React.ReactNode;
}
const TabPanel = (props: TabPanelProps) => {
  const { value, index, children, text } = props;
  return (
    <div>
      {value === index && (
        <Box>
          <Typography>{typeof text === "string" ? text : children}</Typography>
        </Box>
      )}
    </div>
  );
};

const MyTabScrollButton = withStyles((theme: any) => ({
  root: {
    width: 28,
    overflow: "hidden",
    transition: "width 0.5s",
    "&.Mui-disabled": {
      width: 0
    }
  }
}))(TabScrollButton);

type Disabled = {
  delivery: boolean;
  dine: boolean;
  nightLife: boolean;
};

type Label_types = "Delivery" | "Dining Out" | "Night Life";

export interface IScrollableTabsProps {
  location: string;
  area: string;
  cityId: string;
  cuisineId?: boolean;
  data?: RestaurantRootInterface[] | undefined;
}

const ScrollableTabs = ({
  location,
  area,
  cityId,
  cuisineId,
  data
}: IScrollableTabsProps) => {
  const [value, setValue] = useState<number>(0);
  const [disabled, setDisabled] = useState<Disabled>({
    delivery: false,
    dine: true,
    nightLife: true
  });
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
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
                path={
                !disabled.delivery
                  ? DELIVERY_ICON_ENABLED
                  : DELIVERY_ICON_DISABLED
              }
                width="75"
                height="55"
                altText="Delivery"
            />
          }
            className={classes.one}
        />
        <Tab
            label="Dining Out"
            icon={
            <TabImage
                path={
                !disabled.dine ? DINEOUT_ICON_ENABLED : DINEOUT_ICON_DISABLED
              }
                width="65"
                height="60"
                altText="Dining Out"
            />
          }
            className={classes.one}
        />
        <Tab
            label="Night Life"
            icon={
            <TabImage
                path={
                !disabled.nightLife
                  ? NIGHTLIFE_ICON_ENABLED
                  : NIGHTLIFE_ICON_DISABLED
              }
                altText="Night Life"
            />
          }
            className={classes.one}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DeliveryInfo
            location={location}
            area={area}
            cityId={cityId}
            cuisineId={cuisineId}
            data={data}
        />
      </TabPanel>
      <TabPanel value={value} index={1} text="Welcome to Dineout" />
      <TabPanel value={value} index={2} text="Welcome to Night Life" />
    </div>
  );
};

interface ITabImageProps {
  path: string;
  width?: string;
  height?: string;
  altText: Label_types;
}

const TabImage = ({
  path,
  width = "75",
  height = "55",
  altText
}: ITabImageProps) => {
  const isPhone = useDevice("575");
  return (
    <Image
        src={path}
        width={isPhone ? 55 : width}
        height={isPhone ? 40 : height}
        alt={altText}
    />
  );
};

export default ScrollableTabs;

// type Mode_types = "delivery" | "dineout" | "nightLife";

// type Details = {
//     text?: Mode_types,
//     label: Label_types
// }

// type ITabs = Array<Details>

// const customTabArray: ITabs = [
//     {
//         text: "delivery",
//         label: "Delivery"
//     },
//     {
//         text: "dineout",
//         label: "Dining Out"
//     },
//     {
//         text: "nightLife",
//         label: "Night Life"
//     }
// ];

// type Mode_props = {
//     disabled: string,
//     enabled: string,
//     width?: string,
//     height?: string
// }

// type Modes = {
//     delivery: Mode_props,
//     dineout: Mode_props,
//     nightLife: Mode_props
// }

// const customTabObject: Modes = {
//     delivery: {
//         disabled: DELIVERY_ICON_DISABLED,
//         enabled: DELIVERY_ICON_ENABLED,
//         width: "75",
//         height: "55"
//     },
//     dineout: {
//         disabled: DINEOUT_ICON_DISABLED,
//         enabled: DINEOUT_ICON_ENABLED,
//         width: "65",
//         height: "60"
//     },
//     nightLife: {
//         disabled: NIGHTLIFE_ICON_DISABLED,
//         enabled: NIGHTLIFE_ICON_ENABLED
//     }
// }

// interface ICustomTabProps {
//     nonTabValue: number;
//     index: number;
//     text: Mode_types;
//     label: Label_types;
// }
// const CustomTab = (props: ICustomTabProps) => {
//     const { nonTabValue, index, text, label, ...other } = props;
//     return <Tab
//         label={label}
//         icon={<TabImage
//             path={nonTabValue === index ? customTabObject[text].enabled : customTabObject[text].disabled}
//             width={customTabObject[text].width}
//             height={customTabObject[text].height}
//             altText={label}
//         />}
//         className={classes.one}
//         {...other} />;
// };

const DeliveryInfo = ({
  location,
  area,
  cityId,
  cuisineId,
  data
}: IScrollableTabsProps) => (
  <>
    <Filters />
    {cuisineId ? (
      <>
        <h1>Food for your first order</h1>
        <MediaCard cardData={data} />
      </>
    ) : (
      <>
        <FirstOrderSection location={location} area={area} cityId={cityId} />
        <h1
            style={{
            color: "rgb(28, 28, 28)",
            fontSize: "2rem",
            margin: "2.2rem 0px"
          }}
        >
          Best food near 
{" "}
{changeToCamelCase(area)}
        </h1>
        <MediaCard cardData={data} />
      </>
    )}
  </>
);

const Filters = () => <CustomFilters />;
