export default function Input({ type, placeholder}) {
    return (
        <input
            className='input_style rounded_12px px_18px py_12px text_md transition_default'
            type={type}
            placeholder={placeholder}
        />
    );
}