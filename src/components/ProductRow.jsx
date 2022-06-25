function ProductRow (props) {
    // console.log(props);
    const { name, price } = props.product;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    ) 
}

export default ProductRow;