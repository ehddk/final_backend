import axios from "axios";
import { UserService } from "./user.service";

const instance = axios.create({});

export const userService = new UserService(
    instance
)