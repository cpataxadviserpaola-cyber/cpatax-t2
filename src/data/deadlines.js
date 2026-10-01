// Federal tax deadlines for calendar-year filers, shown on the Home page, in the closing
// call to action, and on the Tax Season page's tax calendar. Keep them in date order. Dates
// that have passed drop off automatically; when the list runs low, add the next year's
// dates after checking them on IRS.gov (weekends, holidays, and disaster relief can move
// a deadline).
export const deadlines = [
  { date: '2026-10-15', label: 'Extended 2025 individual and C corporation returns due' },
  { date: '2027-01-15', label: 'Fourth-quarter 2026 estimated tax payment due' },
  { date: '2027-02-01', label: 'W-2 and 1099-NEC forms due' },
  { date: '2027-03-15', label: '2026 partnership and S corporation returns due' },
  { date: '2027-04-15', label: '2026 individual and C corporation returns and first-quarter estimated tax due' },
  { date: '2027-06-15', label: 'Second-quarter 2027 estimated tax payment due' },
  { date: '2027-09-15', label: 'Third-quarter estimated tax and extended partnership and S corporation returns due' },
  { date: '2027-10-15', label: 'Extended 2026 individual and C corporation returns due' },
];

const DAY_MS = 24 * 60 * 60 * 1000;

// "Oct 15"
export const formatDeadlineDay = (date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

// "Thursday, October 15"
export const formatDeadlineLong = (date) =>
  date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

// "21 days left", "1 day left", or "Due today"
export const deadlineCountdown = (days) => {
  if (days === 0) return 'Due today';
  return `${days} ${days === 1 ? 'day' : 'days'} left`;
};

// Returns up to `count` deadlines on or after today, soonest first, each with the whole
// days remaining.
export function getUpcomingDeadlines(count = deadlines.length, now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return deadlines
    .map((deadline) => {
      const [year, month, day] = deadline.date.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      return { ...deadline, day: date, daysLeft: Math.round((date - today) / DAY_MS) };
    })
    .filter((deadline) => deadline.daysLeft >= 0)
    .slice(0, count);
}

// Returns the first deadline on or after today, or null once every listed date has passed.
export function getNextDeadline(now = new Date()) {
  return getUpcomingDeadlines(1, now)[0] ?? null;
}
