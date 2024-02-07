import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

const initialState: SideMenuState = {
  menu: [
    {
      icon: "Home",
      title: "Dashboard",
      pathname: "/",
    },
    {
      icon: "Box",
      title: "Query",
      subMenu: [
        {
          icon: "Database",
          pathname: "/all-query",
          title: "All Query",
          // ignore: true,
        },
        {
          icon: "Shovel",
          pathname: "#",
          title: "Resolved Query",
          // ignore: true,
        },
        {
          icon: "Loader",
          pathname: "#",
          title: "Pending Query",
          // ignore: true,
        },
      ],
    },
    {
      icon: "PlusSquare",
      title: "Add Query",
      pathname: "/add-query",
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
