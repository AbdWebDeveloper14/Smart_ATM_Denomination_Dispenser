<body style="font-family: Arial, sans-serif; background-color: #f5f7fa; color: #222; margin: 40px;">

  <h1 style="text-align:center; color:#2c3e50;">💳 Smart ATM – Denomination Dispenser</h1>

  <p style="font-size:16px;">
    The <strong>Smart ATM Denomination Dispenser</strong> is a JavaScript-based project that simulates how an ATM 
    dispenses cash in multiple denominations based on the amount entered by the user. It ensures realistic and balanced 
    note distribution, just like a real-world ATM.
  </p>

  <h2 style="color:#34495e;">⚙️ Features</h2>
  <table border="1" cellpadding="8" cellspacing="0" width="100%" style="border-collapse:collapse;">
    <tr style="background-color:#3498db; color:white;">
      <th>Feature</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>💵 Cash Dispensing Logic</td>
      <td>Calculates the number of notes for each denomination (5000, 1000, 500, 100, 50, 20, 10).</td>
    </tr>
    <tr style="background-color:#f9f9f9;">
      <td>💰 Smart Optimization</td>
      <td>Prefers higher notes first but keeps smaller ones for realistic output.</td>
    </tr>
    <tr>
      <td>🧮 Exact Calculation</td>
      <td>Ensures the total value matches the user’s entered amount.</td>
    </tr>
    <tr style="background-color:#f9f9f9;">
      <td>🚫 Error Handling</td>
      <td>Displays an error if the amount isn’t valid (e.g., not divisible by 10).</td>
    </tr>
    <tr>
      <td>🔁 Multiple Withdrawals</td>
      <td>Allows users to test different withdrawal amounts easily.</td>
    </tr>
  </table>

  <h2 style="color:#34495e;">🧠 How It Works</h2>
  <p style="font-size:15px;">
    1️⃣ The user enters an amount.<br>
    2️⃣ The system checks for valid input.<br>
    3️⃣ Using <b>Math.floor()</b> and <b>% (modulus)</b>, it calculates each denomination.<br>
    4️⃣ Displays total notes per denomination and overall total.
  </p>

  <h2 style="color:#34495e;">🧩 Tech Stack</h2>
  <ul style="font-size:15px;">
    <li><b>HTML</b> – Interface structure</li>
    <li><b>CSS</b> – Inline simple styling</li>
    <li><b>JavaScript</b> – Core ATM logic and calculations</li>
  </ul>

  <h2 style="color:#34495e;">🧠 Learning Highlights</h2>
  <ul style="font-size:15px;">
    <li>Problem-solving using JavaScript logic</li>
    <li>Using arithmetic and modular operations</li>
    <li>Real-world ATM simulation with conditional programming</li>
  </ul>

  <h2 style="color:#34495e;">👨‍💻 About the Developer</h2>
  <p style="font-size:15px;">
    Developed by <b>Muhammad Abdullah</b> — a passionate <b>Full Stack MERN Developer</b> and <b>Graphic Designer</b> at 
    <i>Pixel Perfect Design</i>. He loves building creative and logical projects that merge design with functionality.
  </p>

  <p style="font-style:italic; color:#555; background-color:#f0f4ff; border-left:4px solid #3498db; padding:8px;">
    “Code with logic, design with vision.” — Muhammad Abdullah
  </p>

  <p style="text-align:center; color:#555; margin-top:30px;">
    © 2025 | Built by <b>Muhammad Abdullah</b> 💻
  </p>

  </body>
