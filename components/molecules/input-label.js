import { Input, Label } from "../atoms";

const InputLabel = ({ value, setValue, placeholder, children, label, textarea }) => {
	return(
		<Label className="form-label">
			{label}
			<Input className="form-input" 
				placeholder={placeholder}
				value={value}
				setValue={setValue}
				textarea={textarea}
			/>
		</Label>
	)
}

export default InputLabel