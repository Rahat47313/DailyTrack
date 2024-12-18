import { createSelector } from "reselect";

const selectCalendarState = (state) => state.calendar;

export const selectCalendarView = createSelector(
  [selectCalendarState],
  (calendar) => calendar.calendarView
);
export const selectCurrentDate = createSelector(
  [selectCalendarState],
  (calendar) => new Date(calendar.currentDate)
);
export const selectCurrentMonth = createSelector(
  [selectCalendarState],
  (calendar) => calendar.currentMonth
);
export const selectCurrentYear = createSelector(
  [selectCalendarState],
  (calendar) => calendar.currentYear
);
export const selectNavigationDate = createSelector(
  [selectCalendarState],
  (calendar) => new Date(calendar.navigationDate)
);
export const selectEvents = createSelector(
  [selectCalendarState],
  (calendar) => calendar.events
);
export const selectIsLoading = createSelector(
  [selectCalendarState],
  (calendar) => calendar.isLoading
);
export const selectError = createSelector(
  [selectCalendarState],
  (calendar) => calendar.error
);
export const selectIsAuthenticated = createSelector(
  [selectCalendarState],
  (calendar) => calendar.isAuthenticated
);
export const selectMonths = createSelector(
  [selectCalendarState],
  (calendar) => calendar.months
);
export const selectDays = createSelector(
  [selectCalendarState],
  (calendar) => calendar.days
);
