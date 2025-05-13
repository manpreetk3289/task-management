const ArrowDown = ({ onClick }) => {
    return (

        <svg
            onClick={onClick}
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M19 9l-7 7-7-7" />
        </svg>
    )
}

export default ArrowDown;