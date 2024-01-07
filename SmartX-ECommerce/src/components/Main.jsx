import React from 'react'

function Main() {
    return (
        <>  <main>
            <div className='cards'>
                {
                    data
                        ? data.products.map((product) => {
                            const { id, images, title, price, rating } = product || {};

                            return <article key={nanoid() + id} className='card'>
                                <div>
                                    <img src={images[0]} alt={title} width="200" />
                                </div>                <div className='detail'>
                                    <h1>{title}</h1>
                                    <hr />
                                    <div className='about'>
                                        <span className='price'>₹ {price}</span>
                                        <span className='rating'>({rating})⭐</span>
                                    </div>
                                    <button className='add-to-cart-btn' onClick={() => {
                                        dispatch(addToCart({ id, images, title, price, rating }))
                                    }}>
                                        Add To Cart
                                    </button>
                                </div>
                            </article>
                        })
                        :
                        <div className='loader-wrap'><span className='loader'>Loading data Please Wait...</span></div>

                }
            </div>
        </main>
            <main >
                <h2 className='cart-heading'>Shopping Cart</h2>
                {cart.length ? <div className='cards gap-1 grid-col-8 min-h-halfscreen'>

                    {cart.map((product) => {
                        const { id, image, title, price, rating } = product || {};

                        return <article key={nanoid() + id} className='card cartCard'>
                            <div>
                                <img src={image[0]} alt={title} width="200" />
                            </div>                <div className='detail'>
                                <h1>{title}</h1>
                                <hr />
                                <div className='about'>
                                    <span className='price'>₹ {price}</span>
                                    <button
                                        className='remove-from-cart-btn'
                                        onClick={() => dispatch(removeFromCart(id))}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#888888" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17" /></svg>
                                        {/* Delete */}
                                    </button>
                                </div>

                            </div>
                        </article>
                    })}
                </div>
                    : <div className='msg-empty-cart'>
                        <img className='img-empty-cart' src="https://media.giphy.com/media/8PA8Ew3nw97yg/giphy.gif" width="300" alt="" />
                        <span>Oops! Empty Cart. Add Some Items</span>
                    </div>
                }
                <div >
                    < hr className='text-gray' />
                    <div className='subtotal-wrap'>
                        <span>Subtotal ({cart.length}): <span className='subtotal'>₹{
                            cart.reduce((acc, product) => acc + product.price, 0)
                        }</span></span>
                        <button className='proceed-btn' onClick={() => {
                            // dispatch(addToCart({ images, title, price, rating }))
                        }}>
                            Proceed To Buy
                        </button>
                    </div>
                </div>

            </main></>
    )
}

export default Main