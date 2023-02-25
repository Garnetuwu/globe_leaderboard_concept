const Modal = ({ children, className, onClick }) => {
    return <>
        <div className={`${className} fixed z-30 flex`}>
            {children}
        </div>
        <div onClick={onClick} className="fixed top-0 left-0 w-full h-full z-20 bg-black bg-opacity-50" />
    </>
}

export default Modal