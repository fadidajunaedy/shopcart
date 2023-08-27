const SelectOption = (props) => {
    const { children } = props
    return (
        <select className="select select-primary w-full max-w-xs">
            {children}
        </select>
    )
}

export default SelectOption