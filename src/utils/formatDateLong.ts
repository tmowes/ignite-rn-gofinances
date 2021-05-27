export const formatDateLong = (date: Date) => {
  const day = date.getDate()
  const month = Intl.DateTimeFormat('pt-BR', {
    month: 'long',
  }).format(date)
  return `${day} de ${month}`
}
