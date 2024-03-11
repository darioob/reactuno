import React from 'react'
import Badge from 'react-bootstrap/Badge';

function Tags({bg, te}) {
  return (
    <Badge bg={bg}>{te}</Badge>
  )
}

export default Tags