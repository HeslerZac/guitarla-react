function Header({ cart, increaseQty, decreaseQty, removeFromCart, clearCart }) {
  return (
    <header className="py-5 header">
      <div className="container-xl d-flex justify-content-between align-items-center">
        <h1 className="text-white">GuitarLA</h1>
        <div className="carrito">
          <img src="/img/carrito.png" alt="carrito" />
          <div id="carrito" className="bg-white p-3">
            {cart.length === 0 ? (
              <p className="text-center">El carrito está vacío</p>
            ) : (
              <>
                {cart.map(product => (
                  <div key={product.id} className="d-flex align-items-start gap-4 border-bottom py-3">
                    <img
                      src={`/img/${product.image}.jpg`}
                      alt={product.name}
                      width={60}
                    />
                    <div>
                      <h3 className="text-black fs-4 fw-bold text-uppercase">
                        {product.name}
                      </h3>
                      <p className="fw-bold text-primary fs-5">${product.price}</p>
                      <p className="text-black">Cantidad: {product.quantity}</p>
                      <div className="d-flex gap-2">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => decreaseQty(product.id)}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => increaseQty(product.id)}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeFromCart(product.id)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="btn btn-dark w-100 mt-3" onClick={clearCart}>
                  Vaciar Carrito
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
