export const selectCalendarView = (state) => state.calendar.calendarView;
export const selectCurrentDate = (state) =>
  new Date(state.calendar.currentDate);
export const selectCurrentMonth = (state) => state.calendar.currentMonth;
export const selectCurrentYear = (state) => state.calendar.currentYear;
export const selectNavigationDate = (state) =>
  new Date(state.calendar.navigationDate);
export const selectEvents = (state) => state.calendar.events;
export const selectIsLoading = (state) => state.calendar.isLoading;
export const selectError = (state) => state.calendar.error;
export const selectIsAuthenticated = (state) => state.calendar.isAuthenticated;
export const selectMonths = (state) => state.calendar.months;
export const selectDays = (state) => state.calendar.days;