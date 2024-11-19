import * as yup from "yup";
export declare const createShipBodyValidator: yup.ObjectSchema<{
    name: string;
    user: string;
    isFleetFlagship: NonNullable<boolean | undefined>;
    isUserFlagship: NonNullable<boolean | undefined>;
    fleet: string;
    owner: string;
    type: string;
    status: string;
    positionX: number;
    positionY: number;
    slot: (string | undefined)[];
}, yup.AnyObject, {
    name: undefined;
    user: undefined;
    isFleetFlagship: undefined;
    isUserFlagship: undefined;
    fleet: undefined;
    owner: undefined;
    type: undefined;
    status: undefined;
    positionX: undefined;
    positionY: undefined;
    slot: "";
}, "">;
export declare const updateShipBodyValidator: yup.ObjectSchema<{
    name: string | undefined;
    user: string | undefined;
    isFleetFlagship: boolean | undefined;
    isUserFlagship: boolean | undefined;
    fleet: string | undefined;
    owner: string | undefined;
    type: string | undefined;
    status: string | undefined;
    positionX: number | undefined;
    positionY: number | undefined;
    slot: (string | undefined)[] | undefined;
}, yup.AnyObject, {
    name: undefined;
    user: undefined;
    isFleetFlagship: undefined;
    isUserFlagship: undefined;
    fleet: undefined;
    owner: undefined;
    type: undefined;
    status: undefined;
    positionX: undefined;
    positionY: undefined;
    slot: "";
}, "">;
export declare const createShipTypeBodyValidator: yup.ObjectSchema<{
    name: string;
    description: string | undefined;
    status: string;
    image: string | undefined;
    slotCount: number;
}, yup.AnyObject, {
    name: undefined;
    description: undefined;
    status: undefined;
    image: undefined;
    slotCount: undefined;
}, "">;
export declare const updateShipTypeBodyValidator: yup.ObjectSchema<{
    name: string | undefined;
    description: string | undefined;
    status: string | undefined;
    image: string | undefined;
    slotCount: number | undefined;
}, yup.AnyObject, {
    name: undefined;
    description: undefined;
    status: undefined;
    image: undefined;
    slotCount: undefined;
}, "">;
export declare const createShipSlotBodyValidator: yup.ObjectSchema<{
    item: string | undefined;
}, yup.AnyObject, {
    item: undefined;
}, "">;
export declare const updateShipSlotBodyValidator: yup.ObjectSchema<{
    item: string | undefined;
}, yup.AnyObject, {
    item: undefined;
}, "">;
export declare const createShipStatusBodyValidator: yup.ObjectSchema<{
    attack: number;
    defense: number;
    health: number;
    shield: number;
    speed: number;
}, yup.AnyObject, {
    attack: undefined;
    defense: undefined;
    health: undefined;
    shield: undefined;
    speed: undefined;
}, "">;
export declare const updateShipStatusBodyValidator: yup.ObjectSchema<{
    attack: number | undefined;
    defense: number | undefined;
    health: number | undefined;
    shield: number | undefined;
    speed: number | undefined;
}, yup.AnyObject, {
    attack: undefined;
    defense: undefined;
    health: undefined;
    shield: undefined;
    speed: undefined;
}, "">;
export declare const createShipValidator: {
    body: yup.ObjectSchema<{
        name: string;
        user: string;
        isFleetFlagship: NonNullable<boolean | undefined>;
        isUserFlagship: NonNullable<boolean | undefined>;
        fleet: string;
        owner: string;
        type: string;
        status: string;
        positionX: number;
        positionY: number;
        slot: (string | undefined)[];
    }, yup.AnyObject, {
        name: undefined;
        user: undefined;
        isFleetFlagship: undefined;
        isUserFlagship: undefined;
        fleet: undefined;
        owner: undefined;
        type: undefined;
        status: undefined;
        positionX: undefined;
        positionY: undefined;
        slot: "";
    }, "">;
};
export declare const updateShipValidator: {
    body: yup.ObjectSchema<{
        name: string | undefined;
        user: string | undefined;
        isFleetFlagship: boolean | undefined;
        isUserFlagship: boolean | undefined;
        fleet: string | undefined;
        owner: string | undefined;
        type: string | undefined;
        status: string | undefined;
        positionX: number | undefined;
        positionY: number | undefined;
        slot: (string | undefined)[] | undefined;
    }, yup.AnyObject, {
        name: undefined;
        user: undefined;
        isFleetFlagship: undefined;
        isUserFlagship: undefined;
        fleet: undefined;
        owner: undefined;
        type: undefined;
        status: undefined;
        positionX: undefined;
        positionY: undefined;
        slot: "";
    }, "">;
};
export declare const createShipTypeValidator: {
    body: yup.ObjectSchema<{
        name: string;
        description: string | undefined;
        status: string;
        image: string | undefined;
        slotCount: number;
    }, yup.AnyObject, {
        name: undefined;
        description: undefined;
        status: undefined;
        image: undefined;
        slotCount: undefined;
    }, "">;
};
export declare const updateShipTypeValidator: {
    body: yup.ObjectSchema<{
        name: string | undefined;
        description: string | undefined;
        status: string | undefined;
        image: string | undefined;
        slotCount: number | undefined;
    }, yup.AnyObject, {
        name: undefined;
        description: undefined;
        status: undefined;
        image: undefined;
        slotCount: undefined;
    }, "">;
};
export declare const createShipSlotValidator: {
    body: yup.ObjectSchema<{
        item: string | undefined;
    }, yup.AnyObject, {
        item: undefined;
    }, "">;
};
export declare const updateShipSlotValidator: {
    body: yup.ObjectSchema<{
        item: string | undefined;
    }, yup.AnyObject, {
        item: undefined;
    }, "">;
};
export declare const createShipStatusValidator: {
    body: yup.ObjectSchema<{
        attack: number;
        defense: number;
        health: number;
        shield: number;
        speed: number;
    }, yup.AnyObject, {
        attack: undefined;
        defense: undefined;
        health: undefined;
        shield: undefined;
        speed: undefined;
    }, "">;
};
export declare const updateShipStatusValidator: {
    body: yup.ObjectSchema<{
        attack: number | undefined;
        defense: number | undefined;
        health: number | undefined;
        shield: number | undefined;
        speed: number | undefined;
    }, yup.AnyObject, {
        attack: undefined;
        defense: undefined;
        health: undefined;
        shield: undefined;
        speed: undefined;
    }, "">;
};
