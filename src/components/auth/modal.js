import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

 const Modalll = () =>{
   const [modal, setModal] = useState(false)
   const toggle = () => setModal(!modal)
    return(
        
   <div >
     <button onClick={toggle} >Open Model</button>
     <Modal isOpen={modal} toggle={toggle}> 
       <ModalHeader>
         Title
       </ModalHeader>
       <ModalBody>
<h1> EDIT FORM HERE</h1>
         </ModalBody>
         <ModalFooter>
           <button>onClick</button>
           <button>cancel</button>
         </ModalFooter>
     </Modal>
  
  
</div>

    )
}
export default Modalll