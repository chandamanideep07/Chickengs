export default function handler(req, res) {
   res.status(200).json({
     items: [
       { id: 1, name: "Chicken Garlic Starter (GS)", price: 12.99 },
       { id: 2, name: "Chicken GS Boneless", price: 14.49 },
       { id: 3, name: "Chicken GS Combo", price: 16.75 },
       { id: 4, name: "Chicken GS Family Pack", price: 24.99 },
       { id: 5, name: "Chicken GS Special Masala", price: 13.99 },
       { id: 6, name: "Chicken GS Bucket (Party Pack)", price: 32.99 }
     ]
   });
 }