import { toast } from 'react-toastify'

export const renderErrors = (err) => {
  // Console Log for debugging purposes
  console.log(err) // eslint-disable-line

  switch (err.response.status) {
    case 404: {
      err.response.data.errors.forEach((error) => {
        toast.error(error.msg)
      })
      break
    }
    default: {
      toast.error('Something is wrong with the server')
    }
  }
}
