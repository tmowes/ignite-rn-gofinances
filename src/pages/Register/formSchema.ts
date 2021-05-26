import * as Yup from 'yup'

export const formSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório!'),
  amount: Yup.number()
    .typeError('Informe um valor númerico!')
    .positive('O valor não pode ser negativo!')
    .required('Você precisa informar o valor!'),
})
