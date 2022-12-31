export function SnowflakeIcon({
  size = 24,
  title = 'Snowflake',
}: {
  size?: number;
  title?: string;
}) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <title>{title}</title>
      <path
        d="M12 7v10M17 12H7M16.25 16.25l-8.5-8.5M16.25 7.75l-8.5 8.5M9.75 4.75 12 7l2.25-2.25M19.25 9.75 17 12l2.25 2.25M9.75 19.25l2.25-2.5 2.25 2.5M4.75 9.75 7.25 12l-2.5 2.25"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
