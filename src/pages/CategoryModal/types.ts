export type CategoryModalProps = {
  category: Category
  setCategory: (category: Category) => void
  closeSelectedCategory: () => void
}

type Category = {
  key: string
  name: string
}

export type StyledProps = {
  isActive: boolean
}
