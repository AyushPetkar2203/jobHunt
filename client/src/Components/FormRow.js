const FormRow = ({type,name,value,handleChange,labelText,accept}) => {
    return (
        <div className="form-row">
            <label htmlFor='name' className="form-label">
                {labelText || name}
            </label>
            <input type={type} value={value} name={name} className="form-input" onChange={handleChange} accept={accept} />
        </div>
    )
}
export default FormRow