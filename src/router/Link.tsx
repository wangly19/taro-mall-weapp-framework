import React, { FC } from 'react'

interface LinkProps {
  to: string,
  params: Record<string, any>
}

const Link: FC<LinkProps> = (props) => {
  return <>{ 
    props.children 
  }</>
}

export default Link