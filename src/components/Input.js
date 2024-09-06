export default function Input({ type, placeholder, name, autocomplete, autoFocus}) {
    return (
        <input
            className='input_style rounded_12px px_18px py_12px text_md transition_default'
            type={type}
            placeholder={placeholder}
            id={name}
            autoComplete={autocomplete}
            autoFocus={autoFocus}
        />
    );
}