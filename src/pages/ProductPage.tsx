import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Circle } from 'lucide-react';
import DOMPurify from 'dompurify';
import { products } from '../data/products';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.ID === id);
  
  if (!product) {
    return (
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-emerald-900">Product Not Found</h2>
          <p className="mt-4 text-gray-600">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/shop')}
            className="mt-6 bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const otherImages = JSON.parse(product.otherImages).map((img: { Image: string }) => img.Image);

  // Function to format HTML content and add bullet points to list items
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

    // Find all list items and add bullet points
    const listItems = tempDiv.getElementsByTagName('li');
    for (let li of listItems) {
      const text = li.innerHTML;
      li.classList.add('flex', 'items-start', 'mb-2');
      
      // Create bullet point
      const bulletPoint = document.createElement('span');
      bulletPoint.innerHTML = '•';
      bulletPoint.classList.add('text-emerald-500', 'mr-3', 'flex-shrink-0');
      
      // Create text container
      const textContainer = document.createElement('span');
      textContainer.innerHTML = text;
      textContainer.classList.add('flex-1');
      
      // Clear original content and add new structure
      li.innerHTML = '';
      li.appendChild(bulletPoint);
      li.appendChild(textContainer);
    }

    // Find all unordered lists and add spacing
    const lists = tempDiv.getElementsByTagName('ul');
    for (let ul of lists) {
      ul.classList.add('space-y-3', 'my-4');
    }

    // Add spacing to headings
    const headings = tempDiv.querySelectorAll('h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (heading.tagName === 'H2' && index === 0) {
        // Make the first h2 bigger
        heading.classList.add('text-2xl', 'font-bold', 'text-emerald-900', 'mt-8', 'mb-6');
      } else {
        // Style for other headings
        heading.classList.add('text-xl', 'font-bold', 'text-emerald-900', 'mt-6', 'mb-4');
      }
    });

    return tempDiv.innerHTML;
  };

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
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

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-emerald-900">{product.title}</h1>
          <p className="mt-4 text-2xl font-bold text-emerald-700">€{product.price}</p>
          <p className="mt-2 text-emerald-600">Stock: {product.inventoryQuantity} units</p>
          
          <div className="mt-8">
            <button className="w-full bg-emerald-500 text-white py-3 px-8 rounded-md font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
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