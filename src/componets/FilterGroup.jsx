const FilterGroup = ({title, inputType, opitions }) => {
    return ( 
        <>
        <div className="form">
        <p>{title}</p>
        {opitions.map((item, index) => {
            return<div className="checkbox" key={index}>
                
                <input type={inputType} value={item.value} />
                <label htmlFor={'${title}${index}'}>{item.text}</label>
            </div>
        })}
        </div>
        
        </>
     );
}
 
export default FilterGroup;