type Props = string | Date

export const compareYear = (dateA: Props, dateB: Props) =>
  new Date(dateA).getFullYear() === new Date(dateB).getFullYear()
