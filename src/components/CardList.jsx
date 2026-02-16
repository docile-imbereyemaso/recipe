import List from './List'

const CardList = (props) => {
    const{title,headingFontSize,list,listType} = props;
  return (
    <div>
        <h1 className={`mb-4 font-semibold ${headingFontSize}`} >{title}</h1>
        <List list={list} listType ={listType}/>
    </div>
  )
}

export default CardList
