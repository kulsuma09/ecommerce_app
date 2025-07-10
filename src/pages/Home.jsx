import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import Products from '../data/Product';
import SLider from '../components/SLider';
import Footer from '../components/Footer';
import M_inside from '../assets/image/mattress_inside.png'
const Home = () => {
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  // Filter by title or description, case-insensitive
  const filteredProducts = Products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'low') return a.price - b.price;
      if (sort === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <>
      <SLider />
      <section className='px-4 py-10 lg:w-7xl w-full mx-auto flex'>
        <div className='lg:w-1/3 w-full'>
            <p className='text-sm capitalize font-bold pb-3'>About Us</p>
            <h2 className='text-4xl capitalize font-bold'>Welcome to mattress</h2>
        </div>
        <div className='lg:w-2/3 w-full'>
            <p className='text-base mb-10'><strong>Mattress</strong> Felt Industries Limited has been established in 2005, located at Gobindabari (Sardaganj), Kashimpur in Gazipur. Its Head Office is situated at Sena Kalyan Bhaban (15th Floor), 195 Motijheel Commercial Area Dhaka-1000. The factory is situated on 100 bighas of land with 115000 sft. covered area. The factory is equipped with most modern and sophisticated <strong>automatic</strong> machines which imported from USA, Germany and Spain. The factory has started its commercial productedicated Baby Set, Baby items, Bed sheet, many other bedding.</p>
            <Link to='/about' className='bg-[#3E0478] hover:bg-[#1976d2] text-white border-0  px-5 py-2 capitalize font-bold rounded cursor-pointer'>Learn More</Link>
        </div>
      </section>
      <section className='px-4 py-18 lg:w-7xl w-full mx-auto'>
        <div className="section_title text-center mb-14">
            <h2 className='text-4xl text-[#3E0478] capitalize font-bold'>our products</h2>
        </div>
        <div style={{ margin: '50px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='p-2 text-base w-[30%] border border-[#3E0478] hover:border-[#1976d2cf] focus-visible:outline-0 rounded-md'
          />

          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          >
            <option value="">Sort By Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        <div className='lg:max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-7'>
          {filteredProducts.map(product => (
            <div key={product.id} className='lg:w-[400px] md:w-[400px] w-[350px]' style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
          <Link to={`/product/${product.title}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
                />
                <h3 style={{ margin: '0.5rem 0', fontWeight:700, color:"#3E0478",textTransform:'capitalize' }}>{product.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom:"10px" }}>
                  {product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description}
                </p>
          </Link>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '1.1rem' }}>Tk {product.price.toFixed(2)}</strong>
                <button
                  onClick={() => addToCart(product)}
                  className='bg-[#3E0478] hover:bg-[#1976d2] text-white border-0 px-4 py-2 rounded cursor-pointer'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='px-4 py-18 lg:w-7xl w-full mx-auto flex justify-center-safe'>
            <img className='text-center' src={M_inside} alt="Mattress inside"/>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
