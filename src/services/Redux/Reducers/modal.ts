import { axiosInstance } from "@/lib/axios/fetch";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Params = {
  movieType: string;
  id: number;
};

export const GetModalData = createAsyncThunk(
  "/data",
  async ({ movieType, id }: { movieType: string; id: number }) => {
    if (movieType == "movie") {
      const reponse = await axiosInstance(
        `https://api.themoviedb.org/3/${movieType}/${id}?language=en-US`
      );
      return reponse.data;
    } else if (movieType == "tv") {
      const reponse = await axiosInstance(
        `https://api.themoviedb.org/3/${movieType}/${id}?language=en-US`
      );
      return reponse.data;
    }
  }
);

type SliceModal = {
  Toggle: boolean;
  data: [];
  genres: [];
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: SliceModal = {
  Toggle: false,
  data: [],
  genres: [],
  status: "idle",
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    OpenModal: (state) => {
      state.Toggle = true;
    },
    CloseModal: (state) => {
      state.Toggle = false;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetModalData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.genres = action.payload.genres;
      state.status = "succeeded";
    });
    builder.addCase(GetModalData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(GetModalData.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { OpenModal, CloseModal } = ModalSlice.actions;
export default ModalSlice.reducer;
