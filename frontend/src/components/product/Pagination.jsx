import React from 'react'

const Pagination = ({activepage,paginate,totalProduct,productsPerPage}) => {
  const pageNumber =[]
  for(let i = 1; i <= Math.ceil(totalProduct/productsPerPage); i++){
    pageNumber.push(i)
  }



  return (
    <ul className='default-pagination lab-ul'>
      <li>
        <a href="#" onClick={() =>{
          if(activepage< pageNumber.length){
            paginate(activepage - 1)
          }
        }}>
          <i className='icofont-rounded-left'></i>
        </a>
      </li>



{
  pageNumber.map((number) =>(
    <li key={number} className={` Page-item ${number === activepage ? "bg-warning rounded-full" : "" }`}>
      <button onClick={() => paginate(number)} className='bg-transparent'>{number}</button>
    </li>
  ))
}

<li>
        <a href="#" onClick={() =>{
          if(activepage< pageNumber.length){
            paginate(activepage + 1)
          }
        }}>
          <i className='icofont-rounded-right'></i>
        </a>
      </li>
    </ul>
  )
}

export default Pagination