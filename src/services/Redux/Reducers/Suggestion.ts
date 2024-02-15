import { axiosInstance } from "@/lib/axios/fetch";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetRecommendationData = createAsyncThunk(
  "/recomendedData",
  async ({ movieType, id }: { movieType: string; id: number }) => {
    if (movieType == "movie") {
      const reponse = await axiosInstance(
        `https://api.themoviedb.org/3/${movieType}/${id}/recommendations?language=en-US`
      );
      return reponse.data;
    } else if (movieType == "tv") {
      const reponse = await axiosInstance(
        `https://api.themoviedb.org/3/${movieType}/${id}/recommendations?language=en-US`
      );
      return reponse.data;
    }
  }
);

type SliceModal = {
  Toggle: boolean;
  data: [];
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: SliceModal = {
  Toggle: false,
  data: [],
  status: "idle",
};

const RecommendationsSlice = createSlice({
  name: "Recommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetRecommendationData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(GetRecommendationData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(GetRecommendationData.rejected, (state) => {
      state.status = "failed";
    });
  },
});
export default RecommendationsSlice.reducer;
