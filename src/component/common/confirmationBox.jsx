import { useDispatch } from "react-redux"


const ConfirmationBox = ({ id = 1, dialogRef ,onClickHandler}) => {
    const dispatch = useDispatch();

    return (
        <div className="p-4">
    
    
          <dialog
            ref={dialogRef}
            className="fixed top-[30%] left-[20%] w-[50%] backdrop-blur p-2"
          >
            <h2 className="text-xl font-bold mb-2">Confirmation</h2>
            <p>Are you sure you want to delete ?</p>
            
            <form method="dialog" className="mt-4 text-right">
              <button className="px-4 py-2 bg-blue-500 text-white rounded mx-2">
                Close
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClickHandler}>
                Delete
              </button>
            </form>
          </dialog>
        </div>
      );

}

export default ConfirmationBox;