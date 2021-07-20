

const Input = ({ children, placeholder, onClick, setValue, value, className, textarea }) => {
	return (
		<>
			{textarea ?
				<textarea
					className={className}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder={placeholder}
					onClick={onClick}
				>
					{children}
				</textarea>
				:
				<input
					className={className}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder={placeholder}
					onClick={onClick}
				>
					{children}
				</input>
			}
		</>
	)
}

export default Input