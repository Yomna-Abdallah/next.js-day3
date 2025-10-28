import Image from "next/image";

// Fetch single product by ID
async function getSingleProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export async function generateMetadata({params}) {
  const {id}=await params;
  const product=await getSingleProduct(id);

  return{
    title:product.title,
    description:product.description,
  }
}

// Fetch all products for static paths
async function getAllProducts() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  return res.json();
}

// Generate static paths for each product
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Product details page (dynamic route)
const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return (
    <div className="p-10 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <Image
          src={product.image}
          alt={product.title || "No image available"}
          width={320}
          height={320}
          className="object-contain rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-amber-50">
          {product.title}
        </h1>
        <p className="text-amber-50 mb-6">{product.description}</p>
        <p className="text-xl font-semibold text-blue-600 mb-4">
          ${product.price}
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
