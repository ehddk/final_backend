"use server";
import { userService } from '../services/index';

async function createUser(req: createUserRequest) {
  const data = await userService.createUser(req);

  return data;
}

async function updateUser(req: updateUserRequest) {
  const data = await userService.updateUser(req);

  return data;
}

async function deleteUser(req: deleteUserRequest) {
  const data = await userService.deleteUser(req);

  return data;
}

export { createUser, updateUser, deleteUser };
