import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Products from '../data/Product';
import Breadcrumbs from '../components/Breadcrumbs';
import Tab from '../components/Tab'
const ProductDetail = () => {
  const { title } = useParams();
  console.log(title);
  
  const product = Products.find(p => p.title === title);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem', padding: '0 1rem' }}>
        <h2>Product Not Found</h2>
        <p>Sorry, the product you are looking for does not exist.</p>
        <Link
          to="/"
          style={{ color: '#007acc', textDecoration: 'underline', fontSize: '1.1rem' }}
        >
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
    
    <section className='mt-[60px] pt-16 py-18 lg:w-5xl w-full mx-auto'>
        <Breadcrumbs/>
        <div className='flex gap-14 items-center h-[700px]'>
            <div>
                <figure style={{ marginBottom: '2rem' }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{
                        width: '100%',
                        height: '400px',
                        borderRadius: '4px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        padding: '20px'
                        }}
                    />
                </figure>
            </div>
            <div>
                <h1 className='font-manrope font-bold text-3xl mb-[0.5rem] text-[#3E0478]'>
                    {product.title}
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#666', fontStyle: 'italic' }}>
                    Price: <strong className='text-[2rem]'>Tk {product.price.toFixed(2)}</strong>
                </p>
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    backgroundColor: '#3E0478',
                    color: '#fff',
                    border: 'none',
                    padding: '0.75rem 2rem',
                    fontSize: '1.125rem',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    transition: 'background-color 0.25s ease',
                    marginTop:'40px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#005fa3')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3E0478')}
                >
                  Add to Cart
                </button>
            </div>
        </div>
        <Tab/>
    </section>
    <Footer/>
    </>

  );
};

export default ProductDetail;
