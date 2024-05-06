import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const { id } = useParams()
  return (
    <>
    <p>ID do produto: {id}</p>
    </>
  )
}

export default Product