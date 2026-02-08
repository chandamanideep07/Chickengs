export default function handler(req, res) {
  res.status(200).json({
    items: [
      { id: 1, name: "Chicken Garlic Starter (GS)", price: 180 },
      { id: 2, name: "Chicken GS Boneless", price: 210 },
      { id: 3, name: "Chicken GS Combo", price: 250 },
      { id: 4, name: "Chicken GS Family Pack", price: 320 },
      { id: 5, name: "Chicken GS Special Masala", price: 230 },
      { id: 6, name: "Chicken GS Bucket (Party Pack)", price: 550 }
    ]
  });
}
