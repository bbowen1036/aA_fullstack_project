export const signup = (user) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user }
    })
  )
}


export const login = (user) => {
  return $.ajax({
    url: '/api/sessions',
    method: 'POST',
    data: { user }
  })
}

export const logout = () => {
  return $.ajax({
    url: '/api/sessions',
    method: 'DELETE'
  })
}

