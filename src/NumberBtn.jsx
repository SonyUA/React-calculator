/* eslint-disable react/prop-types */
const NumberBtn = (props) => {
    const { el, classItem, calculate } = props;
    return (
        <span onClick={calculate} className={classItem}>
            {el.value}
        </span>
    );
};

export default NumberBtn;
