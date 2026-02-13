import React from 'react'
import List from './List'

const CardList = (props) => {
    const{title,headingFontSize,list} = props;
  return (
    <div>
        <h1 className={`mb-4 font-semibold ${headingFontSize}`} >{title}</h1>
        <List list={list}/>
    </div>
  )
}

export default CardList
