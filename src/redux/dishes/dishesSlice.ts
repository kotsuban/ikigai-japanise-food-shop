import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface StateTypes {
  entities: any[];
  basket: {
    items: any;
    totalCount: number;
    totalPrice: number;
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string | unknown;
}

const initialState: StateTypes = {
  entities: [],
  basket: {
    items: {},
    totalCount: 0,
    totalPrice: 0,
  },
  status: "idle",
  error: null,
};

// Async thunk for fetch data from API
export const fetchDishes = createAsyncThunk("dishes/fetchDishes", async () => {
  const results = await axios.get("/db.json");
  return results.data.dishes;
});

const getTotalPrice = (arr: any) =>
  arr.reduce((sum: any, obj: any) => obj.price + sum, 0);

const _get = (obj: any, path: any) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val: any, key: any) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj: any, path: any) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

// Dishes slice initialization
const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    addToBasket(state, action) {
      const { dishObj } = action.payload;
      const currentDishItems = !state.basket.items[dishObj.id]
        ? [dishObj]
        : [...state.basket.items[dishObj.id].items, dishObj];

      const newItems = {
        ...state.basket.items,
        [dishObj.id]: {
          items: currentDishItems,
          totalPrice: getTotalPrice(currentDishItems),
        },
      };

      state.basket.items = newItems;
      state.basket.totalCount++;
      state.basket.totalPrice = state.basket.totalPrice + dishObj.price;
    },
    clearBasket(state) {
      state.basket.items = {};
      state.basket.totalCount = 0;
      state.basket.totalPrice = 0;
    },
    deleteBasketItem(state, action) {
      const { dishId } = action.payload;

      const newItems = {
        ...state.basket.items,
      };

      const currentTotalPrice = newItems[dishId].totalPrice;
      const currentTotalCount = newItems[dishId].items.length;
      delete newItems[dishId];

      state.basket.items = newItems;
      state.basket.totalCount = state.basket.totalCount - currentTotalCount;
      state.basket.totalPrice = state.basket.totalPrice - currentTotalPrice;
    },
    plusCardItem(state, action) {
      const { dishId } = action.payload;

      const newObjItems = [
        ...state.basket.items[dishId].items,
        state.basket.items[dishId].items[0],
      ];

      const newItems = {
        ...state.basket.items,
        [dishId]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount: any = getTotalSum(newItems, "items.length");
      const totalPrice: any = getTotalSum(newItems, "totalPrice");

      state.basket.items = newItems;
      state.basket.totalCount = totalCount;
      state.basket.totalPrice = totalPrice;
    },
    minusCardItem(state, action) {
      const { dishId } = action.payload;

      const oldItems = state.basket.items[dishId].items;
      const newObjItems =
        oldItems.length > 1
          ? state.basket.items[dishId].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.basket.items,
        [dishId]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount: any = getTotalSum(newItems, "items.length");
      const totalPrice: any = getTotalSum(newItems, "totalPrice");

      state.basket.items = newItems;
      state.basket.totalCount = totalCount;
      state.basket.totalPrice = totalPrice;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDishes.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchDishes.fulfilled, (state, action) => {
      state.entities = state.entities.concat(action.payload);
      state.status = "succeeded";
    });
    builder.addCase(fetchDishes.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    });
  },
});

export const {
  addToBasket,
  clearBasket,
  deleteBasketItem,
  minusCardItem,
  plusCardItem,
} = dishesSlice.actions;

export default dishesSlice.reducer;

// selectors
