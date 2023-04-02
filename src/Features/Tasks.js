import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const gettasks = createAsyncThunk(
  "gettasks",
  async (object, { getState, rejectWithValue }) => {
    // console.log(object)
    // console.log(getState());
    try {
      const { data, refetch } = await axios.get(
        `http://localhost:5000/tasks?email=${object}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);



export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [gettasks.pending]: (state, action) => {
      state.loading = true;
    },
    [gettasks.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [gettasks.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default taskSlice.reducer;


// import { useState, useEffect } from 'react';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`http://localhost:5000/tasks?email=${object}`);
//         const data = await res.json();
//         setTasks(data);
//         setIsSuccess(true);
//       } catch (error) {
//         setIsSuccess(false);
//         setMessage('failed');
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       {loading && <p>Loading...</p>}
//       {isSuccess && tasks.map((task) => <div key={task.id}>{task.title}</div>)}
//       {!isSuccess && <p>{message}</p>}
//     </>
//   );
// };

// export default TaskList;
