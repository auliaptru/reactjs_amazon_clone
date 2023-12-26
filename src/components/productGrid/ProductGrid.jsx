import './productGrid.scss';

const ProductGrid = ({ filterComponents, gridComponents }) => {
    return (
        <div className='productGrid'>
            <div className='productGrid__filter'>{filterComponents}</div>
            <div className='productGrid__grid'>{gridComponents}</div>
        </div>
    );
};

export default ProductGrid;
