const Modal = (props) => {
    return ( 
        <div className="">
            <div className="fixed top-1/2 left-1/2 mt-60 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center rounded-lg top-0 z-40 p-10 bg-gray-300 py-10 px-10">
                <div className="flex justify-center items-center flex-col">
                    {props.children}
                </div>
                <p className="text-slate-800 absolute top-1 right-1 py-2 px-4 cursor-pointer rotate-45 text-2xl" onClick={() => {props.isOpen(false)}}>+</p>
            </div>
        </div>
    )
}
 
export default Modal;