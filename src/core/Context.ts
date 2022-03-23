import React from "react";
import { IUserItem } from "../components/UserItem/UserItem.types";

export const usersContext = React.createContext<any[] | null>(null);
export const userProfileContext = React.createContext<any | null>(null);
