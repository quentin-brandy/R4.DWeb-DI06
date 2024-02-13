

export default function List({text , checked }) {  
    if (checked) {
      
  return    <>
  <li class="advantage">
  <span class="advantage__checkmark">✓</span>
  <p class="advantage__text">{text}</p>
  </li>
 </>  ;
      }
      return   <>
      <li class="advantage">
      <span class="advantage__checkmark"></span>
      <p class="advantage__text">{text}</p>
      </li>
     </> 
   
  }