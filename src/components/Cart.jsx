import PropTypes from "prop-types";

export default function Cart({ cartItem, handleRemove }) {
  return (
    <>
      <div>
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cartItem?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="w-96">
                {cartItem?.title}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {cartItem?.category}
                </span>
              </td>
              <td className="w-96">{`Price: ${cartItem?.price}`}</td>
              <th>
                <button
                  onClick={() => handleRemove(cartItem?.id)}
                  className="btn btn-error"
                >
                  Remove
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
Cart.propTypes = {
  cartItem: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
