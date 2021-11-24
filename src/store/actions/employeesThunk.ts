import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmployees = createAsyncThunk("employees/fetch", async () => {
  try {
    const request = await fetch(
      "https://yalantis-react-school-api.yalantis.com/api/task0/users"
    );
    const payload = await request.json();
    console.log(payload);
    return payload;
 
  } catch {
    window.alert("Failed to fetch products");
  }
});

fetchEmployees();
