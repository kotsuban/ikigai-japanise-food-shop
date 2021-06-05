import { createSlice } from "@reduxjs/toolkit";

interface StateTypes {
  category: "Роли" | "Піца" | "Супи" | "Рис" | "Салати" | "Різне" | "Все";
  sortBy:
    | {
        name: "ціні";
        type: "price";
      }
    | {
        name: "популярностi";
        type: "popular";
      }
    | {
        name: "новизні";
        type: "new";
      };
}

const initialState: StateTypes = {
  category: "Все",
  sortBy: {
    name: "ціні",
    type: "price",
  },
};

// Sort slice initialization
const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.category = action.payload;
    },
    changeSort(state, action) {
      state.sortBy.name = action.payload.name;
      state.sortBy.type = action.payload.type;
    },
  },
});

export const { changeCategory, changeSort } = sortSlice.actions;

export default sortSlice.reducer;
