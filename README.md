# goldendawn4306.github.io
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Web Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .container {
            text-align: center;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            margin-top: 20px;
            border-radius: 5px;
            background-color: #007BFF;
            color: white;
        }
    </style>
</head>
<body>
    
    <div class="container">
        <img src="C:\Users\Devin\OneDrive\Documents\Angelo Spring 25'\CS 4306 Project\Fin Flow Logo.jpg" width="800" height="600">
        <h1>Welcome to FinFlow</h1>
        <p>Click the button to start tracking your expenses:</p>
        <button onclick="showMessage()">Click Me</button>
        
        <p id="message"></p>
        
        
    </div>

    <script>
        function showMessage() {
            document.getElementById('message').innerText = 'Hello, World!';
        }
    </script>
</body>
</html>
