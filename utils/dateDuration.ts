export function dateDuration(date: string) {
  const date_posts = new Date(date);
  const date_now = new Date();

  const gap_by_year = date_now.getFullYear() - date_posts.getFullYear();
  const gap_by_month = date_now.getMonth() - date_posts.getMonth();
  const gap_by_day = date_now.getDate() - date_posts.getDate();

  const poststHourss = date_posts.getTime() / 1000 / 60 / 60;
  const nowHourss = date_now.getTime() / 1000 / 60 / 60;

  const poststMinutes = date_posts.getTime() / 1000 / 60;
  const nowMinutes = date_now.getTime() / 1000 / 60;

  const gap_by_hour = Math.round(nowHourss - poststHourss);
  const gap_by_minutes = Math.round(nowMinutes - poststMinutes);

  if (gap_by_year > 0) return `${gap_by_year} tahun lalu`;
  if (gap_by_month > 0) return `${gap_by_month} bulan lalu`;
  if (gap_by_minutes < 60) return `${gap_by_minutes} menit lalu`;
  if (gap_by_hour < 18) return `${gap_by_hour} jam lalu`;
  if (gap_by_day > 0) return `${gap_by_day} hari lalu`;

  return `hot news...`;
}
