import * as yup from "yup";

export const createShipBodyValidator = yup.object({
  name: yup.string().required(),
  user: yup.string().required(),
  isFleetFlagship: yup.boolean().required(),
  isUserFlagship: yup.boolean().required(),
  fleet: yup.string().required(),
  owner: yup.string().required(),
  type: yup.string().required(),
  status: yup.string().required(),
  positionX: yup.number().required(),
  positionY: yup.number().required(),
  slot: yup.array().of(yup.string()).required(),
});

export const updateShipBodyValidator = yup.object({
  name: yup.string(),
  user: yup.string(),
  isFleetFlagship: yup.boolean(),
  isUserFlagship: yup.boolean(),
  fleet: yup.string(),
  owner: yup.string(),
  type: yup.string(),
  status: yup.string(),
  positionX: yup.number(),
  positionY: yup.number(),
  slot: yup.array().of(yup.string()),
});

export const createShipTypeBodyValidator = yup.object({
  name: yup.string().required(),
  description: yup.string(),
  status: yup.string().required(),
  image: yup.string(),
  slotCount: yup.number().required(),
});

export const updateShipTypeBodyValidator = yup.object({
  name: yup.string(),
  description: yup.string(),
  status: yup.string(),
  image: yup.string(),
  slotCount: yup.number(),
});

export const createShipSlotBodyValidator = yup.object({
  item: yup.string(),
});

export const updateShipSlotBodyValidator = yup.object({
  item: yup.string(),
});

export const createShipStatusBodyValidator = yup.object({
  attack: yup.number().required().min(0),
  defense: yup.number().required().min(0),
  health: yup.number().required().min(0),
  shield: yup.number().required().min(0),
  speed: yup.number().required().min(0),
});

export const updateShipStatusBodyValidator = yup.object({
  attack: yup.number().min(0),
  defense: yup.number().min(0),
  health: yup.number().min(0),
  shield: yup.number().min(0),
  speed: yup.number().min(0),
});

export const createShipValidator = {
  body: createShipBodyValidator,
};

export const updateShipValidator = {
  body: updateShipBodyValidator,
};

export const createShipTypeValidator = {
  body: createShipTypeBodyValidator,
};

export const updateShipTypeValidator = {
  body: updateShipTypeBodyValidator,
};

export const createShipSlotValidator = {
  body: createShipSlotBodyValidator,
};

export const updateShipSlotValidator = {
  body: updateShipSlotBodyValidator,
};

export const createShipStatusValidator = {
  body: createShipStatusBodyValidator,
};

export const updateShipStatusValidator = {
  body: updateShipStatusBodyValidator,
};
