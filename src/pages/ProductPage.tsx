import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import DOMPurify from 'dompurify';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/QuantitySelector';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const product = products.find((p) => p.ID === id);
  const maxStock = product ? parseInt(product.inventoryQuantity, 10) || 0 : 0;
  const isOutOfStock = maxStock <= 0;

  useEffect(() => {
    setQuantity(1);
  }, [id]);

  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) {
        clearTimeout(feedbackTimerRef.current);
      }
    };
  }, []);

  if (!product) {
    return (
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-emerald-900">Product Not Found</h2>
          <p className="mt-4 text-gray-600">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/all-products')}
            className="mt-6 bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const otherImages = JSON.parse(product.otherImages).map((img: { Image: string }) => img.Image);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedFeedback(true);

    if (feedbackTimerRef.current) {
      clearTimeout(feedbackTimerRef.current);
    }

    feedbackTimerRef.current = setTimeout(() => {
      setAddedFeedback(false);
    }, 2500);
  };

  const formatContent = (htmlContent: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = DOMPurify.sanitize(htmlContent, {
      USE_PROFILES: { html: true },
      ALLOWED_TAGS: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li',
        'strong', 'em', 'div', 'span', 'br'
      ],
      ALLOWED_ATTR: ['class']
    });

    const listItems = tempDiv.getElementsByTagName('li');
    for (let li of listItems) {
      const text = li.innerHTML;
      li.classList.add('flex', 'items-start', 'mb-2');

      const bulletPoint = document.createElement('span');
      bulletPoint.innerHTML = '•';
      bulletPoint.classList.add('text-emerald-500', 'mr-3', 'flex-shrink-0');

      const textContainer = document.createElement('span');
      textContainer.innerHTML = text;
      textContainer.classList.add('flex-1');

      li.innerHTML = '';
      li.appendChild(bulletPoint);
      li.appendChild(textContainer);
    }

    const lists = tempDiv.getElementsByTagName('ul');
    for (let ul of lists) {
      ul.classList.add('space-y-3', 'my-4');
    }

    const headings = tempDiv.querySelectorAll('h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (heading.tagName === 'H2' && index === 0) {
        heading.classList.add('text-2xl', 'font-bold', 'text-emerald-900', 'mt-8', 'mb-6');
      } else {
        heading.classList.add('text-xl', 'font-bold', 'text-emerald-900', 'mt-6', 'mb-4');
      }
    });

    return tempDiv.innerHTML;
  };

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.mainImage}
            alt={product.title}
            className="w-full rounded-lg shadow-md"
          />
          <div className="grid grid-cols-4 gap-4">
            {otherImages.slice(0, 4).map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} view ${index + 1}`}
                className="w-full h-24 object-cover rounded-md shadow-sm cursor-pointer hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-emerald-900">{product.title}</h1>
          <p className="mt-4 text-2xl font-bold text-emerald-700">€{product.price}</p>
          <p className="mt-2 text-emerald-600">
            {isOutOfStock ? 'Out of stock' : `Stock: ${product.inventoryQuantity} units`}
          </p>

          <div className="mt-8 space-y-4">
            {!isOutOfStock && (
              <QuantitySelector
                value={quantity}
                max={maxStock}
                onChange={setQuantity}
              />
            )}

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              className="w-full bg-emerald-500 text-white py-3 px-8 rounded-md font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2 disabled:bg-emerald-300 disabled:cursor-not-allowed"
            >
              <ShoppingCart size={20} />
              <span>{isOutOfStock ? 'Out of Stock' : 'Add to Cart'}</span>
            </button>

            {addedFeedback && (
              <p className="text-emerald-600 text-sm font-medium">
                Added to cart!{' '}
                <Link to="/cart" className="underline hover:text-emerald-700">
                  View cart →
                </Link>
              </p>
            )}
          </div>

          <div className="mt-8 prose prose-emerald max-w-none">
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{
                __html: formatContent(product.body)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
