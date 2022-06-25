function ProductRow (props) {
    const { name, price } = props.product;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    ) 
}

export default ProductRow;