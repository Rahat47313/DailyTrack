import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./calendar/calendarSlice";
import pagesReducer from "./pages/pagesSlice";
import sidebarLeftReducer from "./sidebarLeft/sidebarLeftSlice";
import sidebarRightReducer from "./sidebarRight/sidebarRightSlice";
import stickyWallReducer from "./stickyWall/stickyWallSlice";
import navAndSideReducer from "./navAndSide/navAndSideSlice";
import attendanceReducer from "./attendance/attendanceSlice";
import selectedTaskReducer from "./selectedTask/selectedTaskSlice";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    pages: pagesReducer,
    sidebarLeft: sidebarLeftReducer,
    sidebarRight: sidebarRightReducer,
    stickyWall: stickyWallReducer,
    navAndSide: navAndSideReducer,
    attendance: attendanceReducer,
    selectedTask: selectedTaskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
