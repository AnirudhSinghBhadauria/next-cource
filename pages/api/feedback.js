export default function handeler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    console.log(email, feedback);

    // send this feedback to any db.
    res.status(201).json({ message: "resolved succesfully" });
  }
  
  if (req.method === "GET") {
    res
      .status(200)
      .json({
        title: "Breaking bad",
        director: "vince gilligan",
        seasons: "5",
      });
  }
}
