import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SitePage = createAsyncThunk("site/SitePage", async(id) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/services/activities/sites/${id}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("token")}`,
                },
            }
        );
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
export const User = createAsyncThunk("user/User", async() => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/profiles/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("token")}`,
                },
            }
        );
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
export const UpdatePage = createAsyncThunk(
    "update/UpdatePage",
    async({ name, photo, address, description, route, street, id }, thunkAPI) => {
        const formData = new FormData();

        formData.append("name", name);
        formData.append("address.raw", address);
        formData.append("address.route", route);
        formData.append("address.street_number", street);

        formData.append("description", description);
        formData.append("photo", photo);

        console.log(`JWT ${localStorage.getItem("token")}`);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
        try {
            const res = await axios.patch(
                `http://localhost:8000/services/activities/sites/${id}/`,
                formData, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("token")}`,
                    },
                }
            );

            const data = res.data;

            if (res.status === 200) {
                console.log(res.data);
                return data;
            } else {
                throw new Error("Failed to make tour");
            }
        } catch (err) {
            if (err.response && err.response.status === 400) {
                console.error(
                    `Status: ${err.response.status}, Status Text: ${err.response.statusText}`
                );
                console.error(err.response.data);
            } else {
                const errorMessage =
                    err.response && err.response.data ?
                    err.response.data.message :
                    err.message;
                console.error(errorMessage);
            }
            return thunkAPI.rejectWithValue("error");
        }
    }
);
export const TourPage = createAsyncThunk("tour/TourPage", async(id) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/services/activities/tours/${id}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("token")}`,
                },
            }
        );
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
export const Favourite = createAsyncThunk(
    "fav/Favourite",
    async({
        id
    }) => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/services/service-favorites/?servic_id=${id}`, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("token")}`,
                    },
                }
            );
            const data = response.data;
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    });

export const addSites = createAsyncThunk(
    "sites/addSites",
    async({ site_id, id }, thunkAPI) => {
        const formData = new FormData();

        formData.append("site_id", site_id);

        console.log(`JWT ${localStorage.getItem("token")}`);

        try {
            const res = await axios.post(
                `http://localhost:8000/services/activities/tours/${id}/sites/`,
                formData, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("token")}`,
                    },
                }
            );

            const data = res.data;

            if (res.status === 201) {
                console.log(res.data);
                return data;
            } else {
                throw new Error("Failed to make tour");
            }
        } catch (err) {
            if (err.response && err.response.status === 400) {
                console.error(
                    `Status: ${err.response.status}, Status Text: ${err.response.statusText}`
                );
                console.error(err.response.data);
            } else {
                const errorMessage =
                    err.response && err.response.data ?
                    err.response.data.message :
                    err.message;
                console.error(errorMessage);
            }
            return thunkAPI.rejectWithValue("error");
        }
    }
);

export const addTags = createAsyncThunk(
    "tags/addTags",
    async({ tag_id, id }, thunkAPI) => {


        console.log(`JWT ${localStorage.getItem("token")}`);

        try {
            const res = await axios.post(
                `http://localhost:8000/services/activities/${id}/tags/`, {
                    "tag_id": tag_id
                }, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("token")}`,
                    },
                }
            );

            const data = res.data;

            if (res.status === 201) {
                console.log(res.data);
                return data;
            } else {
                throw new Error("Failed to make tour");
            }
        } catch (err) {
            if (err.response && err.response.status === 400) {
                console.error(
                    `Status: ${err.response.status}, Status Text: ${err.response.statusText}`
                );
                console.error(err.response.data);
            } else {
                const errorMessage =
                    err.response && err.response.data ?
                    err.response.data.message :
                    err.message;
                console.error(errorMessage);
            }
            return thunkAPI.rejectWithValue("error");
        }
    }
);
const SiteSlice = createSlice({
    name: "site",
    initialState: {
        data: [],
        tour: [],
        tags: [],
        fav: [],
        user: [],
        sites: [],
        update: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(SitePage.pending, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(SitePage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(SitePage.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            })
            .addCase(TourPage.pending, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(TourPage.fulfilled, (state, action) => {
                state.loading = false;
                state.tour = action.payload;
            })
            .addCase(TourPage.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            })
            .addCase(addSites.pending, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(addSites.fulfilled, (state, action) => {
                state.loading = false;
                state.sites = action.payload;
            })
            .addCase(addSites.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            })
            .addCase(UpdatePage.pending, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(UpdatePage.fulfilled, (state, action) => {
                state.loading = false;
                state.update = action.payload;
            })
            .addCase(UpdatePage.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            })
            .addCase(addTags.pending, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(addTags.fulfilled, (state, action) => {
                state.loading = false;
                state.tags = action.payload;
            })
            .addCase(addTags.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            })
            .addCase(Favourite.pending, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(Favourite.fulfilled, (state, action) => {
                state.loading = false;
                state.fav = action.payload;
            })
            .addCase(Favourite.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            })
            .addCase(User.pending, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(User.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(User.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            })
    },
});

export default SiteSlice.reducer;