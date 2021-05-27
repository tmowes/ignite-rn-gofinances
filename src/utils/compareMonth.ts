type Props = string | Date

export const compareMonth = (dateA: Props, dateB: Props) =>
  new Date(dateA).getMonth() === new Date(dateB).getMonth()
