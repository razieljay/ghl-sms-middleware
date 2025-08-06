export default async function handler(req, res) {
  const { name, phone, appointment_date } = req.body;

  const payload = {
    apikey: "YOUR_SEMAPHORE_API_KEY",
    number: phone,
    message: `Hi ${name}, this is a reminder for your appointment on ${appointment_date}.`,
    sendername: "YOUR_APPROVED_SENDER_NAME"
  };

  const response = await fetch("https://api.semaphore.co/api/v4/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  res.status(200).json({ success: true, result });
}
