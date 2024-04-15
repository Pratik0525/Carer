import React from 'react'

const ConsultaDr = () => {
  return (
    <div>
              <button className="btn text-white border-none bg-[#5652FF] w-[13rem] mt-14 absolute top-[88rem] left-[7.5rem]" onClick={()=>document.getElementById('my_modal_1').showModal()}>
              Consult a Doctor
            </button>
            <dialog id="my_modal_1" className="modal">
    <div className="modal-box bg-white text-[#41518B]">
      <h3 className="font-bold text-lg">Dear Users.</h3>
      <p className="py-4">This feature will be launching soon. Stay Tuned!!</p>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn bg-[#5652FF] border-none text-white">Close</button>
        </form>
      </div>
    </div>
  </dialog>
    </div>
  )
}

export default ConsultaDr