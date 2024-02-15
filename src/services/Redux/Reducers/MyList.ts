import { createSlice } from "@reduxjs/toolkit";

let store;

if (typeof window !== "undefined") {
  store = localStorage.getItem("list");
}

type data = {
  data: [];
};

const initialState: data = {
  data: store ? JSON.parse(store) : [],
};

const MyListSlice = createSlice({
  name: "MyList",
  initialState,
  reducers: {
    AddToList: (state: any, action: any) => {
      const index = state.data.findIndex((item: any) => {
        return item.id == action.payload.id;
      });
      if (index >= 0) {
        return state.data;
      } else {
        const TempItems = {
          ...action.payload,
          piece: 1,
        };
        state.data.push(TempItems);
      }
      localStorage.setItem("list", JSON.stringify(state.data));
    },
    RemoveFromList: (state: any, action: any) => {
      const index = state.data.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (state.data[index].piece === 1) {
        state.data = state.data.filter(
          (item: any) => item.id !== action.payload.id
        );
      }
      localStorage.setItem("list", JSON.stringify(state.data));
    },
  },
});

export const { AddToList, RemoveFromList } = MyListSlice.actions;
export default MyListSlice.reducer;
