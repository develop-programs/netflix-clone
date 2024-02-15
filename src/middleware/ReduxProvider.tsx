"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/services/Redux/store";

type props = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: props) {
  return <Provider store={store}>{children}</Provider>;
}
