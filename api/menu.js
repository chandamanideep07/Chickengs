export default function handler(req, res) {
  const menu = [
    { name: "Chicken GS Small", price: 10.99 },
    { name: "Chicken GS Medium", price: 14.99 },
    { name: "Chicken GS Family Pack", price: 24.99 },
    { name: "Spicy Chicken Wings", price: 9.99 },
    { name: "Fries", price: 3.99 }
  ];

  res.status(200).json(menu);
}
