import { toast } from 'react-toastify'

export const renderErrors = (err) => {
  // Console Log for debugging purposes
  console.log(err.response) // eslint-disable-line

  switch (err.response.status) {
    case 401: {
      toast.error('You are not authorized to view this')
      break
    }
    case 404: {
      toast.error(err.response.data.message)
      break
    }
    case 406: {
      Object.entries(err.response.data).forEach((error) => {
        toast.error(error[1])
      })
      break
    }
    default: {
      toast.error('Something is wrong with the server')
    }
  }
}
