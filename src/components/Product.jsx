import PropTypes from 'prop-types'

export default function Product({ product }) {
  console.log(product);
  const { image, category, title } = product;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={`product: ${product.id}`}
            className="w-52 h-52"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
Product.propTypes = {
  product: PropTypes.object.isRequired
}
