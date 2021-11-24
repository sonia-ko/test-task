import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { EmployeesState } from "../types/employeesState";
import Employee from "../../interfaces/EmployeeModel";
import { fetchEmployees } from "../actions/employeesThunk";

const initialState: EmployeesState = {
  allEmployees: [],
  selectedEmployees: [],
};

export const employeesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectEmployee(state, action: PayloadAction<Employee>) {
      const employeeSelected = state.selectedEmployees.some(
        (employee) => employee.id === action.payload.id
      );
      state.selectedEmployees = employeeSelected
        ? state.selectedEmployees.filter(
            (employee) => employee.id !== action.payload.id
          )
        : (state.selectedEmployees = [
            ...state.selectedEmployees,
            action.payload,
          ]);
      console.log(state.selectedEmployees);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.allEmployees = [...action.payload];
    });
    //   const categories = new Set<string>();
    //   const farms = new Set<string>();
    //   const prices: number[] = [];
    //   state.visibleProducts.forEach((product) => {
    //     product.categories.forEach((category) => categories.add(category));
    //     farms.add(product.farm);
    //     prices.push(product.price);
    //   });
    //   state.productCategories = Array.from(categories.values());
    //   state.farms = Array.from(farms.values());
    //   state.minPrice = Math.min(...prices);
    //   state.maxPrice = Math.max(...prices);
    //   state.numberOfProducts = state.visibleProducts.length;
    //   state.numberOfPages = Math.ceil(
    //     state.numberOfProducts / state.productsPerPage
    //   );
    //   state.items = state.allProducts.slice(0, state.productsPerPage);
    //   state.productsFetched = true;
    // });
  },
});

export const { selectEmployee } = employeesSlice.actions;
export const selectCount = (state: RootState) => state.employees;

export default employeesSlice.reducer;
