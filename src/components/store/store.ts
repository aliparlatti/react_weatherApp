import { configureStore } from "@reduxjs/toolkit";
import WeatherLocalStorageService from "../../services/weatherCityLocalStrageService";
import weatherSlice from "./weatherSlice";

const initialState = {
    data: null,
    loading: false,
    error: null,
    savedData: WeatherLocalStorageService.getAllSavedAddresses(),
};

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
    },
    preloadedState: { weather: initialState },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
