let tickets = global.tickets || [];
global.tickets = tickets;

export default function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Only POST allowed" });

  const { item, quantity, extras } = req.body;

  const ticket = {
    id: Date.now(),
    item,
    quantity,
    extras,
    time: new Date().toLocaleString()
  };

  tickets.push(ticket);

  res.status(200).json({
    success: true,
    ticket
  });
}
