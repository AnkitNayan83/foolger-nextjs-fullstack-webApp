import React from 'react'

type Props = {
    params: {category:string}
}

const MenuCategory = ({params}:Props) => {
  return (
    <div>{params.category}</div>
  )
}

export default MenuCategory