import React from "react";

// Sample data for product listings
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 10.99,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 19.99,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 5.99,
    image: "https://picsum.photos/200/300",
  },
];

// Sample contact information
const contactInfo = {
  address: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  email: "contact@example.com",
  phone: "(555) 555-5555",
};

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <h3>Contact Us</h3>
        <p>{contactInfo.address}</p>
        <p>{contactInfo.city}, {contactInfo.state} {contactInfo.zip}</p>
        <p>Email: {contactInfo.email}</p>
        <p>Phone: {contactInfo.phone}</p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to My Ecommerce Website!</h1>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
export default products ;